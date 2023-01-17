import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleODM from '../../../../src/Models/MotorcycleODM';
import MotorcycleService from '../../../../src/Services/MotorcycleService';

describe('Deveria retornar erros', function () {
  it('Deveria retornar o erro Invalid mongo id', async function () {
    // Act
    const motoODM = new MotorcycleODM();
    const motoService = new MotorcycleService(motoODM);
    const result = await motoService.findById('');
    
    // Assert
    expect(result).to.be.equal('Invalid mongo id');
  });
  
  it('Deveria retornar o erro Car not found', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves(null);
  
    // Act.
    const motoODM = new MotorcycleODM();
    const motoService = new MotorcycleService(motoODM);
    const result = await motoService.findById('99c99f9cfd999dbad5bd9d90');
  
    // Assert
    expect(result).to.be.equal('Motorcycle not found');
  });
});