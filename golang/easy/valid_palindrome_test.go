package easy

import (
	"testing"
)

var vpTests = []struct {
	input  string
	output bool
}{
	{input: "A man, a plan, a canal: Panama", output: true},
	{input: "race a car", output: false},
	{input: ".,", output: true},
	{input: "0P", output: false},
}

func TestValidPalindrome(t *testing.T) {
	for i, test := range vpTests {
		result := ValidPalindrome(test.input)
		if result != test.output {
			t.Errorf("run %d test, expect %v, get %v\n", i+1, test.output, result)
		}
	}
}
