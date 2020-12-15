// 709
package easy

func ToLowercase(str string) string {
	s := []byte(str)
	for i, v := range s {
		if v >= 'A' && v <= 'Z' {
			s[i] = v + 'a' - 'A'
		}
	}

	return string(s)
}
