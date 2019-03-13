// 771
package easy

func NumJewelsInStones(J string, S string) int {
	numOfJewels := 0
	for _, v := range S {
		for _, s := range J {
			if v == s {
				numOfJewels++
				break
			}
		}
	}

	return numOfJewels
}

func NumJewelsInStones2(J string, S string) int {
	var chars ['z' - 'A' + 1]int
	for _, v := range J {
		chars[v-'A'] = 1
	}
	sum := 0
	for _, s := range S {
		sum += chars[s-'A']
	}

	return sum
}
