import { model, Model, models, Schema } from 'mongoose';
import IVehicle from '../Interfaces/IVehicle';

export default class AbstractODM<T> {
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.model = models[modelName] || model(modelName, schema);
  }

  public async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async find(): Promise<Array<T>> {
    return this.model.find();
  }

  public async update(id: string, update: IVehicle): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, update);
  }
}
