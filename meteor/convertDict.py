#Oct 8 2016
#convert linux text file to json file in my appropriate tree format
import csv, json

def addToDict(word,jsondict):
	#add the dict to the word in a tree esque format
	word = word.lower()
	t9 = convertToT9(word)
	print t9
	currDict = jsondict
	for i in xrange(len(t9)):
		if i == len(t9) -1:
			#last letter
			if t9[i] not in currDict:
				currDict[t9[i]] = {"word":[word]}
			# elif 'word' not in currDict[t9[i]]:
			elif word not in currDict[t9[i]]['word']: #don't add duplicates
				currDict[t9[i]]['word'].append(word)
		else:
			if t9[i] not in currDict:
				currDict[t9[i]] = {"word":[],t9[i+1]:{"word":[]}}
			elif t9[i+1] not in currDict[t9[i]]:
				currDict[t9[i]][t9[i+1]] = {"word":[]}
			currDict = currDict[t9[i]] #look inside more of the dict
		# print i, jsondict

def convertToT9(word):
	#convert a word to equivalent number
	# word = word.lower()
	t9 = ""
	for letter in word:
		if letter in "abc":
			t9 += "2"
		elif letter in "def":
			t9 += '3'
		elif letter in 'ghi':
			t9 += '4'
		elif letter in 'jkl':
			t9 += '5'
		elif letter in 'mno':
			t9 += '6'
		elif letter in 'pqrs':
			t9 += '7'
		elif letter in 'tuv':
			t9 += '8'
		elif letter in 'wxyz':
			t9 += '9'
	return t9


#run the actual script here
filename = 'american-english'
results = []
jsondict = {}

#import
with open(filename) as inputfile:
	for row in csv.reader(inputfile):
		# if len(results) < 100: #smaller case to work with
		addToDict(row[0], jsondict) #take the word from the list
		results.append(row)

#export to json
with open('result.json','w') as fp:
	json.dump(jsondict,fp)


# print jsondict['2']['2'].keys()
print len(results)

# if __name__ == "__main__":
	# addToDict('SAM',jsondict)
	# addToDict('SAM',jsondict)
	# addToDict('SAP',jsondict)
	