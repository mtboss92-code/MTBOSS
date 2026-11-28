import pool from '@/lib/db';
import { NextResponse } from 'next/server';
import { requireRole, unauthorized } from '@/lib/auth';
import { createInitializationGuard, handleApiError } from '@/lib/api-utils';

const DEFAULT_UNITS = ['bag', 'bags', 'pcs', 'kg', 'quintal', 'box', 'bundle', 'cft', 'ton', 'meter', 'set', 'bucket'];

const ensureUnitsTable = createInitializationGuard(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS shop_units (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL UNIQUE,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `);
  const { rows: [{ count }] } = await pool.query('SELECT COUNT(*)::int AS count FROM shop_units');
  if (count === 0) {
    for (const [index, name] of DEFAULT_UNITS.entries()) {
      await pool.query('INSERT INTO shop_units (name, sort_order) VALUES ($1, $2)', [name, index]);
    }
  }
}, 24 * 60 * 60 * 1000, 'shop_units_table');

export async function GET() {
  try {
    await ensureUnitsTable();
    const { rows } = await pool.query('SELECT id, name FROM shop_units ORDER BY sort_order ASC, name ASC');
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(req) {
  try {
    await ensureUnitsTable();
    if (!requireRole(req, 'admin')) return unauthorized();
    const name = String((await req.json()).name || '').trim().replace(/\s+/g, ' ');
    if (!name) return NextResponse.json({ error: 'Unit name is required' }, { status: 400 });
    const { rows: [{ max }] } = await pool.query('SELECT COALESCE(MAX(sort_order), -1)::int AS max FROM shop_units');
    const { rows } = await pool.query(
      'INSERT INTO shop_units (name, sort_order) VALUES ($1, $2) RETURNING id, name',
      [name, max + 1]
    );
    return NextResponse.json({ success: true, data: rows[0] }, { status: 201 });
  } catch (error) {
    if (error?.code === '23505') return NextResponse.json({ error: 'This unit already exists' }, { status: 409 });
    return handleApiError(error);
  }
}

export async function DELETE(req) {
  try {
    await ensureUnitsTable();
    if (!requireRole(req, 'admin')) return unauthorized();
    const id = Number(new URL(req.url).searchParams.get('id'));
    if (!Number.isInteger(id) || id < 1) return NextResponse.json({ error: 'Valid unit id is required' }, { status: 400 });
    const { rowCount } = await pool.query('DELETE FROM shop_units WHERE id = $1', [id]);
    if (!rowCount) return NextResponse.json({ error: 'Unit not found' }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch (error) {
    return handleApiError(error);
  }
}
