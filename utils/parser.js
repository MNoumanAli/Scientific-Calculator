import { isDigit } from "./isDigit.js";
import { isOperator } from "./isOperator.js";
import { editVal } from "../constants/constants.js";
import { changeTemp } from "../src/index.js";
let temp2 = "";
export const parser = (exp) => {
  let last = exp[exp.length - 1];
  if (exp.length >= temp2.length) {
    // if letter
    if (!isOperator(last) && !isDigit(last) && last !== ")" && last !== "(") {
      // if second last character is not digit or not any operator than add space
      if (isOperator(exp[exp.length - 2]) || isDigit(exp[exp.length - 2])) {
        temp2 += " ";
      }
      temp2 += last;
    } else {
      if (!isOperator(exp[exp.length - 2]) && !isDigit(exp[exp.length - 2]))
        temp2 += " ";
      temp2 += last;
    }
  } else {
    temp2 = temp2.slice(0, -1);
  }
  editVal.value = temp2;
  changeTemp(temp2);
};
