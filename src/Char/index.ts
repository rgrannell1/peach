
import { Compose, Wrapped, Thunk, From } from '../../types.ts'
import Logic from '../Logic/index.ts'

function FromRange(range: Wrapped<Array<Wrapped<number>>>, sampler: (from: Wrapped<number>, to: Wrapped<number>) => Wrapped<number>): Thunk<string> {
  const $range = From(range)

  const lower = From($range[0])
  const upper = From($range[1])

  return Compose(
    Compose(sampler(lower, upper), Math.floor),
    String.fromCharCode) as Thunk<string>
}

function Digit(sampler: (from: Wrapped<number>, to: Wrapped<number>) => Wrapped<number>): Thunk<string> {
  return FromRange([48, 57], sampler)
}

export default {
  Digit
}
