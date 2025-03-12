import { calculatorDisplay } from "./selector.js";

let firstValue = 0;
let awaitingNextValue = false;
let operatorValue = "";

/* for export firstValue */
export function getFirstValue() {
  return firstValue;
}
export function setFirstValue(value) {
  return (firstValue = value);
}

/* for export awaitingNextValue */
export function getAwaitingNextValue() {
  return awaitingNextValue;
}
export function setAwaitingNextValue(value) {
  return (awaitingNextValue = value);
}

/* for export operatorValue */
export function getOperatorValue() {
  return operatorValue;
}
export function setOperatorValue(value) {
  return (operatorValue = value);
}

export function resetAll() {
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = false;
  calculatorDisplay.textContent = "0";
}
