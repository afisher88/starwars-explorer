import upperFirst  from "lodash/upperFirst";

export function sanitiseKey(string: string) {
  return upperFirst(string.replace("_", " "));
}
