// 929

package easy

import "strings"

func NumUniqueEmails(emails []string) int {
	len := len(emails)
	if len == 0 {
		return len
	}
	for i, s := range emails {
		tmp := make([]byte, 0)
		isName := true
		hasPlus := false
		for _, v := range []byte(s) {
			if isName {
				if hasPlus {
					if v == '@' {
						isName = false
					}
					continue
				} else {
					if v == '.' {
						continue
					} else if v == '+' {
						hasPlus = true
						continue
					}
				}
			}
			tmp = append(tmp, v)
		}
		emails[i] = string(tmp)
	}

	duplicate, needRemove := 0, 0
	for i := 0; i < len; i++ {
		if i >= len-duplicate {
			break
		}
		needRemove = 0
		for j := i + 1; j < len-duplicate; j++ {
			if emails[i] == emails[j] {
				needRemove++
			} else {
				emails[j-needRemove] = emails[j]
			}
		}
		duplicate += needRemove
	}

	return len - duplicate
}

// use golang internal function
func NumUniqueEmails2(emails []string) int {
	uniqueEmails := make(map[string]bool)
	for _, email := range emails {
		t := strings.Split(email, "@")
		name, host := t[0], t[1]
		name = strings.Replace(name, ".", "", -1)
		plusPosition := strings.Index(name, "+")
		if plusPosition >= 0 {
			name = string(name[:strings.Index(name, "+")])
		}
		uniqueEmails[name+host] = true
	}

	return len(uniqueEmails)
}
