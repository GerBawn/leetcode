package easy

import (
	"testing"
)

var tlTests = []struct {
	input  string
	output string
}{
	{input: "Hello", output: "hello"},
	{input: "here", output: "here"},
	{input: "LOVELY", output: "lovely"},
	{input: "", output: ""},
}

func TestToLowercase(t *testing.T) {
	for i, test := range tlTests {
		result := ToLowercase(test.input)
		if result != test.output {
			t.Errorf("run %d test, expect %s, get %s\n", i+1, test.output, result)
		}
	}
}
