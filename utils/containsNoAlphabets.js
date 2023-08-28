export const containsNoAlphabets = (inputStr) => {
  return /^[^a-zA-Z]*$/.test(inputStr);
};
