const fs = require('fs');

// 1. Update src/app/vendor/signup/page.jsx
let signupContent = fs.readFileSync('MT-Boss/src/app/vendor/signup/page.jsx', 'utf8');
const isCrlfSignup = signupContent.includes('\r\n');
if (isCrlfSignup) signupContent = signupContent.replace(/\r\n/g, '\n');

// handleChange update
const changeTarget = `    if (name === 'phone') {
      const rawDigits = value.replace(/\\D/g, '');
      setFormData(prev => ({ ...prev, phone: rawDigits && /^[6-9]/.test(rawDigits) ? rawDigits.slice(0, 10) : '' }));
    } else if (name === 'city') {`;

const changeReplacement = `    if (name === 'phone') {
      const rawDigits = value.replace(/\\D/g, '');
      setFormData(prev => ({ ...prev, phone: rawDigits && /^[6-9]/.test(rawDigits) ? rawDigits.slice(0, 10) : '' }));
    } else if (name === 'vendor_name' || name === 'service provider_name') {
      setFormData(prev => ({ ...prev, vendor_name: value }));
    } else if (name === 'city') {`;

if (!signupContent.includes(changeTarget)) {
  console.error('changeTarget not found in vendor/signup/page.jsx');
  process.exit(1);
}
signupContent = signupContent.replace(changeTarget, changeReplacement);

// payload update
const payloadTarget = `payload.append('service provider_name', formData.vendor_name);`;
const payloadReplacement = `payload.append('vendor_name', formData.vendor_name);
      payload.append('service provider_name', formData.vendor_name);`;

if (!signupContent.includes(payloadTarget)) {
  console.error('payloadTarget not found in vendor/signup/page.jsx');
  process.exit(1);
}
signupContent = signupContent.replace(payloadTarget, payloadReplacement);

// input update
const inputTarget = `                  <div className="vs-field">
                    <label className="vs-label">Service Provider Name <RequiredAsterisk /></label>
                    <input
                      className="vs-input"
                      type="text"
                      name="service provider_name"
                      value={formData.vendor_name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                  </div>`;

const inputReplacement = `                  <div className="vs-field">
                    <label className="vs-label">Service Provider Name <RequiredAsterisk /></label>
                    <input
                      className="vs-input"
                      type="text"
                      name="vendor_name"
                      value={formData.vendor_name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                  </div>`;

if (!signupContent.includes(inputTarget)) {
  console.error('inputTarget not found in vendor/signup/page.jsx');
  process.exit(1);
}
signupContent = signupContent.replace(inputTarget, inputReplacement);

if (isCrlfSignup) signupContent = signupContent.replace(/\n/g, '\r\n');
fs.writeFileSync('MT-Boss/src/app/vendor/signup/page.jsx', signupContent, 'utf8');
console.log('Updated vendor/signup/page.jsx successfully!');

// 2. Update src/app/api/vendor/signup/route.js
let apiContent = fs.readFileSync('MT-Boss/src/app/api/vendor/signup/route.js', 'utf8');
const isCrlfApi = apiContent.includes('\r\n');
if (isCrlfApi) apiContent = apiContent.replace(/\r\n/g, '\n');

const apiFdTarget = `vendor_name   = fd.get('vendor_name');`;
const apiFdReplacement = `vendor_name   = fd.get('vendor_name') || fd.get('service provider_name');`;

if (!apiContent.includes(apiFdTarget)) {
  console.error('apiFdTarget not found in api/vendor/signup/route.js');
  process.exit(1);
}
apiContent = apiContent.replace(apiFdTarget, apiFdReplacement);

const apiBodyTarget = `vendor_name   = body.vendor_name;`;
const apiBodyReplacement = `vendor_name   = body.vendor_name || body['service provider_name'];`;

if (!apiContent.includes(apiBodyTarget)) {
  console.error('apiBodyTarget not found in api/vendor/signup/route.js');
  process.exit(1);
}
apiContent = apiContent.replace(apiBodyTarget, apiBodyReplacement);

if (isCrlfApi) apiContent = apiContent.replace(/\n/g, '\r\n');
fs.writeFileSync('MT-Boss/src/app/api/vendor/signup/route.js', apiContent, 'utf8');
console.log('Updated api/vendor/signup/route.js successfully!');

