
// vscode will suggest you the inferred types
export function sayHello(name, age) {
    return `Hi ${name} next year you'll be ${age + 1}`
}

sayHello('Simon', 30);

// Infer all types from usage: Tested in VSCode and IntelliJ
// Convert parameters to destructed object