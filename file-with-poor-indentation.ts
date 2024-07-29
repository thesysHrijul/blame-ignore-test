function myFunction() {
  console.log('This function has an indentation level of 2 spaces');
  mySecondFunctionWithLotsOfParams('hello', 'this', 'is', 'my', 'function');
}

function mySecondFunctionWithLotsOfParams(a: string, b: string, c: string, d: string, e: string) {
  console.log(`The passed params are: ${a}, ${b}, ${c}, ${d}, ${e}`);
}
