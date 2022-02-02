package main

import (
	"fmt"

	array "github.com/rgrannell1/peach/collection/array"
	kvmap "github.com/rgrannell1/peach/collection/map"
	string "github.com/rgrannell1/peach/string"
	. "github.com/rgrannell1/peach/types"
)

func main() {

	key := string.Repeat(Instant("a"), Instant(10))
	val := array.New(Instant(10), Instant(1))

	for {
		elem := kvmap.New(key, val, Instant(3))
		fmt.Println(elem.From())
	}
}
