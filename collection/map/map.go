package kvmap

import (
	. "github.com/rgrannell1/peach/types"
)

/*
 * Construct an array of values
 */
func New[K comparable, V any](key Wrapped[K], val Wrapped[V], size Wrapped[int]) Wrapped[map[K]V] {
	return Thunk(func () map[K]V {
		data := map[K]V{}
		tgt := size.From()

		for idx := 0; idx < tgt; idx++ {
			data[key.From()] = val.From()
		}

		return data
	})
}
