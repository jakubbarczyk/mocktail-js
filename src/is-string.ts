export function isString(value: any): boolean {
    return typeof value === "string" || value as any instanceof String;
}
