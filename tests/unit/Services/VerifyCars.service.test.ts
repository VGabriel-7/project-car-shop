import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarODM from '../../../src/Models/CarODM';
import CarService from '../../../src/Services/CarService';

describe('Deveria retornar erros', function () {
  it('Deveria retornar o erro Invalid mongo id', async function () {
    // Act
    const carODM = new CarODM();
    const carService = new CarService(carODM);
    const result = await carService.findById('');
  
    // Assert
    expect(result).to.be.equal('Invalid mongo id');
  });
  
  it('Deveria retornar o erro Car not found', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves(null);
  
    // Act
    const carODM = new CarODM();
    const carService = new CarService(carODM);
    const result = await carService.findById('99c99f9cfd999dbad5bd9d90');
  
    // Assert
    expect(result).to.be.equal('Car not found');
  });
});