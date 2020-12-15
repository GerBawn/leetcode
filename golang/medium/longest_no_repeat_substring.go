package medium

func longestNoRepeatSubstring(str string) int {
	record := make(map[byte]int)
	start, len := 0, 0
	for i, c := range []byte(str) {
		if v, ok := record[c]; ok && v >= start {
			start = v + 1
		}

		if i-start+1 > len {
			len = i - start + 1
		}

		record[c] = i
	}

	return len
}
