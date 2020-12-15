package easy

func SearchInsert(nums []int, target int) int {
	position := 0
	for i, v := range nums {
		if v > target {
			break
		} else if v == target {
			return i
		}
		position++
	}

	return position
}
