function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  return items.filter((item) => {
    let val: string = "";
    switch (ruleKey) {
      case "type":
        val = item[0];
        break;
      case "color":
        val = item[1];
        break;
      case "name":
        val = item[2];
        break;
    }
    return val === ruleValue;
  }).length;
}
