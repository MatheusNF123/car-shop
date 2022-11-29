import request from 'supertest';
import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';

import { motorcyclesArray,
  validMotorcycle,
  bodyValidMotorcycle } from '../../mocks/motorcycleMock';
import app from '../../../src/app';

const INVALID_MONG_ID = 'Invalid mongo id';
const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';

describe('Teste das rotas /motorcycles', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('Testando a rota post /motorcycles', function () {
    it(`deve retornar status 201 e as informações
     do moto ao cadastrar com sucesso`, async function () {
      sinon.stub(Model, 'create').resolves(validMotorcycle);
      const httpResponse = await request(app).post('/motorcycles').send(bodyValidMotorcycle);
      
      expect(httpResponse.status).to.be.deep.equal(201);
      expect(httpResponse.body).to.be.deep.equal(validMotorcycle);
    });
  });
  describe('Teste da rota get /motorcycles/:id', function () {
    it(`deve retornar status 200 e as informações
     do carro ao buscar um moto com sucesso`, async function () {
      sinon.stub(Model, 'findOne').resolves(validMotorcycle);
      const httpResponse = await request(app)
        .get('/motorcycles/6377b6483915b707f5fddc75').send(bodyValidMotorcycle);
      
      expect(httpResponse.status).to.be.deep.equal(200);
      expect(httpResponse.body).to.be.deep.equal(validMotorcycle);
    });
    it(`deve retornar status 422 com a mensagem
     'invalid mongo id' se for um id invalido`, async function () {
      sinon.stub(Model, 'findOne').resolves(validMotorcycle);
      const httpResponse = await request(app).get('/motorcycles/131322').send();
      
      expect(httpResponse.status).to.be.deep.equal(422);
      expect(httpResponse.body).to.be.deep.equal({ message: INVALID_MONG_ID });
    });
    it(`deve retornar status 404 com a mensagem
     'MOTORCYCLE_NOT_FOUND' se for que não existe`, async function () {
      sinon.stub(Model, 'findOne').resolves(null);
      const httpResponse = await request(app)
        .get('/motorcycles/6377b6483915b707f5fddc79').send();
      
      expect(httpResponse.status).to.be.deep.equal(404);
      expect(httpResponse.body).to.be.deep.equal({ message: MOTORCYCLE_NOT_FOUND });
    });
  });
  describe('Teste da rota get /motorcycles', function () {
    it(`deve retornar status 200 e a lista informações
     dos moto ao buscar motos com sucesso`, async function () {
      sinon.stub(Model, 'find').resolves(motorcyclesArray);
      const httpResponse = await request(app)
        .get('/motorcycles').send();
      
      expect(httpResponse.status).to.be.deep.equal(200);
      expect(httpResponse.body).to.be.deep.equal(motorcyclesArray);
    });
    describe('Teste da rota put /motorcycles/:id', function () {
      it(`deve retornar status 200 e as informações
      ao atualizar um moto com sucesso`, async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(validMotorcycle);
        const httpResponse = await request(app)
          .put('/motorcycles/6377b6483915b707f5fddc78').send(bodyValidMotorcycle);
      
        expect(httpResponse.status).to.be.deep.equal(200);
        expect(httpResponse.body).to.be.deep.equal(validMotorcycle);
      });
      it(`deve retornar status 422 com a mensagem
      'invalid mongo id' se for um id invalido`, async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(validMotorcycle);
        const httpResponse = await request(app)
          .put('/motorcycles/12315').send(bodyValidMotorcycle);
      
        expect(httpResponse.status).to.be.deep.equal(422);
        expect(httpResponse.body).to.be.deep.equal({ message: INVALID_MONG_ID });
      });
      it(`deve retornar status 404 e com a mensagem
      'MOTORCYCLE_NOT_FOUND' se for que não existe`, async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
        const httpResponse = await request(app)
          .put('/motorcycles/6377b6483915b707f5fddc71').send(bodyValidMotorcycle);
      
        expect(httpResponse.status).to.be.deep.equal(404);
        expect(httpResponse.body).to.be.deep.equal({ message: MOTORCYCLE_NOT_FOUND });
      });
    });
    describe('Teste da rota delete /motorcycles/:id', function () {
      it('deve retornar status 204 deletar um moto com sucesso', async function () {
        sinon.stub(Model, 'findByIdAndDelete').resolves(validMotorcycle);
        const httpResponse = await request(app)
          .delete('/motorcycles/6377b6483915b707f5fddc78').send();
      
        expect(httpResponse.status).to.be.deep.equal(204);
      });
      it(`deve retornar status 422 com a mensagem
        'invalid mongo id' se for um id invalido`, async function () {
        sinon.stub(Model, 'findByIdAndDelete').resolves(validMotorcycle);
        const httpResponse = await request(app)
          .delete('/motorcycles/231321').send();
      
        expect(httpResponse.status).to.be.deep.equal(422);
        expect(httpResponse.body).to.be.deep.equal({ message: INVALID_MONG_ID });
      });
      it(`deve retornar status 404 com a mensagem
        'MOTORCYCLE_NOT_FOUND' se for que não existe`, async function () {
        sinon.stub(Model, 'findByIdAndDelete').resolves(null);
        const httpResponse = await request(app)
          .delete('/motorcycles/6377b6483915b707f5fddc71').send();
      
        expect(httpResponse.status).to.be.deep.equal(404);
        expect(httpResponse.body).to.be.deep.equal({ message: MOTORCYCLE_NOT_FOUND });
      });
    });
  });
});
