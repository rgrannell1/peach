
import {Wrapped, Thunk, From} from '../../types.ts'

function Uniform(from: Wrapped<number>, to: Wrapped<number>): Thunk<number> {
  const lower = From(from)
  const upper = From(to)

  return () => {
    return (Math.random() * (upper - lower)) + lower
  }
}

export default {
  Uniform: Uniform
}
