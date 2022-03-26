
const receivesAFunction = cb => cb()

const returnsANamedFunction = () => function namedFunction(){console.log('name')}

const returnsAnAnonymousFunction = () => function(){}






















// function receivesAFunction (callback) {
//     console.log(callback());
// }
// receivesAFunction(function () { return "This is a callback!"});

// const namedFunction = (() => console.log("This is a named function"));

// function returnsANamedFunction() {
//     return namedFunction;
// }
// function returnsAnAnonymousFunction() {
//     return function() {"anonymous"};
// }