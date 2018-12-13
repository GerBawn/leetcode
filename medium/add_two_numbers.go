package medium

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1, l2 *ListNode) *ListNode {
	var result = new(ListNode)
	var temp = result
	carry, sum := 0, 0
	for {
		sum = carry
		carry = 0
		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}

		if l2 != nil {
			sum += l2.Val
			l2 = l2.Next
		}
		if sum >= 10 {
			carry = 1
			sum -= 10
		}
		temp.Val = sum
		if l1 == nil && l2 == nil && carry == 0 {
			break
		}
		temp.Next = new(ListNode)
		temp = temp.Next
	}

	return result
}
