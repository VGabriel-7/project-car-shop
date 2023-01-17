import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../../src/Interfaces/ICar';
import Car from '../../../../src/Domains/Car';
import CarODM from '../../../../src/Models/CarODM';
import CarService from '../../../../src/Services/CarService';

describe('Deveria salvar os carros cadastrados na collection', function () {
  it('Deveria salvar os carros cadastrados na collection com SUCESSO', async function () {
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
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });
    sinon.stub(Model, 'create').resolves(carOutput);

    // Act
    const carODM = new CarODM();
    const carService = new CarService(carODM);
    const result = await carService.save(carInput);

    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });
});
