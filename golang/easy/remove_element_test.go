package easy

import (
	"fmt"
	"testing"

	"github.com/gerbawn/leetcode/libraries"
)

type inputStruct struct {
	arr []int
	num int
}

type outputStruct inputStruct

var removeElementTests = []struct {
	input  inputStruct
	output outputStruct
}{
	{input: inputStruct{[]int{3, 2, 2, 3}, 3}, output: outputStruct{[]int{2, 2}, 2}},
	{input: inputStruct{[]int{0, 1, 2, 2, 3, 0, 4, 2}, 2}, output: outputStruct{[]int{0, 1, 3, 0, 4}, 5}},
	{input: inputStruct{[]int{}, 3}, output: outputStruct{[]int{}, 0}},
	{input: inputStruct{[]int{3, 3, 3, 3, 3}, 3}, output: outputStruct{[]int{}, 0}},
	{input: inputStruct{[]int{1, 2, 4, 5, 6}, 3}, output: outputStruct{[]int{1, 2, 4, 5, 6}, 5}},
}

func TestRemoveElement(t *testing.T) {
	for i, test := range removeElementTests {
		result := RemoveElement(test.input.arr, test.input.num)
		if result != test.output.num || libraries.IsArrEqual(test.input.arr[:result], test.output.arr) == false {
			fmt.Println(test.input.arr)
			t.Errorf("run %d test, expect %d, get %d\n", i+1, test.output, result)
		}
	}
}
