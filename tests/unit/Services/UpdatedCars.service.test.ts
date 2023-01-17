import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarODM from '../../../src/Models/CarODM';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';

describe('Deveria retornar os carros atualizados da collection', function () {
  it('Deveria retornar o carro atualizado', async function () {
    // Arrange
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
  
    const carOutput: Car = new Car({
      id: '99c99f9cfd999dbad5bd9d90',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);
  
    // Act
    const carODM = new CarODM();
    const carService = new CarService(carODM);
    const result = await carService.update('99c99f9cfd999dbad5bd9d90', carInput);
  
    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });
});