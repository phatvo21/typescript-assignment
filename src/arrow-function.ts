interface Params {
  firstParam?: string;
  secondParam?: string;
}

export const myFunc = (params: Params = {}): Params => {
  const first = params.firstParam;
  const second = params.secondParam;
  return {
    firstParam: first ? first : 'defaultFirst',
    secondParam: second ? second : 'defaultSecond'
  }
};
