
export type Thunk<T> = () => T
export type Instant<T> = T
export type Wrapped<T> = Thunk<T> | Instant<T>

/*
 * A
 */
export type Density = (from: Wrapped<number>, to: Wrapped<number>) => Wrapped<number>

export function isThunk<T>(ctx: Wrapped<T>): ctx is Thunk<T> {
  return typeof ctx === 'function'
}

export function From<T>(ctx: Wrapped<T>): T {
  return isThunk(ctx) ? ctx() : ctx
}

export function Chain<T, K>(source: Wrapped<T>, fn: (underlying: T) => K): Wrapped<K> {
  return () => fn(From(source))
}

