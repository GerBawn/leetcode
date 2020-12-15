// 38

package easy

import (
	"strconv"
)

func CountAndSay(n int) string {
	res := "1"
	for i := 1; i < n; i++ {
		count := 1
		say := res[0]
		temp := ""
		strlen := len(res)
		for j := 1; j < strlen; j++ {
			if say == res[j] {
				count++
				continue
			}
			temp += strconv.Itoa(count) + string(say)
			say = res[j]
			count = 1
		}
		temp += strconv.Itoa(count) + string(say)
		res = temp
	}

	return res
}
