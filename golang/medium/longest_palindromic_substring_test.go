package medium

import "testing"

var tests = []struct {
	input  string
	expect string
}{
	{input: "babad", expect: "bab"},
	{input: "cbbd", expect: "bb"},
}

func TestLongestPalindrome(t *testing.T) {
	for i, test := range tests {
		result := longestPalindrome(test.input)
		if test.expect != result {
			t.Errorf("run %d test: expect %s, get %s\n", i+1, test.expect, result)
		}
	}
}

func TestLongestPalindrome1(t *testing.T) {
	for i, test := range tests {
		result := longestPalindrome1(test.input)
		if test.expect != result {
			t.Errorf("run %d test: expect %s, get %s\n", i+1, test.expect, result)
		}
	}
}
