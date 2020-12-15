package easy

import "testing"

func TestReverse(t *testing.T) {
	tests := []struct {
		input, expect int
	}{
		{input: 123, expect: 321},
		{input: 0, expect: 0},
		{input: 120, expect: 21},
		{input: -321, expect: -123},
	}

	for _, test := range tests {
		r := reverse(test.input)
		if test.expect != r {
			t.Errorf("expected: %d, get: %d\n", test.expect, r)
		}
	}
}
