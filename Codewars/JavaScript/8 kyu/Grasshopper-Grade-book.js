function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;
  if (average < 60) return 'F';
  else if (average < 70) return 'D';
  else if (average < 80) return 'C';
  else if (average < 90) return 'B';
  else return 'A';
}
