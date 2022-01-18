
export type Thunk<T> = () => T
export type Instant<T> = T
export type Wrapped<T> = Thunk<T> | Instant<T>

export function isThunk<T>(ctx: Wrapped<T>): ctx is Thunk<T> {
  return typeof ctx === 'function'
}

export function From<T>(ctx: Wrapped<T>): T {
  return isThunk(ctx) ? ctx() : ctx
}

export function Compose<T, K>(source: Wrapped<T>, fn: (underlying: T) => K): Wrapped<K> {
  return () => fn(From(source))
}
