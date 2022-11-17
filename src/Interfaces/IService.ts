export default interface IService<T, L> {
  create(obj: T):Promise<L>
}