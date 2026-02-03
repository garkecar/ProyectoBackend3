import { faker } from "@faker-js/faker";

export const generateMockPets = (num) => {
  const pets = [];
  const species = ["dog", "cat", "bird", "rabbit", "hamster", "fish"];

  for (let i = 0; i < num; i++) {
    pets.push({
      name: faker.animal.petName(),
      specie: faker.helpers.arrayElement(species),
      birthDate: faker.date.past({ years: 10 }),
      adopted: false,
      owner: null,
      image: "https://via.placeholder.com/150", // placeholder
    });
  }

  return pets;
};
