interface DB<T> {
    add(v: T): void;
    get(): T;
}

class LocalDB<T> {
    constructor(private localStroageKey: string) {

    }
    add(v: T) {
        localStorage.setItem(this.localStroageKey, JSON.stringify(v));
    }
    get(): T {
        const v = localStorage.getItem(this.localStroageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

interface User { name: string }

const userDb = new LocalDB<User>('user');
userDb.add({ name: 'jay' });
const user1A= userDb.get();