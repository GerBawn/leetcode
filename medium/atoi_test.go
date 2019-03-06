package medium

import "testing"

var atoiTests = []struct {
	input  string
	expect int
}{
	{input: "2147483648", expect: Int32Max},
	{input: "-2147483649", expect: Int32Min},
	{input: "-91283472332", expect: Int32Min},
	{input: "  +123", expect: 123},
	{input: "0123", expect: 123},
	{input: "-42", expect: -42},
	{input: "4193 with words", expect: 4193},
	{input: "a123", expect: 0},
	{input: "9223372036854775808", expect: Int32Max},
	{input: "+-2", expect: 0},
}

func TestAtoi(t *testing.T) {
	for i, test := range atoiTests {
		result := MyAtoi(test.input)
		if result != test.expect {
			t.Errorf("run %d test: expect %d, get: %d\n", i+1, test.expect, result)
		}
	}
}
