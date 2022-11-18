import request from 'supertest';
import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';

import { validCar, bodyValidCar } from '../mocks/carsMock';
import app from '../../src/app';

describe('Teste da rota /cars', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('criando um carro com sucesso', function () {
    it('deve retornar status 201 ao cadastrar com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(validCar);
      const httpResponse = await request(app).post('/login').send(bodyValidCar);
      expect(httpResponse.body).to.be.deep.equal('validCar');
    });
  });
});