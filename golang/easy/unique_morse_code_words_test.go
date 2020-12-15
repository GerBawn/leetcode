package easy

import (
	"testing"
)

var nmcwTests = []struct {
	input  []string
	output int
}{
	{input: []string{"gin", "zen", "gig", "msg"}, output: 2},
	{input: []string{"gin", "zen", "gig", "message"}, output: 3},
	{input: []string{}, output: 0},
	{input: []string{"gin", "zenz", "gig", "message"}, output: 4},
}

func TestUniqueMorseCodeWords(t *testing.T) {
	for i, test := range nmcwTests {
		result := UniqueMorseRepresentations(test.input)
		if result != test.output {
			t.Errorf("run %d test, expect %d, get %d\n", i+1, test.output, result)
		}
	}
}
