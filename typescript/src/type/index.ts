interface Props {
    name: string;
    [key: string]: string;
}

const p: Props = {
    name: 'hello',
    a: 'd',
    b: 'e',
    c: '3',
    0: 'd',
    1: 'f'
}

let keys: keyof Props;

interface User {
    name: string;
    age: number;
    hello(msg: string): void;
}

let keysOfUser: keyof User;
keysOfUser = "age"

let helloMethod: User["hello"];
helloMethod = function(msg: string) {

}
