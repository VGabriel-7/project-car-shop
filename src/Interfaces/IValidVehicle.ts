import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';

export default interface IValidVehicle {
  findById(id: string): Promise<Car | Motorcycle | null | string>
}