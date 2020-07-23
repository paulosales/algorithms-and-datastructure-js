export type CompareFunction = (a: any, b: any) => number

declare class Heap {
  constructor(compareFunc: CompareFunction)

  swap(a: any, b: any): void
  getParentIndex(index: number): number
  getLeftChildIndex(index: number): number
  getRightChildIndex(index: number): number
  headpfyUp(index: number): void
  heapfyDown(index: number): void
  insert(data: any): void
  remove(data: any): void
  get(): any
  size(): number
  extract(): any
}


export default Heap
