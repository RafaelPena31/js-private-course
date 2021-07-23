/** CONTROL VARIABLES */
let calculatorData = [];
let currentValue = "";
let result = 0;

/** NUMBERS */
const nineButton = document.getElementById("nine");
const eightButton = document.getElementById("eight");
const sevenButton = document.getElementById("seven");
const sixButton = document.getElementById("six");
const fiveButton = document.getElementById("five");
const fourButton = document.getElementById("four");
const threeButton = document.getElementById("three");
const twoButton = document.getElementById("two");
const oneButton = document.getElementById("one");
const zeroButton = document.getElementById("zero");
const commaButton = document.getElementById("comma");

/** EQUAL COMMAND */
const equalButton = document.getElementById("equal");

/** COUNT COMMAND */
const squareButton = document.getElementById("square");
const percentButton = document.getElementById("percent");

const divisionButton = document.getElementById("division");
const multiButton = document.getElementById("multi");
const subButton = document.getElementById("sub");
const sumButton = document.getElementById("sum");

/** SYSTEM COMMAND */
const deleteButton = document.getElementById("delete");

/** INTERFACE */
const display = document.getElementById("numbers");

window.onload = () => {
  nineButton.addEventListener("click", () =>
    onKeyPressed(nineButton.textContent)
  );
  eightButton.addEventListener("click", () =>
    onKeyPressed(eightButton.textContent)
  );
  sevenButton.addEventListener("click", () =>
    onKeyPressed(sevenButton.textContent)
  );
  sixButton.addEventListener("click", () =>
    onKeyPressed(sixButton.textContent)
  );
  fiveButton.addEventListener("click", () =>
    onKeyPressed(fiveButton.textContent)
  );
  fourButton.addEventListener("click", () =>
    onKeyPressed(fourButton.textContent)
  );
  threeButton.addEventListener("click", () =>
    onKeyPressed(threeButton.textContent)
  );
  twoButton.addEventListener("click", () =>
    onKeyPressed(twoButton.textContent)
  );
  oneButton.addEventListener("click", () =>
    onKeyPressed(oneButton.textContent)
  );
  zeroButton.addEventListener("click", () =>
    onKeyPressed(zeroButton.textContent)
  );
  commaButton.addEventListener("click", () => onKeyPressed("."));

  /* ============================================================== */

  equalButton.addEventListener("click", () => onKeyPressed("="));
  deleteButton.addEventListener("click", () => onKeyPressed("delete"));

  /* ============================================================== */

  squareButton.addEventListener("click", () => onKeyPressed("sqrt"));
  percentButton.addEventListener("click", () => onKeyPressed("%"));
  divisionButton.addEventListener("click", () => onKeyPressed("/"));
  multiButton.addEventListener("click", () => onKeyPressed("*"));
  subButton.addEventListener("click", () => onKeyPressed("-"));
  sumButton.addEventListener("click", () => onKeyPressed("+"));
};

const onKeyPressed = (keyValue) => {
  const breakConditional = isBreakCondition(keyValue);

  const isEqual = keyValue === "=";
  const isDelete = keyValue === "delete";

  if (breakConditional) {
    onPressCalculateCharacter(keyValue);
  } else if (isEqual) {
    onPressEqual();
  } else if (isDelete) {
    onPressDelete();
  } else {
    onPressCalculatorValueKey(keyValue);
  }
  display.textContent = currentValue;
};

const calculate = (calculatorDataArray) => {
  calculatorDataArray.forEach((item, index) => {
    switch (item) {
      case "sqrt":
        result = Math.sqrt(+calculatorDataArray[index - 1]);
        break;
      case "%":
        result =
          +calculatorDataArray[index - 1] *
          (+calculatorDataArray[index + 1] / 100);
        break;
      case "/":
        result =
          +calculatorDataArray[index - 1] / +calculatorDataArray[index + 1];
        break;
      case "*":
        result =
          +calculatorDataArray[index - 1] * +calculatorDataArray[index + 1];
        break;
      case "-":
        result =
          +calculatorDataArray[index - 1] - +calculatorDataArray[index + 1];
        break;
      case "+":
        result =
          +calculatorDataArray[index - 1] + +calculatorDataArray[index + 1];
        break;
    }
  });
  currentValue = result.toString();
  calculatorData = [];
};

const isBreakCondition = (keyValue) => {
  return (
    keyValue === "sqrt" ||
    keyValue === "%" ||
    keyValue === "/" ||
    keyValue === "*" ||
    keyValue === "-" ||
    keyValue === "+"
  );
};

const onPressCalculatorValueKey = (keyValue) => {
  const isComma = keyValue === ".";
  if (isComma) {
    const isLastItemOfCalculatorDataNumber = !isNaN(currentValue);
    if (isLastItemOfCalculatorDataNumber) {
      currentValue += keyValue;
    }
  } else {
    const breakConditional = isBreakCondition(currentValue);
    breakConditional ? (currentValue = keyValue) : (currentValue += keyValue);
  }
};

const onPressCalculateCharacter = (keyValue) => {
  calculatorData.push(currentValue);
  calculatorData.push(keyValue);
  currentValue = keyValue;
};

const onPressEqual = () => {
  const breakConditional = !isBreakCondition(currentValue);

  breakConditional && calculatorData.push(currentValue);
  calculate(calculatorData);
};

const onPressDelete = () => {
  const lastItemOfCalculatorData = calculatorData[calculatorData.length - 1];
  const breakConditional = isBreakCondition(lastItemOfCalculatorData);

  if (breakConditional) {
    calculatorData = [];
    currentValue = 0;
  } else {
    currentValue = currentValue.substr(0, currentValue.length - 1);
  }
};
