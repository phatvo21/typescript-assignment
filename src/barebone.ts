export class MyArray {
  private collection: Array<string | number> = [];

  public add(value: string | number): any {
    return this.collection.push(value)
  }

  public remove(value: string | number): any {
    return this.collection.splice(this.collection.indexOf(value), 1);
  }

  public getValues(): any {
    return this.collection
  }
}
