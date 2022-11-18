import ICar from '../../src/Interfaces/ICar';

export const validCar: ICar = {
  id: '6377b6483915b707f5fddc78',
  model: 'Uno da Escado',
  year: 1960,
  color: 'Red',
  status: false,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const secondValidCar: ICar = {
  id: '6377b6483915b707f5fddc78',
  model: 'Uno',
  year: 2000,
  color: 'branco',
  status: false,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const validID = '6377b6483915b707f5fddc78';

export const validCarWithStatus: ICar = {
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
  status: true,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const updatedCar: ICar = {
  model: 'Uno da Escada',
  year: 1979,
  color: 'Red',
  status: true,
  buyValue: 3500,
  doorsQty: 2,
  seatsQty: 4,
};

export const carsArray: ICar[] = [
  {
    id: '6377b6483915b707f5fddc70',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '6377b6483915b707f5fddc71',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const bodyValidCar: ICar = {
  model: 'Uno da Escado',
  year: 1960,
  color: 'Red',
  status: false,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};