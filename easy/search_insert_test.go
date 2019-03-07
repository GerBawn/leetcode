package easy

import (
	"testing"
)

type siInput struct {
	nums   []int
	target int
}

var searchInsertTests = []struct {
	input  siInput
	output int
}{
	{input: siInput{nums: []int{1, 3, 5, 6}, target: 5}, output: 2},
	{input: siInput{nums: []int{1, 3, 5, 6}, target: 2}, output: 1},
	{input: siInput{nums: []int{1, 3, 5, 6}, target: 7}, output: 4},
	{input: siInput{nums: []int{1, 3, 5, 6}, target: 0}, output: 0},
	{input: siInput{nums: []int{}, target: 5}, output: 0},
}

func TestSearchInsert(t *testing.T) {
	for i, test := range searchInsertTests {
		result := SearchInsert(test.input.nums, test.input.target)
		if result != test.output {
			t.Errorf("run %d test, expect %d, get %d\n", i+1, test.output, result)
		}
	}
}
