// check Operator Precedence
export const checkPrecedence = (str) => {
  switch (str) {
    case "tan":
    case "sin":
    case "cos":
    case "sqrt":
      return 7;
    case "(":
      return 6;
    case "^":
      return 5;
    case "/":
    case "*":
      return 3;
    case "+":
    case "-":
      return 2;
    default:
      return 1;
  }
}
