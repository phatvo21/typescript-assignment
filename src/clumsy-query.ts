export class ClumsyQuery {
  // Cause we do not have integrated any ORM framework into the coding.
  // So I'll declare the createQueryBuilder as a variable to make this snippet running without error.
  private createQueryBuilder: any;

  // This snippet below shows the adjusted.
  // I have added async/await pattern into this function
  // The async/await will trigger this function to become asynchronous, non-blocking.
  // Assume that the find user by ID functionality shows as below are invoke to the database to getting the user data.
  // But in runtime, we will never be aware of when this invoke finish.
  // If the function performs without async/await then this snippet with certainly block the others snippets.
  // Means like it wait for util a user data response finished before executing the others snippets. So, this is a disadvantage.
  // Finally, I made this code with async/await and the function will become asynchronous function as show as the snippet below.
  public async findOneById(id: number): Promise<any> {
    return await this.createQueryBuilder('users')
      .where(`users.id=${id}`)
      .getOne();
  }
}
