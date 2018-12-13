package medium

import (
	"testing"
)

func TestLongestNoRepeatSubstring(t *testing.T) {
	tests := []struct {
		str    string
		expect int
	}{
		{str: "abcabcbb", expect: 3},
		{str: "bbbb", expect: 1},
		{str: "pwwkew", expect: 3},
	}

	for i, test := range tests {
		len := longestNoRepeatSubstring(test.str)
		if len != test.expect {
			t.Errorf("run %d tests: expect %d, get %d\n", i+1, test.expect, len)
		}
	}
}
