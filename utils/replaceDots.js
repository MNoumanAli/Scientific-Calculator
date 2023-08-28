// Replace . , .5 -> 0.5
export const replaceDots = (inputString) => {
  // Use a regular expression to match dot not preceded by an integer
  const pattern = /(?<!\d)\.(?=\d)/g;
  const replacedString = inputString.replace(pattern, "0.");
  return replacedString;
};
