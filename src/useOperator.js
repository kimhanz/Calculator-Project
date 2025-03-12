import { calculatorDisplay } from "./selector.js";
import {
  getAwaitingNextValue,
  getOperatorValue,
  getFirstValue,
  setAwaitingNextValue,
  setOperatorValue,
  setFirstValue,
} from "./value.js";

import calculate from "./calculate.js";

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent); // แปลง string > number เพื่อใช้ operator

  if (getOperatorValue() && getAwaitingNextValue()) {
    setOperatorValue(operator);
    return;
  }

  if (!getFirstValue()) {
    setFirstValue(currentValue);
  } else {
    const calculation = calculate[getOperatorValue()](
      getFirstValue(),
      currentValue
    );
    calculatorDisplay.textContent = calculation;
    setFirstValue(calculation);
  }
  setAwaitingNextValue(true);
  setOperatorValue(operator);
}

export default useOperator;
