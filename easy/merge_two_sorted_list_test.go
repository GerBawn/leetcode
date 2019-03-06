package easy

import (
	"testing"

	"github.com/gerbawn/leetcode/libraries"
)

var mergeTwoListsTests = []struct {
	input  [2][]int
	output []int
}{
	{input: [2][]int{[]int{1, 2, 4}, []int{1, 3, 4}}, output: []int{1, 1, 2, 3, 4, 4}},
	{input: [2][]int{[]int{1, 2, 4}, []int{}}, output: []int{1, 2, 4}},
	{input: [2][]int{[]int{1, 2, 4}, []int{5, 6, 7, 8}}, output: []int{1, 2, 4, 5, 6, 7, 8}},
}

func TestMergeTwoSortedLists(t *testing.T) {
	for i, test := range mergeTwoListsTests {
		l1, l2 := toList(test.input[0]), toList(test.input[1])
		result := MergeTwoLists(l1, l2)
		resultArr := toArr(result)
		if libraries.IsArrEqual(resultArr, test.output) != true {
			t.Errorf("run %d test, expect %v, get %v\n", i+1, test.output, resultArr)
		}
	}
}

func toList(arr []int) *ListNode {
	l := new(ListNode)
	r := l
	for _, v := range arr {
		l.Next = new(ListNode)
		l = l.Next
		l.Val = v
	}

	return r.Next
}

func toArr(l *ListNode) []int {
	arr := make([]int, 0)
	for ; l != nil; l = l.Next {
		arr = append(arr, l.Val)
	}

	return arr
}
