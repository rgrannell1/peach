
import { Density } from '../../types'
import { Wrapped, Thunk, From } from '../../types.ts'


export function OneOf <T> (density: Density, elems: Wrapped<Array<Wrapped<T>>>): Thunk<T> {
  return ():T => {
    const data:Array<Wrapped<T>> = From(elems)
    const idx:number = From(density(0, data.length))

    return From(data[idx])
  }
}


export function Choose<T>(elems: Wrapped<T>, choose: (size: number) => Wrapped<number>, density: Density): Thunk<T[]> {
  return () => {
    const $elems: T[] = From(elems)
    const $choose: number = From(choose($elems.length))

    // compute a subset

    return [] as T[]
  }
}
