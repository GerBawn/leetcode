package easy

import "testing"

var casTests = []struct {
	input  int
	output string
}{
	{input: 1, output: "1"},
	{input: 2, output: "11"},
	{input: 3, output: "21"},
	{input: 4, output: "1211"},
	{input: 5, output: "111221"},
	{input: 6, output: "312211"},
	{input: 7, output: "13112221"},
	{input: 8, output: "1113213211"},
	{input: 9, output: "31131211131221"},
	{input: 10, output: "13211311123113112211"},
	{input: 11, output: "11131221133112132113212221"},
	{input: 12, output: "3113112221232112111312211312113211"},
	{input: 13, output: "1321132132111213122112311311222113111221131221"},
	{input: 14, output: "11131221131211131231121113112221121321132132211331222113112211"},
	{input: 15, output: "311311222113111231131112132112311321322112111312211312111322212311322113212221"},
	{input: 16, output: "132113213221133112132113311211131221121321131211132221123113112221131112311332111213211322211312113211"},
}

func TestCountAndSay(t *testing.T) {
	for i, test := range casTests {
		result := CountAndSay(test.input)
		if result != test.output {
			t.Errorf("run %d test, expect %s, get %s\n", i+1, test.output, result)
		}
	}
}
