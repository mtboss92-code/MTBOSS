import { NextResponse } from 'next/server';
import { resolveCommissionRate } from '@/lib/shop-commissions';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || '';
    const categoryId = searchParams.get('category_id') ? Number(searchParams.get('category_id')) : null;
    const productId = searchParams.get('product_id') ? Number(searchParams.get('product_id')) : null;
    const priceParam = searchParams.get('price');
    const price = priceParam !== null && priceParam !== undefined && priceParam !== '' ? Number(priceParam) : null;

    const resolved = await resolveCommissionRate({
      id: productId,
      category_id: categoryId,
      category,
    });

    const rate = Number(resolved?.rate || 0);
    const orderAmount = price !== null && Number.isFinite(price) && price >= 0 ? price : 0;
    const commissionAmount = Math.round((orderAmount * (rate / 100)) * 100) / 100;
    const vendorPayout = Math.max(0, Math.round((orderAmount - commissionAmount) * 100) / 100);

    return NextResponse.json({
      success: true,
      data: {
        ...resolved,
        rate,
        orderAmount,
        commissionAmount,
        vendorPayout,
      },
    });
  } catch (err) {
    console.error('Error resolving commission rate:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Failed to resolve commission rate' },
      { status: 500 }
    );
  }
}

