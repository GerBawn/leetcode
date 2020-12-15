package easy

func RemoveDuplicates(nums []int) int {
	len := len(nums)
	if len == 0 {
		return 0
	}
	i := 0
	for j := 1; j < len; j++ {
		if nums[i] != nums[j] {
			i++
			nums[i] = nums[j]
		}
	}

	return i + 1
}

/*
	can handle unsorted array
*/
func RemoveDuplicates2(nums []int) int {
	var needRemove, removed int
	len := len(nums)
	for i, v := range nums {
		if i >= len-removed {
			break
		}
		for j := i + 1; j < len-removed; j++ {
			if v != nums[j] {
				nums[j-needRemove] = nums[j]
			} else {
				//如果相等，后面的数需要往前多移一位
				//if equals, the latter number needs to be moved one more ahead.
				needRemove++
			}
		}
		removed += needRemove
		needRemove = 0
	}

	return len - removed
}
