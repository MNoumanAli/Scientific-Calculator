import { hasConsecutiveDots } from "./hasConsectiveDots.js";
import { isDigit } from "./isDigit.js";
import { isOperator } from "./isOperator.js";
import { isTrignometricFunction } from "./isTrignometricFunction.js";

// Check if Expression is Mathematically Correct
export const checkValidExpression = (str) => {
  let s = [];
  let check = false;
  // Regular expression to match invalid patterns
  const invalidPattern =
    /(tan\s*tan|sin\s*sin|cos\s*cos|sqrt\s*sqrt|tan|sin|cos|sqrt)(?![0-9()])/i;

  if (hasConsecutiveDots(str)) {
    return false;
  }
  if (str[str.length - 1] === ".") {
    return false;
  }
  if (invalidPattern.test(str)) {
    return false;
  }
  for (let i = 0; i < str.length; ++i) {
    // consective operator check
    if (isOperator(str[i]) && check && str[i - 1] !== "(") {
      return false;
    }
    // operator is at last
    if (isOperator(str[i]) && i + 1 === str.length) {
      return false;
    }
    // Expression contain Invalid Character
    if (
      !isOperator(str[i]) &&
      !isDigit(str[i]) &&
      !isTrignometricFunction(str) &&
      str[i] !== "(" &&
      str[i] !== ")" &&
      str[i] != "."
    ) {
      return false;
    }
    if (isOperator(str[i])) {
      check = true;
    }
    if (!isOperator(str[i]) && str[i] !== "(" && str[i] !== ")") {
      check = false;
    }
    // for checking Valid Parenthesis
    if (str[i] === "(") {
      s.push(str[i]);
    }
    if (str[i] === ")") {
      if (s.length === 0) {
        return false;
      } else s.pop();
    }
  }
  if (s.length === 0) {
    return true;
  }
  return false;
}
