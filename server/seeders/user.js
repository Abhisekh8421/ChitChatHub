import { faker } from "@faker-js/faker";
import User from "../models/user.js";

const createUser = async (numUsers) => {
  try {
    const AllUsers = [];
    for (let i = 0; i < numUsers; i++) {
      const oneUser = User.create({
        name: faker.person.fullName(),
        username: faker.internet.userName(),
        bio: faker.lorem.sentence(10),
        password: "password",
        avatar: {
          url: faker.image.avatar(),
          public_id: faker.system.fileName(),
        },
      });
      AllUsers.push(oneUser);
    }
    await Promise.all(AllUsers);

    console.log("Users created", numUsers);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default createUser;
