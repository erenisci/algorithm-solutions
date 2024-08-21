function maskify(cc) {
  return cc.length > 4 ? '#'.repeat(cc.length - 4) + cc.substring(cc.length - 4, cc.length) : cc;
}
