package easy

/**
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/
func two_sum(numbers []int, target int) []int {
	record := make(map[int]int)
	for i, v := range numbers {
		sub := target - v
		if j, ok := record[sub]; ok {
			return []int{j, i}
		}
		record[v] = i
	}

	return []int{0, 0}
}
