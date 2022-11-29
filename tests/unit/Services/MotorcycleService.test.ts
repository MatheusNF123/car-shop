import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { motorcyclesArray,
  secondValidMotorcycle, validMotorcycle, validID } from '../../mocks/motorcycleMock';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import MotorcycleODM from '../../../src/Models/MotorcycleODM';
import Factory from '../../../src/Factory/Factory';
import Motorcycle from '../../../src/Domains/Motorcycle';

const model = new MotorcycleODM();
const service = new MotorcycleService(model, new Factory());

const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';
const INVALID_MONG_ID = 'Invalid mongo id';

describe('Testando a camada service', function () {
  afterEach(sinon.restore);
  describe('Testando a regra de criar moto', function () {
    it('Criando motos corretamente', async function () {
      sinon.stub(Model, 'create').resolves({ ...validMotorcycle, id: validID });
      const motoValid = new Motorcycle(validMotorcycle);
      const result = await service.create(validMotorcycle);

      expect(result).to.be.instanceOf(Motorcycle);
      expect(result).to.be.deep.equal(motoValid);
    });
  });
  describe('Testando a regra de buscar um moto', function () {
    it('Encontrando o moto corretamente', async function () {
      sinon.stub(Model, 'findOne').resolves({ ...validMotorcycle, id: validID });
      const motoValid = new Motorcycle(validMotorcycle);
      const result = await service.readOne(validID);

      expect(result).to.be.instanceOf(Motorcycle);
      expect(result).to.be.deep.equal(motoValid);
    });
    it('lançando erro com id invalido', async function () {
      sinon.stub(Model, 'findOne').resolves(null);

      try {
        await service.readOne('3asd5asd3');
      } catch (error) {
        expect((error as Error).message).to.be.equal(INVALID_MONG_ID);
      }
    });
    it('lançando erro nenhum moto com o id passado', async function () {
      sinon.stub(Model, 'findOne').resolves(null);

      try {
        await service.readOne(validID);
      } catch (error) {
        expect((error as Error).message).to.be.equal(MOTORCYCLE_NOT_FOUND);
      }
    });
  });
  describe('Testando a regra de buscar todos os motos', function () {
    it('Encontrando todos os motos corretamente', async function () {
      sinon.stub(Model, 'find').resolves(motorcyclesArray);
      const listMoto = motorcyclesArray.map((car) => new Motorcycle(car));
      const result = await service.read();

      expect(listMoto).to.be.length(2);
      expect(result).to.be.deep.equal(listMoto);
    });
  });
  describe('Testando a regra de atualizar o moto', function () {
    it('Atualizando um moto corretamente', async function () {
      sinon.stub(Model, 'create').resolves({ ...validMotorcycle, id: validID });
      sinon.stub(Model, 'findByIdAndUpdate').resolves({ ...secondValidMotorcycle });
      const updatedMoto = new Motorcycle(secondValidMotorcycle);
      const result = await service.update(validID, secondValidMotorcycle);
      
      expect(updatedMoto).to.be.instanceOf(Motorcycle);
      expect(result).to.be.deep.equal(updatedMoto);
    });
    it('tentando atualizar um moto com id invalido', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves({});

      try {
        await service.update('123', secondValidMotorcycle);
      } catch (error) {
        expect((error as Error).message).to.be.equal(INVALID_MONG_ID);
      }
    });
    it('tentando atualizar uma moto com id errado', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      try {
        await service.update(validID, secondValidMotorcycle);
      } catch (error) {
        expect((error as Error).message).to.be.equal(MOTORCYCLE_NOT_FOUND);
      }
    });
  });
  describe('Testando a regra de deletar um moto', function () {
    it('Deletando um moto corretamente', async function () {
      sinon.stub(Model, 'create').resolves({ ...validMotorcycle });
      sinon.stub(Model, 'findByIdAndDelete').resolves({ ...validMotorcycle });
      const updatedMoto = new Motorcycle(validMotorcycle);
      const result = await service.delete(validID);
     
      expect(result).to.be.deep.equal(updatedMoto);
    });
    it('tentando deletar um moto com id invalido', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves({});

      try {
        await service.delete('123');
      } catch (error) {
        expect((error as Error).message).to.be.equal(INVALID_MONG_ID);
      }
    });
    it('tentando atualizar um moto com id errado', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves(null);

      try {
        await service.delete(validID);
      } catch (error) {
        expect((error as Error).message).to.be.equal(MOTORCYCLE_NOT_FOUND);
      }
    });
  });
});