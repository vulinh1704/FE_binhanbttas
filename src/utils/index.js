export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-", "[", "]", "{", "}", /[^A-Za-z]/g].includes(e.key) &&
  e.preventDefault();
