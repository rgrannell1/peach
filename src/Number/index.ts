
import {Wrapped, Thunk, From} from '../../types.ts'

export function Uniform(from: Wrapped<number>, to: Wrapped<number>): Thunk<number> {
  const lower = From(from)
  const upper = From(to)

  return () => {
    return Math.floor((Math.random() * (upper - lower)) + lower)
  }
}

export function UniformContinuous(from: Wrapped<number>, to: Wrapped<number>): Thunk<number> {
  const lower = From(from)
  const upper = From(to)

  return () => {
    return (Math.random() * (upper - lower)) + lower
  }
}
