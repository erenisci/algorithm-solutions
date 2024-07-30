const cannonsReady = gunners => {
  const vals = Object.values(gunners);
  return vals.includes('nay') ? 'Shiver me timbers!' : 'Fire!';
};
