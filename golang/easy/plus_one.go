// 66
package easy

func PlusOne(digits []int) []int {
	l := len(digits)
	carry := 1
	for i := l - 1; i >= 0; i-- {
		digit := digits[i] + carry
		if digit < 10 {
			digits[i] = digit
			break
		} else {
			digit -= 10
			digits[i] = digit
			if i == 0 {
				digits = append([]int{1}, digits...)
			}
		}
	}

	return digits
}
