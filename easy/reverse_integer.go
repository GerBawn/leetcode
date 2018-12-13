package easy

func reverse(x int) int {
	min, max := -1<<31+1, 1<<31-1
	if x > max || x < min {
		return 0
	}
	r := 0
	for x != 0 {
		r = r*10 + x%10
		x /= 10
	}

	if r > max || r < min {
		return 0
	}
	return r
}
