function interpret(command: string): string {
  const answer = [];
  let pos = 0;
  for (let i = 0; i < command.length; i++) {
    const char = command[i];
    if (char === ")") {
      let num = 0;
      while (answer.pop() !== "(") {
        num++;
      }
      if (num > 0) {
        answer.push("al");
      } else {
        answer.push("o");
      }
    } else {
      answer.push(char);
    }
  }

  return answer.join("");
}

console.log(interpret("(al)G(al)()()G"));
