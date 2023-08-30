export const isOperator = (num) => {
  const arr = ["+", "/", "-", "*", "^"];
  return arr.includes(num);
};
