package number

import (
	"math/rand"
	"time"
	. "github.com/rgrannell1/peach/types"
)

func Uniform(from, to Wrapped[int]) Wrapped[int] {
	return Thunk(func () int {
		lower := from.From()
		upper := to.From()

		seed := rand.NewSource(time.Now().UnixNano())
    rand := rand.New(seed).Float64()

		return int((rand * (float64(upper) - float64(lower))) + float64(lower))
	})
}

func UniformContinuous(from, to Wrapped[float64]) Wrapped[float64] {
	return Thunk(func () float64 {
		lower := from.From()
		upper := to.From()

		seed := rand.NewSource(time.Now().UnixNano())
    rand := rand.New(seed).Float64()

		return (rand * (upper - lower)) + lower
	})
}
