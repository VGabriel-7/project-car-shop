import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import arrayMoto from '../mocks/ArraysMotoMock';
import MotorcycleODM from '../../../../src/Models/MotorcycleODM';
import MotorcycleService from '../../../../src/Services/MotorcycleService';

describe('Deveria listar as motos cadastrados na collection', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deveria listar todos as motos cadastrados na collection cars', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves(arrayMoto);
  
    // Act
    const motoODM = new MotorcycleODM();
    const motoService = new MotorcycleService(motoODM);
    const result = await motoService.find();
  
    // Assert
    expect(result).to.be.deep.equal(arrayMoto);
  });
  
  it('Deveria listar uma moto cadastrado na collection motorcycle', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves(arrayMoto[0]);
  
    // Act
    const motoODM = new MotorcycleODM();
    const motoService = new MotorcycleService(motoODM);
    const result = await motoService.findById(arrayMoto[0].id);
  
    // Assert
    expect(result).to.be.deep.equal(arrayMoto[0]);
  });
});