package logic

import (
	. "github.com/rgrannell1/peach/types"
)

func OneOf[T any](density Density, elems Wrapped[[]Wrapped[T]]) Wrapped[T] {
	return Thunk(func () T {
		data := elems.From()
		idx := density(Instant(0), Instant(len(data))).From()

		return data[idx].From()
	})
}
