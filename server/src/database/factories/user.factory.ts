import { setSeederFactory } from "typeorm-extension";
import { User } from "../entities/user.entity";

export default setSeederFactory(User, (faker) => {
  const user = new User();
  user.firstName = faker.person.firstName("male");
  user.lastName = faker.person.lastName("male");
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  console.log("inside setSeeder factory method");
  console.log(user);
  return user;
});
