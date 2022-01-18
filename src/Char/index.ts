
import { Density, Wrapped, Thunk, From } from '../../types.ts'

export function FromRange(range: Wrapped<Array<Wrapped<number>>>, density: Density): Thunk<string> {
  return () => {
    const $range = From(range)

    const lower = $range[0]
    const upper = $range[1]

    return String.fromCharCode(Math.floor(From(density(lower, upper))))
  }
}

export function Digit(density: Density): Thunk<string> {
  return FromRange([48, 57], density)
}
