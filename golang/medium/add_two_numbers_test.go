package medium

import (
	"testing"
)

func TestAddTwoNumbers(t *testing.T) {
	tests := []struct {
		left   *ListNode
		right  *ListNode
		output int
	}{
		{left: &ListNode{0, nil}, right: &ListNode{5, &ListNode{6, nil}}, output: 65},
		{left: &ListNode{2, &ListNode{4, &ListNode{3, nil}}}, right: &ListNode{5, &ListNode{6, &ListNode{4, nil}}}, output: 807},
	}
	for i, test := range tests {
		result := addTwoNumbers(test.left, test.right)
		intResult := getInt(result)
		if test.output != intResult {
			t.Errorf("run %d test: expect %d, get %d\n", i+1, test.output, intResult)
		}
	}
}

func getInt(l *ListNode) int {
	result := make([]int, 0)
	for l != nil {
		result = append(result, l.Val)
		l = l.Next
	}

	r := 0
	for i := len(result) - 1; i >= 0; i-- {
		r = r*10 + result[i]
	}

	return r
}
