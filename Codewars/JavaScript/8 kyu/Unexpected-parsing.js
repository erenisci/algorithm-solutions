function getStatus(isBusy) {
  const msg = isBusy ? 'busy' : 'available';
  return {
    status: msg,
  };
}
