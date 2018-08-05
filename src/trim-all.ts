const leading: (_: string) => RegExp = (char: string) => new RegExp(`^${char}*`);
const trailing: (_: string) => RegExp = (char: string) => new RegExp(`${char}*$`);

/**
 * Trims all leading and trailing occurences of the specified character.
 * This is a curried function.
 *
 * @param char {string} the character to be trimmed
 */
export const trimAll = (char: string): (_: string) => string => (value: string): string => {
    return value.replace(leading(char), "").replace(trailing(char), "");
};
