package easy

import (
	"testing"
)

type jasInput struct {
	jewels string
	stones string
}

var jewelsAndStonesTests = []struct {
	input  jasInput
	output int
}{
	{input: jasInput{jewels: "aA", stones: "aAAbbbb"}, output: 3},
	{input: jasInput{jewels: "z", stones: "ZZ"}, output: 0},
	{input: jasInput{jewels: "abc", stones: "abdc"}, output: 3},
	{input: jasInput{jewels: "", stones: "aAAbbbb"}, output: 0},
	{input: jasInput{jewels: "aA", stones: ""}, output: 0},
}

func TestNumJewelsInStones(t *testing.T) {
	for i, test := range jewelsAndStonesTests {
		result := NumJewelsInStones(test.input.jewels, test.input.stones)
		if result != test.output {
			t.Errorf("run %d test, expect %d, get %d\n", i+1, test.output, result)
		}
	}
}

func TestNumJewelsInStones2(t *testing.T) {
	for i, test := range jewelsAndStonesTests {
		result := NumJewelsInStones2(test.input.jewels, test.input.stones)
		if result != test.output {
			t.Errorf("run %d test, expect %d, get %d\n", i+1, test.output, result)
		}
	}
}
