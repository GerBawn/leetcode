package medium

import "strings"

func ZigZagConversion(str string, numRows int) string {
	if numRows == 1 {
		return str
	}
	res := make([]byte, len(str))
	len := len(str)
	start := 0
	for i := 1; i <= numRows; i++ {
		first, second := getStartIndexs(i, numRows)
		j := 0
		for {
			index := getCurIndex(first, j, numRows)
			if index >= len {
				break
			}
			res[start] = str[index]
			start++
			if i != 1 && i != numRows {
				index = getCurIndex(second, j, numRows)
				if index >= len {
					break
				}
				res[start] = str[index]
				start++
			}
			if start >= len {
				break
			}
			j++
		}
	}
	return string(res)
}

func ZigZagConversionBySortByRow(str string, numRows int) string {
	if numRows == 1 {
		return str
	}
	byteRows := make([][]byte, numRows)
	res := make([]string, numRows)
	for i := 0; i < numRows; i++ {
		byteRows[i] = make([]byte, 0)
	}

	step, row := 1, 1
	for _, ch := range []byte(str) {
		if row == 1 {
			step = 1
		} else if row == numRows {
			step = -1
		}
		byteRows[row-1] = append(byteRows[row-1], ch)
		row += step
	}

	for i := 0; i < numRows; i++ {
		res[i] = string(byteRows[i])
	}

	return strings.Join(res, "")
}

// 得到每一行的前两个值的索引
func getStartIndexs(row, rows int) (int, int) {
	first := row - 1
	return first, first + 2*(rows-row)
}

// 索引公式
func getCurIndex(start, count, rows int) int {
	return start + 2*count*(rows-1)
}
