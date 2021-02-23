function countStudents(students: number[], sandwiches: number[]): number {
  let curRoundCount = 0, remainedStu = students.length;
  while(students.length) {
    const stu = students.shift();
    if (stu === sandwiches[0]) {
      sandwiches.shift(); // 此学生取走第一个三明治
      curRoundCount = 0; // 当前轮次结束
      remainedStu--;
    } else {
      students.push(stu!);
      curRoundCount++;
      if (curRoundCount === remainedStu) {
        break;
      }
    }
  }

  return remainedStu;
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));
