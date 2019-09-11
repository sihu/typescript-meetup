type S = { done: boolean, value: number }
type T =
    | { done: false, value: number }
    | { done: true, value: number };

declare let source: S;
declare let target: T;

target = source;

/////////////////////////////////////////////////////

type Fruit = "apple" | "orange";
type Color = "red" | "orange";

type FruitEater = (fruit: Fruit) => number;     // eats and ranks the fruit
type ColorConsumer = (color: Color) => string;  // consumes and describes the colors

declare let f: FruitEater | ColorConsumer;

f("orange"); // It works! Returns a 'number | string'.
// f("apple");  // error - Argument of type '"apple"' is not assignable to parameter of type '"orange"'.
// f("red");    // error - Argument of type '"red"' is not assignable to parameter of type '"orange"'.

/////////////////////////////////////////////////////

interface Dog {
    kind: "pupper"
    dogProp: any;
}
interface Cat {
    kind: "kittyface"
    catProp: any;
}

const catOrDogArray: Dog[] | Cat[] = [];
catOrDogArray.forEach((animal: Dog | Cat) => {
    if (animal.kind === "pupper") {
        animal.dogProp;
        // ...
    }
    else if (animal.kind === "kittyface") {
        animal.catProp;
        // ...
    }
});