let _globalIsAgent = false;

export function enableAgentApiContext() {
  _globalIsAgent = true;
}

export async function api(path, opts = {}) {
  const isAgentContext =
    opts.isAgent ||
    _globalIsAgent ||
    (typeof window !== 'undefined' && window.location.pathname.startsWith('/agent'));

  let token = '';
  if (typeof window !== 'undefined') {
    if (isAgentContext) {
      token = localStorage.getItem('agent-token') || localStorage.getItem('token') || '';
    } else {
      token = localStorage.getItem('admin-token') || localStorage.getItem('token') || localStorage.getItem('agent-token') || '';
    }
  }

  const res = await fetch(path, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(opts.headers || {}),
    },
  });

  const text = await res.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(text || `Request failed with status ${res.status}`);
  }
  if (!res.ok || data.success === false) {
    throw new Error(data.error || `Request failed with status ${res.status}`);
  }
  return data;
}

export async function uploadFile(file) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  if (cloudName && uploadPreset) {
    try {
      const cldBody = new FormData();
      cldBody.append('file', file);
      cldBody.append('upload_preset', uploadPreset);
      cldBody.append('folder', 'MTBOSS/bills');
      const cldRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: 'POST',
        body: cldBody,
      });
      const cldData = await cldRes.json();
      if (cldRes.ok && cldData.secure_url) {
        return {
          success: true,
          url: cldData.secure_url,
          filename: file.name || 'bill',
        };
      }
    } catch (cldErr) {
      console.warn('Direct Cloudinary client upload failed, falling back to /api/upload:', cldErr);
    }
  }

  const isAgentContext =
    _globalIsAgent ||
    (typeof window !== 'undefined' && window.location.pathname.startsWith('/agent'));
  let token = '';
  if (typeof window !== 'undefined') {
    if (isAgentContext) {
      token = localStorage.getItem('agent-token') || localStorage.getItem('token') || '';
    } else {
      token = localStorage.getItem('admin-token') || localStorage.getItem('token') || '';
    }
  }
  const fd = new FormData();
  fd.append('file', file);
  const res = await fetch('/api/upload', {
    method: 'POST',
    headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: fd,
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || 'Upload failed');
  return data;
}
