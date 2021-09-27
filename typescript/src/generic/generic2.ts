class LocalDB {
    constructor(private localStroageKey: string) {

    }
    add(v) {
        localStorage.setItem(this.localStroageKey, JSON.stringify(v));
    }
    get() {
        const v = localStorage.getItem(this.localStroageKey);
        return (v) ? JSON.parse(v) : null;
    }
}