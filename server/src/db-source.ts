import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions, runSeeders } from "typeorm-extension";
import UserFactory from "./database/factories/user.factory";
import UserSeeder from "./database/seeds/user.seeder";

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DS_HOST,
  username: process.env.DS_USER,
  password: process.env.DS_PASS,
  entities: [process.env.DS_ENTITIES!],
  seeds: [UserSeeder],
  factories: [UserFactory],
  logging: false,
  synchronize: true,
  connectTimeoutMS: 3000,
};

const dataSource = new DataSource(options);

(async () => {
  try {
    await dataSource.initialize();
    console.log("INFO :: Data Source has been initialized");
    runSeeders(dataSource);
    // runSeeders(dataSource, {
    //   seeds: ["src/database/seeds/**/*{.ts,.js}"],
    //   factories: ["src/database/factories/**/*{.ts,.js}"],
    //   // seeds: [process.env.DS_SEEDS!],
    //   // factories: [process.env.DS_FACTORIES!],
    // });
  } catch (err) {
    console.error("ERROR :: Data Source initialization error", err);
    throw err;
  }
  // try {
  //   // console.log(dataSource);
  //   runSeeders(dataSource, {
  //     seeds: ["src/database/seeds/**/*{.ts,.js}"],
  //     factories: ["src/database/factories/**/*{.ts,.js}"],
  //     // seeds: [process.env.DS_SEEDS!],
  //     // factories: [process.env.DS_FACTORIES!],
  //   });
  //   console.log("INFO :: SEED Data Source completed");
  // } catch (err) {
  //   console.error("ERROR :: SEED Data Source error", err);
  //   throw err;
  // }
})();

export default dataSource;
