import { Router } from "express";
import { generateMockUsers } from "../utils/mockingUsers.js";
import { generateMockPets } from "../utils/mockingPets.js";
import Users from "../dao/Users.dao.js";
import Pet from "../dao/Pets.dao.js";

const router = Router();
const usersService = new Users();
const petsService = new Pet();

// MIGRADO: GET /api/mocks/mockingpets
router.get("/mockingpets", (req, res) => {
  try {
    const pets = generateMockPets(100);
    return res.status(200).json({ status: "success", payload: pets });
  } catch (error) {
    return res.status(500).json({ status: "error", error: error.message });
  }
});

// NUEVO: GET /api/mocks/mockingusers
router.get("/mockingusers", async (req, res) => {
  try {
    const users = await generateMockUsers(50);
    return res.status(200).json({ status: "success", payload: users });
  } catch (error) {
    return res.status(500).json({ status: "error", error: error.message });
  }
});

// NUEVO: POST /api/mocks/generateData
router.post("/generateData", async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    const usersQty = Number(users);
    const petsQty = Number(pets);

    if (Number.isNaN(usersQty) || Number.isNaN(petsQty)) {
      return res.status(400).json({
        status: "error",
        error: "Parámetros inválidos. 'users' y 'pets' deben ser numéricos.",
      });
    }

    // Generar datos mock
    const mockUsers = usersQty > 0 ? await generateMockUsers(usersQty) : [];
    const mockPets = petsQty > 0 ? generateMockPets(petsQty) : [];

    // Insertar en base de datos usando los DAOs
    let insertedUsersCount = 0;
    let insertedPetsCount = 0;

    for (const user of mockUsers) {
      await usersService.save(user);
      insertedUsersCount++;
    }

    for (const pet of mockPets) {
      await petsService.save(pet);
      insertedPetsCount++;
    }

    return res.status(201).json({
      status: "success",
      message: "Datos generados e insertados correctamente",
      inserted: {
        users: insertedUsersCount,
        pets: insertedPetsCount,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: "error", error: error.message });
  }
});

export default router;
