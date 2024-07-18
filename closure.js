function outerFunction(outerData) {
  let innerData = 10;
  function innerFunction() {
    console.log(innerData + outerData);
  }
  return innerFunction;
}
let someData = 5;

const closureExample = outerFunction(someData);
closureExample();
