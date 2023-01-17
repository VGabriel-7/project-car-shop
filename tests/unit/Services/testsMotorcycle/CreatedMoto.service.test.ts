import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../../src/Domains/Motorcycle';
import MotorcycleODM from '../../../../src/Models/MotorcycleODM';
import MotorcycleService from '../../../../src/Services/MotorcycleService';

describe('Deveria salvar as motos cadastrados na collection', function () {
  it('Deveria salvar as motos cadastrados na collection com SUCESSO', async function () {
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
    sinon.stub(Model, 'create').resolves(MotoOutput);

    // Act
    const motoODM = new MotorcycleODM();
    const motoService = new MotorcycleService(motoODM);
    const result = await motoService.save(MotoInput);

    // Assert
    expect(result).to.be.deep.equal(MotoOutput);
  });
});
