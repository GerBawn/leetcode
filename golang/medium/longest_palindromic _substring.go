package medium

/**
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
example:
	Input: babad
	Output: bab
*/

func longestPalindrome(s string) string {
	len := len(s)
	if len == 0 {
		return s
	}
	var start, end = 0, 0
	var subStart, subEnd, subLen = 0, 0, 0
	for i := range []byte(s) {
		for j := len - 1; j >= i; j-- {
			if s[j] == s[i] {
				for start, end = i, j; end >= start; start, end = start+1, end-1 {
					if s[start] != s[end] {
						break
					}
				}
				if end <= start {
					if j-i > subLen {
						subStart, subEnd = i, j
						subLen = j - i
					}
					break
				}
			}
		}
	}

	return string(s[subStart : subEnd+1])
}

func longestPalindrome1(s string) string {
	start, end, len := 0, 0, 0
	for i := range []byte(s) {
		len1 := expandPalindrome(s, i, i)
		len2 := expandPalindrome(s, i, i+1)
		if len1 > len {
			len = len1
		}
		if len2 > len {
			len = len2
		}

		if len > end-start+1 {
			start = i - (len-1)/2
			end = i + len/2
		}
	}
	return s[start : end+1]
}

func expandPalindrome(s string, start, end int) int {
	len := len(s)
	for start >= 0 && end < len && s[start] == s[end] {
		start, end = start-1, end+1
	}

	return end - start - 1
}

func reverseString(s string) string {
	len := len(s)
	s1 := make([]byte, len)
	for i := range []byte(s) {
		s1[len-i-1] = s[i]
	}

	return string(s1)
}
