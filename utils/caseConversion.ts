export function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

export function convertKeysToSnakeCase(input: any): any {
  // loop through all the keys in the input object and create a new object with the same keys in snake case
  const output: any = {};
  for (const key in input) {
    output[toSnakeCase(key)] = input[key];
  }
  return output;
}