 1-The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3

2-The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

3-For words beginning with a vowel, add "ay" to the end.
Example Input: apple
Example Output: appleay

4-For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
Example Input: tricky
Example Output: ickytray

5-For words beginning with "y", treat "y" as a consonant.
Example Input: your
Example Output: ouryay

6-If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
Example Input:squeal
Example Output:ealsquay
