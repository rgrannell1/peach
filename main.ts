
import * as Number from './src/Number/index.ts'
import Collections from './src/Collections/index.ts'
import * as Char from './src/Char/index.ts'
import * as String from './src/String/index.ts'
import { From } from './types.ts'

const { Uniform: U } = Number

while (true) {
  console.log(
    From(Collections.Set.New(
      String.Repeat(Char.Digit(U), U(0, 10)),
      U(0, 5)
    ))
  )
}
