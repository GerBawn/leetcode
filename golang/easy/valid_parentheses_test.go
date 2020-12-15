package easy

import (
	"testing"
)

var validParenthesesTests = []struct {
	input  string
	output bool
}{
	{input: "", output: true},
	{input: "{}", output: true},
	{input: "{[]()}", output: true},
	{input: "()[]{()}", output: true},
	{input: "()[}", output: false},
	{input: "([]{})", output: true},
	{input: "([]{)", output: false},
	{input: "}", output: false},
}

func TestValidParentheses(t *testing.T) {
	for i, test := range validParenthesesTests {
		result := ValidParentheses(test.input)
		if result != test.output {
			t.Errorf("run %d test, expect %v, get %v\n", i+1, test.output, result)
		}
	}
}
