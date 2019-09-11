function* fooGenerator() {
    if (Math.random() < 0.5) yield 100;
    return "Finished!"
}

let iter = fooGenerator();
let curr = iter.next();
if (curr.done) {
    // TypeScript 3.5 and prior thought this was a 'string | number'.
    // It should know it's 'string' since 'done' was 'true'!
    curr.value
}

function* bar() {
    let x: { hello(): number } = yield;
    x.hello();
}

let iter2 = bar();
iter2.next();
// iter2.next(42); // oops! runtime error!