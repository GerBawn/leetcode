package easy

import (
	"testing"
)

var longestCommonPrefixTest = []struct {
	input  []string
	output string
}{
	{input: []string{"flower", "flow", "flight"}, output: "fl"},
	{input: []string{"racecar", "dog", "car"}, output: ""},
	{input: []string{"computer", "car", "pen"}, output: ""},
	{input: []string{"dog", "dog", "dog"}, output: "dog"},
	{input: []string{}, output: ""},
	{input: []string{"dog"}, output: "dog"},
}

func TestLongestCommonPrefix(t *testing.T) {
	for i, test := range longestCommonPrefixTest {
		result := longestCommonPrefix(test.input)
		if result != test.output {
			t.Errorf("run %d test: expect %s, get %s\n", i+1, test.output, result)
		}
	}
}

func TestLongestCommonPrefix2(t *testing.T) {
	for i, test := range longestCommonPrefixTest {
		result := longestCommonPrefix2(test.input)
		if result != test.output {
			t.Errorf("run %d test: expect %s, get %s\n", i+1, test.output, result)
		}
	}
}
