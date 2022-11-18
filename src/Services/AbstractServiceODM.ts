// import Car from '../Domains/Car';
// import CustomError from '../Error/customError';
// import ICar from '../Interfaces/ICar';
// import IFactory from '../Interfaces/IFactory';
// import IModel from '../Interfaces/IModel';
// import IService from '../Interfaces/IService';

// const CAR_NOT_FOUND = 'Car not found';

// export default abstract class AbstractServiceODM<T, L> implements IService<T, L> {
//   constructor(
//     private model: IModel<T>,
//     private factory: IFactory<T, L>,
//   ) {}

//   async create(obj: T): Promise<L> {
//     const cars = await this.model.create({ ...obj }); 
//     return this.factory.createDomainCar(cars);
//   }

//   async readOne(id:string):Promise<L> {
//     const cars = await this.model.readOne(id);
//     if (!cars) throw new CustomError(CAR_NOT_FOUND, 404);
//     return this.factory.createDomainCar(cars);
//   }

//   async read():Promise<L[]> {
//     const cars = await this.model.read();
    
//     return cars.map((car) => this.factory.createDomainCar(car));
//   }

//   async update(id: string, obj: T): Promise<L> {
//     const car = await this.model.update(id, obj);
//     if (!car) throw new CustomError(CAR_NOT_FOUND, 404);
//     return this.factory.createDomainCar(car);
//   }

//   async delete(_id: string): Promise<L> {
//     const car = await this.model.delete(_id);
//     if (!car) throw new CustomError(CAR_NOT_FOUND, 404);
//     return this.factory.createDomainCar(car); 
//   }
// }