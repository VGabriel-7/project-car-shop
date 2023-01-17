import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import MotorcycleODM from '../../../../src/Models/MotorcycleODM';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../../src/Domains/Motorcycle';

describe('Deveria retornar as motos atualizados da collection', function () {
  it('Deveria retornar a moto atualizado', async function () {
    // Arrange
    const MotoInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
  
    const MotoOutput: Motorcycle = new Motorcycle({
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });
    sinon.stub(Model, 'findByIdAndUpdate').resolves(MotoOutput);
  
    // Act
    const motoODM = new MotorcycleODM();
    const motoService = new MotorcycleService(motoODM);
    const result = await motoService.update('99c99f9cfd999dbad5bd9d90', MotoInput);
  
    // Assert
    expect(result).to.be.deep.equal(MotoOutput);
  });
});