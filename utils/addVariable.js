import {
  variabesContainer,
  showError,
  errorContainer,
} from "../constants/constants.js";
import { updateVariable } from "../src/index.js";
let tempVariables = [];

export const addVariable = (name, value) => {
  try {
    if (!name || !value) {
      throw new Error("Add Variable Name and its Value");
    }
    if (
      name === "tan" ||
      name === "cos" ||
      name === "sin" ||
      name === "sqrt" ||
      name === "pi" ||
      name === "e"
    ) {
      throw new Error("Variable name not allowed.");
    }
    if (
      tempVariables.length === 0 ||
      !tempVariables.find((obj) => obj.name === name)
    ) {
      // add variable to list
      tempVariables = [...tempVariables, { name: name, value: Number(value) }];
      // add tempVariables to UI
      const newDiv = document.createElement("div");
      const innerDiv = document.createElement("div");
      const cancelDiv = document.createElement("div");
      cancelDiv.innerText = "x";
      innerDiv.innerText = `${name} - ${value}`;

      newDiv.appendChild(innerDiv);
      newDiv.appendChild(cancelDiv);
      innerDiv.classList.add("history-content");
      cancelDiv.classList.add("cancel-history");
      variabesContainer.appendChild(newDiv);

      cancelDiv.addEventListener("click", () => {
        variabesContainer.removeChild(newDiv);
        tempVariables = tempVariables.filter((temp) => temp.name !== name);
      });
      updateVariable(tempVariables);
    } else {
      throw new Error("Variable Already Exist");
    }
  } catch (error) {
    errorContainer.style.display = "flex";
    showError.innerText = error;
  }
};
