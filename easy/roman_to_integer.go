package easy

func romanToInt(s string) int {
	romanIntMap := map[byte]int{'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
	res := 0
	for i, v := range []byte(s) {
		cur := romanIntMap[v]
		if i < len(s)-1 {
			next := romanIntMap[s[i+1]]
			if cur < next {
				res -= cur
			} else {
				res += cur
			}
		} else {
			res += cur
		}

	}

	return res
}
