package easy

import (
	"testing"

	"github.com/gerbawn/leetcode/libraries"
)

type removeDupOutputStruct struct {
	arr []int
	num int
}

var removeDuplicatesTests = []struct {
	input  []int
	output removeDupOutputStruct
}{
	{input: []int{1, 1, 2}, output: removeDupOutputStruct{arr: []int{1, 2}, num: 2}},
	{input: []int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}, output: removeDupOutputStruct{arr: []int{0, 1, 2, 3, 4}, num: 5}},
	{input: []int{}, output: removeDupOutputStruct{arr: []int{}, num: 0}},
	{input: []int{0, 0, 1, 1, 1, 3, 3, 2, 3, 4}, output: removeDupOutputStruct{arr: []int{0, 1, 3, 2, 4}, num: 5}},
}

func TestRemoveDuplicates(t *testing.T) {
	for i, test := range removeDuplicatesTests {
		result := RemoveDuplicates(test.input)
		if result != test.output.num || !libraries.IsArrEqual(test.input[:result], test.output.arr) {
			t.Errorf("run %d test, expect [%d, %v], get [%d, %v]", i+1, test.output.arr, test.output.num, result, test.input[:result])
		}
	}
}
