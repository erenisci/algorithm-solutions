function driver(data) {
  const birthDay = new Date(data[3]);
  const year = birthDay.getFullYear().toString();

  return (
    (data[2].toUpperCase() + '99999').slice(0, 5) +
    year[2] +
    (data[4] === 'M' ? birthDay.getMonth() + 1 : birthDay.getMonth() + 51)
      .toString()
      .padStart(2, '0') +
    birthDay.getDate().toString().padStart(2, '0') +
    year[3] +
    data[0][0].toUpperCase() +
    (data[1] ? data[1][0].toUpperCase() : '9') +
    '9AA'
  );
}
