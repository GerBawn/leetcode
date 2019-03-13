//804

package easy

var relation = map[byte]string{
	'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.", 'g': "--.", 'h': "....", 'i': "..",
	'j': ".---", 'k': "-.-", 'l': ".-..", 'm': "--", 'n': "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.", 's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-", 'y': "-.--", 'z': "--..",
}

func UniqueMorseRepresentations(words []string) int {
	var morseMap = make(map[string]bool)
	for _, word := range words {
		morse := ""
		for _, ch := range []byte(word) {
			morse = morse + relation[ch]
		}
		morseMap[morse] = true
	}

	return len(morseMap)
}
