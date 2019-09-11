// TODO (billg): 5 overloads should *probably* be enough for anybody?
function call<T1, T2, T3, T4, R>(fn: (param1: T1, param2: T2, param3: T3, param4: T4) => R, param1: T1, param2: T2, param3: T3, param4: T4): R
function call<T1, T2, T3, R>(fn: (param1: T1, param2: T2, param3: T3) => R, param1: T1, param2: T2, param3: T3): R
function call<T1, T2, R>(fn: (param1: T1, param2: T2) => R, param1: T1, param2: T2): R
function call<T1, R>(fn: (param1: T1) => R, param1: T1): R;
function call<R>(fn: () => R): R;
function call(fn: (...args: any[]) => any, ...args: any[]) {
    return fn(...args);
}

// shorthand:

function callWithTuple<TS extends any[], R>(fn: (...args: TS) => R, ...args: TS): R {
    return fn(...args);
}

// Both `y` and `z` are optional here.
function foobar(x: boolean, y = 100, z?: string) {
    // ...
}

foobar(true);
foobar(true, undefined, "hello");
foobar(true, 200);
// The last parameter can be a rest parameter.

// `rest` accepts any number of strings - even none!
function foo(...rest: string[]) {
    // ...
}

// NEW since 3.0:

// First, tuples now allow trailing optional elements:
type Coordinate = [number, number, number?];
// Second, tuples now allow rest elements at the end.
type OneNumberAndSomeStrings = [number, ...string[]];
// Finally, tuples can now be empty! While it’s not that
// useful outside of parameter lists, the empty tuple type can be referenced as []:
type EmptyTuple = [];




