export class ClumsyQuery {
  // Cause we do not have integrated any ORM framework into the coding.
  // So I'll declare the createQueryBuilder as a variable to make this snippet running without error.
  private createQueryBuilder: any;

  // This snippet below shows the adjusted.
  // Inside the Promise, we need adding a type represents for data retrieve.
  // In this case we are query user data by id.
  // So, the Promise type should be Entity of user. The Entity are represent for database table where it's store data.
  // And we can conclusively, this case might need to adding UserEntity type as the snippet below.
  // If the data response won't match to the properties declare in UserEntity, each property respective to a field in user table.
  // Then it could be throw an error.
  public findOneById(id: number): Promise<UserEntity> {
    return this.createQueryBuilder('users')
      .where(`users.id=${id}`)
      .getOne()
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      })
  }
}

// For example: This is an UserEntity initialize following an ORM syntax
class UserEntity {
  public id: number;

  public userName: string;

  public email: string
}
