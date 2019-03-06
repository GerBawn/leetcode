package libraries

func IsArrEqual(a1, a2 []int) bool {
	if len(a1) != len(a2) {
		return false
	}
	if len(a1) == 0 {
		return true
	}
	for i, v := range a1 {
		if v != a2[i] {
			return false
		}
	}

	return true
}
