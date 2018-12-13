package easy

import (
	"testing"
)

var tests = []struct {
	numbers []int
	target  int
	expect  []int
}{
	{numbers: []int{2, 7, 11, 15}, target: 9, expect: []int{0, 1}},
	{numbers: []int{8, 2, 5, 15, 1, 2}, target: 9, expect: []int{0, 4}},
	{numbers: []int{8, 2, 5, 15, 1, 2}, target: 4, expect: []int{1, 5}},
}

func TestTwoSum(t *testing.T) {
	for i, test := range tests {
		result := two_sum(test.numbers, test.target)
		if !sliceIsEqual(result, test.expect) {
			t.Errorf("run %d test expect %v, get %v\n", i+1, test.expect, result)
		}
	}
}

func sliceIsEqual(a, b []int) bool {
	if len(a) != len(b) {
		return false
	}
	if (a == nil) != (b == nil) {
		return false
	}

	b = b[:len(a)]
	for i, v := range a {
		if v != b[i] {
			return false
		}
	}

	return true
}
