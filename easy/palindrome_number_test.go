package easy

import (
	"testing"
)

var palindromeTests = []struct {
	input  int
	expect bool
}{
	{input: 123, expect: false},
	{input: 12321, expect: true},
	{input: -123, expect: false},
}

func TestPalindrome(t *testing.T) {
	for i, test := range palindromeTests {
		result := isPalindrome(test.input)
		if result != test.expect {
			t.Errorf("run %d test: expect: %v, get: %v\n", i+1, test.expect, result)
		}
	}
}

func TestPalindrome2(t *testing.T) {
	for i, test := range palindromeTests {
		result := isPalindrome2(test.input)
		if result != test.expect {
			t.Errorf("run %d test: expect: %v, get: %v\n", i+1, test.expect, result)
		}
	}
}
