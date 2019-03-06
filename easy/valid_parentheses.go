package easy

func ValidParentheses(s string) bool {
	left := make([]rune, 0)
	for _, c := range s {
		if c == '{' || c == '[' || c == '(' {
			left = append(left, c)
		} else {
			leftLen := len(left)
			if leftLen == 0 {
				return false
			}
			c1 := left[leftLen-1:][0]
			if !isMatch(c1, c) {
				return false
			}
			left = left[:leftLen-1]
		}
	}

	return len(left) == 0
}

func isMatch(s1, s2 rune) bool {
	if s1 == '{' {
		return s2 == '}'
	}
	if s1 == '(' {
		return s2 == ')'
	}
	if s1 == '[' {
		return s2 == ']'
	}

	return false
}
