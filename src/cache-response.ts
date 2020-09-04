let cache: any = {};
export const hundredTimes = (param: number): number => {
  if (param in cache) {
    return cache[param];
  } else {
    let result = param * 100;
    cache[param] = result;
    return result;
  }
};
