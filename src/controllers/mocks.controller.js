import { generateMockUsers } from "../utils/mockingUsers.js";
import { generateMockPets } from "../utils/mockingPets.js";
import { usersService, petsService } from "../services/index.js";

const getMockingPets = async (req, res) => {
  const pets = await generateMockPets(100);
  res.send({ status: "success", payload: pets });
};

const getMockingUsers = async (req, res) => {
  const users = await generateMockUsers(50);
  res.send({ status: "success", payload: users });
};

const generateData = async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    const mockUsers = await generateMockUsers(Number(users));
    const mockPets = await generateMockPets(Number(pets));

    const insertedUsers = await Promise.all(
      mockUsers.map((u) => usersService.create(u)),
    );
    const insertedPets = await Promise.all(
      mockPets.map((p) => petsService.create(p)),
    );

    res.status(201).send({
      status: "success",
      message: "Datos generados e insertados",
      inserted: { users: insertedUsers.length, pets: insertedPets.length },
    });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
};

export default {
  getMockingPets,
  getMockingUsers,
  generateData,
};
