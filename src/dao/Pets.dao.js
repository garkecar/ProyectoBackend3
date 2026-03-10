import petModel from "./models/Pet.js";

export default class Pet {
  get = (params) => petModel.find(params);

  getBy = (params) => petModel.findOne(params);

  getById = (id) => petModel.findById(id);

  save = (doc) => petModel.create(doc);

  update = (id, doc) => petModel.findByIdAndUpdate(id, { $set: doc });

  delete = (id) => petModel.findByIdAndDelete(id);
}
