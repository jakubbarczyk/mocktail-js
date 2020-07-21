const leading: (_: string) => RegExp = (char: string) => new RegExp(`^${char}*`);
const trailing: (_: string) => RegExp = (char: string) => new RegExp(`${char}*$`);

/**
 * Trims all leading and trailing occurences of the specified character.
 */
export const trimAll = (char: string) => (value: string): string =>
    value.replace(leading(char), "").replace(trailing(char), "");
