import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { carsArray, secondValidCar, validCar, validID } from '../../mocks/carsMock';
import CarsService from '../../../src/Services/CarService';
import CarODM from '../../../src/Models/CarODM';
import Factory from '../../../src/Factory/Factory';
import Car from '../../../src/Domains/Car';

const model = new CarODM();
const service = new CarsService(model, new Factory());

const CAR_NOT_FOUND = 'Car not found';
const INVALID_MONG_ID = 'Invalid mongo id';

describe('Testando a camada service', function () {
  afterEach(sinon.restore);
  describe('Testando a regra de criar carros', function () {
    it('Criando carros corretamente', async function () {
      sinon.stub(Model, 'create').resolves({ ...validCar, id: validID });
      const CarValid = new Car(validCar);
      const result = await service.create(validCar);

      expect(result).to.be.instanceOf(Car);
      expect(result).to.be.deep.equal(CarValid);
    });
  });
  describe('Testando a regra de buscar um carro', function () {
    it('Encontrando o carro corretamente', async function () {
      sinon.stub(Model, 'findOne').resolves({ ...validCar, id: validID });
      const CarValid = new Car(validCar);
      const result = await service.readOne(validID);

      expect(result).to.be.instanceOf(Car);
      expect(result).to.be.deep.equal(CarValid);
    });
    it('lançando erro com id invalido', async function () {
      sinon.stub(Model, 'findOne').resolves(null);

      try {
        await service.readOne('3asd5asd3');
      } catch (error) {
        expect((error as Error).message).to.be.equal(INVALID_MONG_ID);
      }
    });
    it('lançando erro nenhum carro com o id passado', async function () {
      // sinon.stub(Model, 'create').resolves(carsArray);
      sinon.stub(Model, 'findOne').resolves(null);

      try {
        await service.readOne(validID);
      } catch (error) {
        expect((error as Error).message).to.be.equal(CAR_NOT_FOUND);
      }
    });
  });
  describe('Testando a regra de buscar todos os carros', function () {
    it('Encontrando todos os carros corretamente', async function () {
      sinon.stub(Model, 'find').resolves(carsArray);
      const listCar = carsArray.map((car) => new Car(car));
      const result = await service.read();

      expect(listCar).to.be.length(2);
      expect(result).to.be.deep.equal(listCar);
    });
  });
  describe('Testando a regra de atualizar o carro', function () {
    it('Atualizando um carro corretamente', async function () {
      sinon.stub(Model, 'create').resolves({ ...validCar, id: validID });
      sinon.stub(Model, 'findByIdAndUpdate').resolves({ ...secondValidCar });
      const updatedCar = new Car(secondValidCar);
      const result = await service.update(validID, secondValidCar);
      
      expect(updatedCar).to.be.instanceOf(Car);
      expect(result).to.be.deep.equal(updatedCar);
    });
    it('tentando atualizar um carro com id invalido', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves({});

      try {
        await service.update('asdasdasdass', secondValidCar);
      } catch (error) {
        expect((error as Error).message).to.be.equal(INVALID_MONG_ID);
      }
    });
    it('tentando atualizar um carro com id errado', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      try {
        await service.update(validID, secondValidCar);
      } catch (error) {
        expect((error as Error).message).to.be.equal(CAR_NOT_FOUND);
      }
    });
  });
  describe('Testando a regra de deletar um carro', function () {
    it('Deletando um carro corretamente', async function () {
      sinon.stub(Model, 'create').resolves({ ...validCar });
      sinon.stub(Model, 'findByIdAndDelete').resolves({ ...validCar });
      const updatedCar = new Car(validCar);
      const result = await service.delete(validID);
     
      expect(result).to.be.deep.equal(updatedCar);
    });
    it('tentando deletar um carro com id invalido', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves({});

      try {
        await service.delete('asdasdasdass');
      } catch (error) {
        expect((error as Error).message).to.be.equal(INVALID_MONG_ID);
      }
    });
    it('tentando atualizar um carro com id errado', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves(null);

      try {
        await service.delete(validID);
      } catch (error) {
        expect((error as Error).message).to.be.equal(CAR_NOT_FOUND);
      }
    });
  });
});