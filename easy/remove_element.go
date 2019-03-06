package easy

func RemoveElement(nums []int, val int) int {
	len, removed := 0, 0
	for i, num := range nums {
		if num == val {
			removed++
		} else {
			nums[i-removed] = nums[i]
			len++
		}
	}

	nums = nums[:len]

	return len
}
