package easy

import (
	"testing"

	"github.com/gerbawn/leetcode/libraries"
)

var poTests = []struct {
	input  []int
	output []int
}{
	{input: []int{1, 2, 3}, output: []int{1, 2, 4}},
	{input: []int{4, 3, 2, 1}, output: []int{4, 3, 2, 2}},
	{input: []int{3, 1, 9}, output: []int{3, 2, 0}},
	{input: []int{9, 9}, output: []int{1, 0, 0}},
}

func TestPlusOne(t *testing.T) {
	for i, test := range poTests {
		result := PlusOne(test.input)
		if !libraries.IsArrEqual(result, test.output) {
			t.Errorf("run %d test, expect %v, get %v\n", i+1, test.output, result)
		}
	}
}
