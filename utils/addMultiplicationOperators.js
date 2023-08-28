// Add Multiplication operator , 5(7) -> 5*(7)
export const addMultiplicationOperators = (expression) => {
  // Replace digits followed by "(" with digits followed by "*("
  const modifiedExpression = expression.replace(/(\d)(?=\()/g, "$1*");
  // Replace ")" followed by digits with ")*"
  const tempExpression = modifiedExpression.replace(/\)(?=\d)/g, ")*");
  // Add * between )( -> ()() into ()*()
  const finalExpression = tempExpression.replace(/\)\(/g, ")*(");
  return finalExpression;
};
