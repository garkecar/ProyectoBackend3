import mongoose from "mongoose";
import GenericRepository from "./GenericRepository.js";

export default class UserRepository extends GenericRepository {
  constructor(dao) {
    super(dao);
  }

  getUserByEmail = (email) => this.getBy({ email });

  getUserById = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return null;
    return this.getBy({ _id: id });
  };
}
