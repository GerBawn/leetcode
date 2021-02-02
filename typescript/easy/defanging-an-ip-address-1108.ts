function defangIPaddr(address: string): string {
  return address.split(".").join("[.]");
}

console.log(defangIPaddr("255.100.50.0"));
