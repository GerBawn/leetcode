package easy

type ListNode struct {
	Val  int
	Next *ListNode
}

func MergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	var res, first *ListNode
	res = new(ListNode)
	first = res
	for l1 != nil || l2 != nil {
		if l1 == nil {
			res.Next = l2
			break
		}
		if l2 == nil {
			res.Next = l1
			break
		}
		for l1 != nil && l1.Val <= l2.Val {
			res.Next = l1
			l1 = l1.Next
			res = res.Next
		}
		for l2 != nil && l1 != nil && l2.Val <= l1.Val {
			res.Next = l2
			l2 = l2.Next
			res = res.Next
		}
	}

	return first.Next
}
