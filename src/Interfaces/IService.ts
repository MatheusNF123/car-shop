export default interface IService<T, L> {
  create(obj: T):Promise<L>
  readOne(id:string):Promise<L>
  read():Promise<L[]>
  update(_id: string, obj: T): Promise<L>
}