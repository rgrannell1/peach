package types

/*
 * A wrapped value holds either a thunk or value (always one or the other)
 */
type Wrapped[T any] struct {
	Thunk     func() T
	Instant   T
	IsThunk   bool
	IsInstant bool
}

/*
 * A density function
 */
type Density func (from, to Wrapped[int]) Wrapped[int]

/*
 * Extract a value from a wrapped value
 */
func (wrap Wrapped[T]) From () T {
  if wrap.IsThunk {
    return wrap.Thunk()
	}
	if wrap.IsInstant {
		return wrap.Instant
	}

	panic("unreachable")
}

/*
 * Construct a thunk value
 */
func Thunk[T any] (thunk func () T) Wrapped[T] {
	wrap := Wrapped[T]{}

	wrap.Thunk     = thunk
	wrap.IsThunk   = true
	wrap.IsInstant = false

	return wrap
}

/*
 * Construct an instant value
 */
func Instant[T any] (val T) Wrapped[T] {
	wrap := Wrapped[T]{}

	wrap.Instant = val
	wrap.IsThunk = false
	wrap.IsInstant = true

	return wrap
}
