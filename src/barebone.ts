export class MyArray<T extends number | string> {
  private collection: T[] = [];

  constructor() {
  }

  public add(value: T): any {
   return this.collection.push(value);
  }

  public remove(value: T): any {
    return this.collection.splice(this.collection.indexOf(value), 1);
  }

  public getValues(): T[] {
    return this.collection;
  }
}
