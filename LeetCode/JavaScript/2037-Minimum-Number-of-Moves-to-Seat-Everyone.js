// 2037. Minimum Number of Moves to Seat Everyone
// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */

var minMovesToSeat = function (seats, students) {
  const swap = (arr, index, tempIndex) => {
    let temp = arr[index];
    arr[index] = arr[tempIndex];
    arr[tempIndex] = temp;
  };

  const length = seats.length;
  let minSeatsIndex, minStudentsIndex;
  let minSeatsBool, minStudentsBool;
  for (let i = 0; i < length - 1; i++) {
    minSeatsIndex = minStudentsIndex = i;
    minSeatsBool = minStudentsBool = false;
    for (let j = i + 1; j < length; j++) {
      if (seats[j] < seats[minSeatsIndex]) {
        minSeatsIndex = j;
        minSeatsBool = true;
      }
      if (students[j] < students[minStudentsIndex]) {
        minStudentsIndex = j;
        minStudentsBool = true;
      }
    }
    if (minSeatsBool) swap(seats, i, minSeatsIndex);
    if (minStudentsBool) swap(students, i, minStudentsIndex);
  }

  let totalMove = 0;
  for (let i = 0; i < length; i++) {
    totalMove += Math.abs(seats[i] - students[i]);
  }

  return totalMove;
};
