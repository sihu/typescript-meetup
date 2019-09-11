declare class Foo {
    // (like in declare-d classes, or 
    // in .d.ts files in general).
    get x(): number;
    set x(val: number);
}

function sayHello2(name, age) {
    return `Hi ${name} next year you'll be ${age + 1}`
}

sayHello2('Simon', 30);

class Bar {
    get x(): number {
        return 3;
    };
    set x(val: number) {
        this.x = val;
    };
}