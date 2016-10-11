export const trimAll = (character: string): Function => (value: string): string => {
    while (value.slice(0, 1) === character) {
        value = value.slice(1);
    }

    while (value.slice(-1) === character) {
        value = value.slice(0, -1);
    }

    return value;
};
