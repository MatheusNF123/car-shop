export default interface IModel<T>{
  create(obj:T):Promise<T>
}