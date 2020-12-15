package medium

const Int32Max = 1<<31 - 1
const Int32Min = ^Int32Max

// convert a string to an integer
func MyAtoi(str string) int {
	var factor, integer int32 = 1, 0
	// var integer int32
	isBegin := false
	for _, ch := range []byte(str) {
		if ch == ' ' || ch == '\t' {
			if isBegin {
				break
			} else {
				continue
			}
		} else if ch == '-' {
			if isBegin {
				break
			} else {
				factor = -1
			}
		} else if ch == '+' {
			if isBegin {
				break
			}
		} else if ch >= '0' && ch <= '9' {
			number := integer*10 + factor*int32(ch-'0')
			if number*factor < 0 || ((number-factor*int32(ch-'0'))/10) != integer {
				if factor == 1 {
					integer = Int32Max
				} else {
					integer = Int32Min
				}
				break
			}
			integer = number
		} else {
			break
		}
		isBegin = true
	}

	return int(integer)
}
