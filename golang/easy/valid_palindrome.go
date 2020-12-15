// 125

package easy

import "strings"

func ValidPalindrome(s string) bool {
	strlen := len(s)
	if strlen == 0 {
		return true
	}
	s = strings.ToLower(s)
	for i, j := 0, strlen-1; i < j; i, j = i+1, j-1 {
		for isNotAlpha(s[i]) && i < j {
			i++
		}
		for isNotAlpha(s[j]) && i < j {
			j--
		}

		if s[i] != s[j] {
			return false
		}
	}

	return true
}

func isNotAlpha(ch byte) bool {
	return !((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9'))
}
