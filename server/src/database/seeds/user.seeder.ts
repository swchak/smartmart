import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { User } from "../entities/user.entity";

class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    console.log("test123");
    const repository = dataSource.getRepository(User);
    await repository.insert([
      {
        firstName: "Caleb",
        lastName: "Barrows",
        email: "caleb.barrows@gmail.com",
        password: "p@ssw0rd",
      },
    ]);
    const userFactory = await factoryManager.get(User);
    await userFactory.saveMany(10);
  }
}

export default UserSeeder;
