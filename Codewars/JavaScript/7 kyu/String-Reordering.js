function sentence(arrayOfObjects) {
  return arrayOfObjects
    .map(obj => {
      const key = Object.keys(obj)[0];
      return { key: +key, value: obj[key] };
    })
    .sort((a, b) => a.key - b.key)
    .map(item => item.value)
    .join(' ');
}
