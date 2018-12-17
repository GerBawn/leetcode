package easy

/**
回文数
*/
func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	temp, res := x, 0
	for {
		if temp == 0 {
			break
		}
		res = res*10 + temp%10
		temp /= 10
	}

	return x == res
}

/**
改进的算法，只需要计算整数的后半部分，可以防止大整数溢出，并且减少循环次数
*/
func isPalindrome2(x int) bool {
	if x < 0 {
		return false
	}

	res := 0
	for res < x {
		res = res*10 + x%10
		//x为五位数或者六位数
		if res == x || res == x/10 {
			return true
		}
		x /= 10

	}

	return false
}
