interface User {
    name: string;
    age: number;
    location: string;
}

declare function getUserData(): Promise<User>;
declare function displayUser(user: User): void;

async function f2() {
    // you can add the missing await with vscodes suggestion
    // displayUser(getUserData());
}

