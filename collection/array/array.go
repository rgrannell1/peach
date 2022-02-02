package array

import (
	. "github.com/rgrannell1/peach/types"
)

/*
 * Construct an array of values
 */
func New[T any](val Wrapped[T], size Wrapped[int]) Wrapped[[]T] {
	return Thunk(func () []T {
		tgt := size.From()
		elems := make([]T, tgt)

		for idx := 0; idx < tgt; idx++ {
			elems[idx] = val.From()
		}

		return elems
	})
}
