package medium

import "testing"

var zigzagConversionTests = []struct {
	input  string
	rows   int
	expect string
}{
	{input: "AB", rows: 1, expect: "AB"},
	{input: "A", rows: 1, expect: "A"},
	{input: "babad", rows: 3, expect: "bdaab"},
	{input: "cbbd", rows: 2, expect: "cbbd"},
	{input: "PAYPALISHIRING", rows: 3, expect: "PAHNAPLSIIGYIR"},
	{input: "PAYPALISHIRING", rows: 4, expect: "PINALSIGYAHRPI"},
}

func TestZigZagConversion(t *testing.T) {
	for i, test := range zigzagConversionTests {
		result := ZigZagConversion(test.input, test.rows)
		if test.expect != result {
			t.Errorf("run %d test: expect %s, get %s\n", i+1, test.expect, result)
		}
	}
}

func TestZigZagConversionBySortByRow(t *testing.T) {
	for i, test := range zigzagConversionTests {
		result := ZigZagConversionBySortByRow(test.input, test.rows)
		if test.expect != result {
			t.Errorf("run %d test: expect %s, get %s\n", i+1, test.expect, result)
		}
	}
}
