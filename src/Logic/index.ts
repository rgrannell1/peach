
import { Wrapped, Thunk, From } from '../../types.ts'

function OneOf <T> (sampler: (len: number) => Wrapped<number>, elems: Wrapped<Array<Wrapped<T>>>): Thunk<T> {
  return ():T => {
    const data:Array<Wrapped<T>> = From(elems)
    const idx:number = From(sampler(data.length))

    return From(data[idx])
  }
}

export default {
  OneOf
}
