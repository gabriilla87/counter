export function paramChecker(param: string) {
    let valueAsString = localStorage.getItem(param);
    if (valueAsString) {
        return JSON.parse(valueAsString)
    }
}