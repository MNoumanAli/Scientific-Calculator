import { addVariable } from "../utils/addVariable.js";
import { hideError } from "../utils/hideError.js";
import { makePostfix } from "../utils/makePostfix.js";
import { updateInput } from "../utils/updateInput.js";
import { clearAll } from "../utils/clearAll.js";
import { clearInput } from "../utils/clearInput.js";
import { parser } from "../utils/parser.js";
import {
  equalBtn,
  addVariableBtn,
  btns,
  removeError,
  editVal,
  changeInput,
  inputVal,
  cAll,
  cInput,
  body,
  variableName,
  variableValue,
  errorContainer,
  resVal,
} from "../constants/constants.js";

export let variables = [
  { name: "tan", value: "tan" },
  { name: "cos", value: "cos" },
  { name: "sin", value: "sin" },
  { name: "sqrt", value: "sqrt" },
  { name: "e", value: "2.7182" },
  { name: "pi", value: "3.1415" },
];
export let temp = "";

export const changeTemp = (num) => {
  temp = num;
};
export const updateVariable = (num) => {
  variables = [...variables, ...num];
};

const btnsArray = Array.from(btns);
btnsArray.forEach((btn) => {
  btn.addEventListener("click", function () {
    inputVal.innerText += ` ${btn.innerText}`;
  });
});

body.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    updateInput();
    makePostfix(inputVal.innerText);
  }
});

addVariableBtn.addEventListener("click", () =>
  addVariable(variableName.value, variableValue.value)
);
removeError.addEventListener("click", () => hideError(errorContainer));
changeInput.addEventListener("click", updateInput);
equalBtn.addEventListener("click", () => makePostfix(inputVal.innerText));
cAll.addEventListener("click", () => clearAll(resVal, inputVal, editVal));
cInput.addEventListener("click", () => clearInput(inputVal));
editVal.addEventListener("input", () => parser(editVal.value));
