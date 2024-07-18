let outerData;
let innerData = 10;

function outerFunction(globalOuterData) {
  outerData = globalOuterData;
  function innerFunction() {
    console.log(innerData + outerData);
  }

  return innerFunction;
}

function anotherFunction() {
  outerData = 20;
  console.log("anotherFunction에서 outerData:", outerData);
}
let someData = 5;
const closureExample = outerFunction(someData);

closureExample();
anotherFunction();
