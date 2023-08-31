import { checkValidExpression } from "./checkValidExpression.js";
import { replaceDots } from "./replaceDots.js";
import { addMultiplicationOperators } from "./addMultiplicationOperators.js";
import { isDigit } from "./isDigit.js";
import { calculatePostFix } from "./calculatePostFix.js";
import { addHistory } from "./addHistory.js";
import { checkPrecedence } from "./checkPrecedence.js";
import {
  inputVal,
  resVal,
  showError,
  errorContainer,
} from "../constants/constants.js";

// calculate Expression
export const makePostfix = (infix) => {
  if (infix !== "") {
    // converting expression to postfix
    try {
      infix = infix.replace(/\s+/g, "");
      infix = infix.replace("e", "2.7182");
      infix = infix.replace("pi", "3.1415");
      if (!checkValidExpression(infix)) {
        throw new Error("Invalid Expression");
      } else {
        infix = addMultiplicationOperators(infix);
        infix = replaceDots(infix);
        let postExp = [];
        let oprtrStack = [];
        for (let i = 0; i < infix.length; ++i) {
          let number = "";
          if (
            isDigit(infix[i]) ||
            (i === 0 && infix[i] === "-") ||
            (infix[i] === "-" && infix[i - 1] === "(") ||
            (i === 0 && infix[i] === "+") ||
            (infix[i] === "+" && infix[i - 1] === "(")
          ) {
            let temp = i;
            let check = false;
            if (!isDigit(infix[i])) {
              if (infix[i] === "-") check = true;
              ++temp;
            }

            // convert to multiple digit number
            while (
              infix[temp] &&
              (isDigit(infix[temp]) || infix[temp] === ".")
            ) {
              number += infix[temp];
              ++temp;
            }
            if (check) postExp.push(-number);
            else postExp.push(number);
            i = temp - 1;
          } else if (infix[i] === ")") {
            while (
              oprtrStack.length > 0 &&
              oprtrStack[oprtrStack.length - 1] !== "("
            ) {
              postExp.push(oprtrStack.pop());
            }
            oprtrStack.pop();
          } else if (infix[i] === "(") {
            oprtrStack.push(infix[i]);
          } else {
            let opr;
            if (infix[i] === "t") {
              opr = "tan";
              i = i + 2;
            } else if (infix[i] === "c") {
              opr = "cos";
              i = i + 2;
            } else if (infix[i] === "s") {
              if (infix[i + 1] === "q") {
                opr = "sqrt";
                i = i + 3;
              } else {
                opr = "sin";
                i = i + 2;
              }
            } else {
              opr = infix[i];
            }
            while (
              oprtrStack.length > 0 &&
              oprtrStack[oprtrStack.length - 1] != "(" &&
              checkPrecedence(opr) <=
                checkPrecedence(oprtrStack[oprtrStack.length - 1])
            ) {
              postExp.push(oprtrStack.pop());
            }
            oprtrStack.push(opr);
          }
        }
        while (oprtrStack.length > 0) {
          postExp.push(oprtrStack.pop());
        }
        const result = calculatePostFix(postExp);
        resVal.innerText = result ?? "";
        addHistory(inputVal.innerText);
      }
    } catch (error) {
      errorContainer.style.display = "flex";
      showError.innerText = error;
    }
  }
};
