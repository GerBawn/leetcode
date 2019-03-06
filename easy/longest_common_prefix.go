package easy

func longestCommonPrefix(strs []string) string {
	var prefix string

	arrLen := len(strs)
	if arrLen == 0 {
		return prefix
	}
	firstStrLen := len(strs[0])
	for i := 0; i < firstStrLen; i++ {
		for j := 1; j < arrLen; j++ {
			if i >= len(strs[j]) {
				return prefix
			}
			if strs[0][i] != strs[j][i] {
				return prefix
			}
		}
		prefix = strs[0][:i+1]
	}

	return prefix
}

func longestCommonPrefix2(strs []string) string {
	arrLen := len(strs)
	if arrLen == 0 {
		return ""
	} else if arrLen == 1 {
		return strs[0]
	}
	lcp := lcpOfTwoString(strs[0], strs[1])
	for i := 2; i < arrLen; i++ {
		lcp = lcpOfTwoString(lcp, strs[i])
	}

	return lcp
}

func lcpOfTwoString(str1, str2 string) string {
	len1, len2 := len(str1), len(str2)
	var minLen int
	if len1 > len2 {
		minLen = len2
	} else {
		minLen = len1
	}

	i := 0

	for ; i < minLen; i++ {
		if str1[i] != str2[i] {
			break
		}
	}

	return str1[:i]
}
