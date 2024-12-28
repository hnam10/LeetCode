/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var localInit = init;
    return{
        increment: () => {return ++localInit},
        decrement: () => {return --localInit},
        reset: () => {localInit = init; return localInit} 
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */