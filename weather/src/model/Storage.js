export const storage = {
    setItem: (name, item) => {
        localStorage.setItem(name, JSON.stringify(item));
        console.log(name + ' ' + item);
    },
    getItem: (name) => {
        const item = localStorage.getItem(name);
        if (item) { return JSON.parse(item) }

    },
}