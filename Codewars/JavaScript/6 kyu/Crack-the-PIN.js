function crack(hash) {
  const crypto = require('crypto');

  const target = hash.toLowerCase();

  for (let i = 0; i < 100000; i++) {
    const pin = String(i).padStart(5, '0');
    const digest = crypto.createHash('md5').update(pin).digest('hex');

    if (digest === target) return pin;
  }

  return null;
}
