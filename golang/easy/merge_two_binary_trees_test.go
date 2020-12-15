package easy

import (
	"testing"
)

var mtTests = []struct {
	input  [2]*TreeNode
	output *TreeNode
}{
	{
		input:  [2]*TreeNode{{Val: 1, Left: &TreeNode{Val: 3, Left: &TreeNode{Val: 5}}, Right: &TreeNode{Val: 2}}, {Val: 2, Left: &TreeNode{Val: 1, Right: &TreeNode{Val: 4}}, Right: &TreeNode{Val: 3, Right: &TreeNode{Val: 7}}}},
		output: &TreeNode{Val: 3, Left: &TreeNode{Val: 4, Left: &TreeNode{Val: 5}, Right: &TreeNode{Val: 4}}, Right: &TreeNode{Val: 5, Right: &TreeNode{Val: 7}}},
	},
	{
		input:  [2]*TreeNode{nil, nil},
		output: nil,
	},
}

func TestMergeTwoBinaryTrees(t *testing.T) {
	for i, test := range mtTests {
		result := MergeTrees(test.input[0], test.input[1])
		if !isTreeEquals(result, test.output) {
			t.Errorf("run %d test, expect %v, get %v\n", i+1, test.output, result)
		}
	}
}

func isTreeEquals(t1, t2 *TreeNode) bool {
	if t1 == nil && t2 == nil {
		return true
	}
	if t1 != nil && t2 != nil {
		if t1.Val == t2.Val {
			res := isTreeEquals(t1.Left, t2.Left)
			res2 := isTreeEquals(t1.Right, t2.Right)
			return res && res2
		}
	}

	return false
}
