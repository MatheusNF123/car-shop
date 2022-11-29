import request from 'supertest';
import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';

import { validCar, bodyValidCar, carsArray } from '../../mocks/carsMock';
import app from '../../../src/app';

const INVALID_MONG_ID = 'Invalid mongo id';
const CAR_NOT_FOUND = 'Car not found';

describe('Teste das rotas /cars', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('Testando a rota post /cars', function () {
    it(`deve retornar status 201 e as informações
     do carro ao cadastrar com sucesso`, async function () {
      sinon.stub(Model, 'create').resolves(validCar);
      const httpResponse = await request(app).post('/cars').send(bodyValidCar);
      
      expect(httpResponse.status).to.be.deep.equal(201);
      expect(httpResponse.body).to.be.deep.equal(validCar);
    });
  });
  describe('Teste da rota get /cars/:id', function () {
    it(`deve retornar status 200 e as informações
     do carro ao buscar um carro com sucesso`, async function () {
      sinon.stub(Model, 'findOne').resolves(validCar);
      const httpResponse = await request(app)
        .get('/cars/6377b6483915b707f5fddc75').send(bodyValidCar);
      
      expect(httpResponse.status).to.be.deep.equal(200);
      expect(httpResponse.body).to.be.deep.equal(validCar);
    });
    it(`deve retornar status 422 com a mensagem
     'invalid mongo id' se for um id invalido`, async function () {
      sinon.stub(Model, 'findOne').resolves(validCar);
      const httpResponse = await request(app).get('/cars/131322').send();
      
      expect(httpResponse.status).to.be.deep.equal(422);
      expect(httpResponse.body).to.be.deep.equal({ message: INVALID_MONG_ID });
    });
    it(`deve retornar status 404 com a mensagem
     'CAR_NOT_FOUND' se for que não existe`, async function () {
      sinon.stub(Model, 'findOne').resolves(null);
      const httpResponse = await request(app)
        .get('/cars/6377b6483915b707f5fddc79').send();
      
      expect(httpResponse.status).to.be.deep.equal(404);
      expect(httpResponse.body).to.be.deep.equal({ message: CAR_NOT_FOUND });
    });
  });
  describe('Teste da rota get /cars', function () {
    it(`deve retornar status 200 e a lista informações
     dos carro ao buscar carros com sucesso`, async function () {
      sinon.stub(Model, 'find').resolves(carsArray);
      const httpResponse = await request(app)
        .get('/cars').send();
      
      expect(httpResponse.status).to.be.deep.equal(200);
      expect(httpResponse.body).to.be.deep.equal(carsArray);
    });
    describe('Teste da rota put /cars/:id', function () {
      it(`deve retornar status 200 e as informações
     do carro ao atualizar um carro com sucesso`, async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(validCar);
        const httpResponse = await request(app)
          .put('/cars/6377b6483915b707f5fddc78').send(bodyValidCar);
      
        expect(httpResponse.status).to.be.deep.equal(200);
        expect(httpResponse.body).to.be.deep.equal(validCar);
      });
      it(`deve retornar status 422 com a mensagem
      'invalid mongo id' se for um id invalido`, async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(validCar);
        const httpResponse = await request(app)
          .put('/cars/12315').send(bodyValidCar);
      
        expect(httpResponse.status).to.be.deep.equal(422);
        expect(httpResponse.body).to.be.deep.equal({ message: INVALID_MONG_ID });
      });
      it(`deve retornar status 404 e com a mensagem
      'CAR_NOT_FOUND' se for que não existe`, async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
        const httpResponse = await request(app)
          .put('/cars/6377b6483915b707f5fddc71').send(bodyValidCar);
      
        expect(httpResponse.status).to.be.deep.equal(404);
        expect(httpResponse.body).to.be.deep.equal({ message: CAR_NOT_FOUND });
      });
    });
    describe('Teste da rota delete /cars/:id', function () {
      it('deve retornar status 204 deletar um carro com sucesso', async function () {
        sinon.stub(Model, 'findByIdAndDelete').resolves(validCar);
        const httpResponse = await request(app)
          .delete('/cars/6377b6483915b707f5fddc78').send();
      
        expect(httpResponse.status).to.be.deep.equal(204);
      });
      it(`deve retornar status 422 com a mensagem
      'invalid mongo id' se for um id invalido`, async function () {
        sinon.stub(Model, 'findByIdAndDelete').resolves(validCar);
        const httpResponse = await request(app)
          .delete('/cars/231321').send();
      
        expect(httpResponse.status).to.be.deep.equal(422);
        expect(httpResponse.body).to.be.deep.equal({ message: INVALID_MONG_ID });
      });
      it(`deve retornar status 404 com a mensagem
      'CAR_NOT_FOUND' se for que não existe`, async function () {
        sinon.stub(Model, 'findByIdAndDelete').resolves(null);
        const httpResponse = await request(app)
          .delete('/cars/6377b6483915b707f5fddc71').send();
      
        expect(httpResponse.status).to.be.deep.equal(404);
        expect(httpResponse.body).to.be.deep.equal({ message: CAR_NOT_FOUND });
      });
    });
  });
});
