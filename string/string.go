package string

import (
	"strings"
	. "github.com/rgrannell1/peach/types"
)

func Repeat(val Wrapped[string], size Wrapped[int]) Wrapped[string] {
	return Thunk[string](func () string {

		tgt := size.From()
		var build strings.Builder

    for idx := 0; idx < tgt; idx++ {
      build.WriteString(val.From())
    }

		return build.String()
	})
}
