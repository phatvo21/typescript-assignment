export class OK<T, E> {
  private ok: T;

  constructor(o: T) {
    this.ok = o;
  }
}

export class Err<T, E> {
  private err: E;

  constructor(e: E) {
    this.err = e;
  }
}

export type Result<T, E> = OK<T, E> | Err<T, E>;


const ok = <T, E>(value: T): Result<T, E> => new OK(value);

const err = <T, E>(error: E): Result<T, E> => new Err(error);

export const testRequest = (url: string): Result<any, Error> => {
  const isUrl = url.indexOf('http') !== -1;
  if (!isUrl) {
    return err(new Error(
      'Invalid string passed into `testRequest`. Expected a valid URL.'
    ));
  }
  return ok('ok');
};
