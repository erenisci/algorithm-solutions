function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) sharkSpeed /= 2;
  const timeShark = sharkDistance / sharkSpeed;
  const timeYou = pontoonDistance / youSpeed;

  return timeYou < timeShark ? 'Alive!' : 'Shark Bait!';
}
