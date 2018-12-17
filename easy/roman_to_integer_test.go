package easy

import (
	"testing"
)

var romanToIntTests = []struct {
	input  string
	expect int
}{
	{input: "III", expect: 3},
	{input: "CCIV", expect: 204},
	{input: "IX", expect: 9},
	{input: "LVIII", expect: 58},
	{input: "MCMXCIV", expect: 1994},
}

func TestRomanToInt(t *testing.T) {
	for i, test := range romanToIntTests {
		res := romanToInt(test.input)
		if res != test.expect {
			t.Errorf("run %d test: expect: %d, get: %d\n", i+1, test.expect, res)
		}
	}
}
