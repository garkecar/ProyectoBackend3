import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

export const generateMockUsers = async (num) => {
  // Encriptar "coder123" UNA SOLA VEZ (optimización)
  const passwordHash = await bcrypt.hash("coder123", 10);

  const users = [];

  for (let i = 0; i < num; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email().toLowerCase(),
      password: passwordHash,
      role: Math.random() < 0.5 ? "user" : "admin",
      pets: [],
    });
  }

  return users;
};
