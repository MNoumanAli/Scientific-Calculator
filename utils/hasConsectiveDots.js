// check if Expression has consective points
export const hasConsecutiveDots = (inputString) => {
  // Use a regular expression to check for consecutive dots
  const pattern = /\.{2,}/;
  return pattern.test(inputString);
};
