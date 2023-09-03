import { hisCont, inputVal, resVal } from "../constants/constants.js";

export const addHistory = (str) => {
  const newDiv = document.createElement("div");
  const innerDiv = document.createElement("div");
  const cancelDiv = document.createElement("div");
  cancelDiv.innerText = "x";
  innerDiv.innerText = `${str}`;

  newDiv.appendChild(innerDiv);
  newDiv.appendChild(cancelDiv);
  innerDiv.classList.add("history-content");
  cancelDiv.classList.add("cancel-history");
  hisCont.appendChild(newDiv);
  innerDiv.addEventListener("click", () => {
    inputVal.innerText = innerDiv.innerText;
    resVal.innerText = "";
    //editVal.value = innerDiv.innerText
  });
  cancelDiv.addEventListener("click", () => {
    hisCont.removeChild(newDiv);
  });
};
