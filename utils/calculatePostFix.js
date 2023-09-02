import { isDigit } from "./isDigit.js";
import { isOperator } from "./isOperator.js";
import { isTrignometricFunction } from "./isTrignometricFunction.js";
import { errorContainer, showError } from "../constants/constants.js";
// Calculate Expression
export const calculatePostFix = (exp) => {
  let oprnd = [];
  for (let i = 0; i < exp.length; ++i) {
    if (!isOperator(exp[i]) && !isTrignometricFunction(exp[i])) {
      oprnd.push(exp[i]);
    } else {
      try {
        const num1 = Number(oprnd.pop());
        let num2 = "";
        if (!isTrignometricFunction(exp[i])) num2 = Number(oprnd.pop());
        switch (exp[i]) {
          case "+":
            oprnd.push(num1 + num2);
            break;
          case "-":
            oprnd.push(num2 - num1);
            break;
          case "*":
            if (isNaN(num2)) {
              throw new Error("Invalid Expression");
            }
            oprnd.push(num1 * num2);
            break;
          case "/":
            if (num1 === 0) {
              throw new Error("Cannot Evaluate (Division by zero)");
            }
            oprnd.push(num2 / num1);
            break;
          case "^":
            oprnd.push(Math.pow(num2, num1));
            break;
          case "tan":
            oprnd.push(Math.tan(num1));
            break;
          case "sin":
            oprnd.push(Math.sin(num1));
            break;
          case "cos":
            oprnd.push(Math.cos(num1));
            break;
          case "sqrt":
            if (num1 < 0)
              throw new Error("Square Root of Negative Number not Possible");
            oprnd.push(Math.sqrt(num1));
            break;
        }
      } catch (error) {
        errorContainer.style.display = "flex";
        showError.innerText = error;
        return;
      }
    }
  }
  const result = oprnd.pop()
  if(!Number.isInteger(Number(result)))
  {
    return result.toFixed(4)
  }
  else
  {
    return result
  }
  //return oprnd.pop();
};
