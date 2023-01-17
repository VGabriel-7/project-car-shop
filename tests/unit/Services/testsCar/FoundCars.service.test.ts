import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarODM from '../../../../src/Models/CarODM';
import CarService from '../../../../src/Services/CarService';
import arrayCars from '../mocks/ArraysCarMock';

describe('Deveria listar os carros cadastrados na collection', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deveria listar todos os carros cadastrados na collection cars', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves(arrayCars);
  
    // Act
    const carODM = new CarODM();
    const carService = new CarService(carODM);
    const result = await carService.find();
  
    // Assert
    expect(result).to.be.deep.equal(arrayCars);
  });
  
  it('Deveria listar um carro cadastrado na collection cars', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves(arrayCars[0]);
  
    // Act
    const carODM = new CarODM();
    const carService = new CarService(carODM);
    const result = await carService.findById(arrayCars[0].id);
  
    // Assert
    expect(result).to.be.deep.equal(arrayCars[0]);
  });
});