export class MyArray<T> {
  private collection: T[] = [];

  constructor() {
  }

  public add(value: T): any {
    const collection = this.collection;
    collection.push(value);
    this.validateInputValue(collection);
    return collection;
  }

  public remove(value: T): any {
    return this.collection.splice(this.collection.indexOf(value), 1);
  }

  public getValues(): T[] {
    return this.collection
  }

  private validateInputValue(collection: T[]): any {
    if (collection.length > 1) {
      let isString: boolean = false;
      let isNumber: boolean = false;

      collection.forEach(el => {
        if (typeof el === 'string') {
          isString = true;
        }

        if (typeof el === 'number') {
          isNumber = true;
        }
      });

      const isArrValid = collection.every(
        i => (typeof i === 'string' || typeof i === 'number'));

      if (!isArrValid) {
        console.log('You shouldn\'t be able to do these.');
        return;
      }

      if (isString && isNumber) {
        console.log('You shouldn\'t be able to do these. So you shouldn\'t be able to mix different types.');
        return;
      }
    }
  }
}
