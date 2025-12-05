function covfefe(str) {
  if (str.includes('coverage')) {
    return str.replace(/coverage/g, 'covfefe');
  }

  return str + ' covfefe';
}
