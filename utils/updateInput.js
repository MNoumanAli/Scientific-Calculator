import { errorContainer, showError, inputVal } from "../constants/constants.js";
import { containsOnlyLetters } from "./containsOnlyLetters.js";
import { temp, variables } from "../src/index.js";

export const updateInput = () => {
  try {
    if (temp.length === 0) {
      throw new Error("Please Write Mathematical Expression");
    }
    let arr = temp.split(" ");
    let finalExp = "";
    for (const p of arr) {
      if (containsOnlyLetters(p)) {
        const a = variables.filter((item) => item.name === p);
        if (a.length === 0) {
          throw new Error("Variable not found");
        }
        finalExp += a[0]?.value;
      } else {
        finalExp += p;
      }
    }
    inputVal.innerText = finalExp;
  } catch (error) {
    //alert(error)
    errorContainer.style.display = "flex";
    showError.innerText = error;
  }
};
