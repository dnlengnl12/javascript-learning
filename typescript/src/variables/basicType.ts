let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;

numValue = 3 || null || undefined;
stringValue = 'hello';
booleanValue = true;
undefinedValue = undefined || null;
objValue = { name: 'jay' };
objValue = new String(33);

// symbolValue = Symbol(); ??

let nameList: string[];
nameList = ["1", "3"];
nameList.push("5");

let user1: { name: string, score: number };
user1 = {
    name: 'jay',
    score: 30
}

let tuple2: [number, string];
let tuple3: [number, number, number];
tuple2 = [1, "hello"];
tuple3 = [1, 2, 3];