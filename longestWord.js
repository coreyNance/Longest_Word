



function findTheLongestWord (testString) {
    testString = testString.replace(/[',']/g, '');
    testString = testString.toLowerCase();
    let stringArray = testString.split(" ");
    let greatestLength = 0;
    let longestWord = " ";
    let stringVowelCount = 0;
    let greastestVowelCount = 0; 

        for(let i = 0; i < stringArray.length; i++) {
           
            if (stringArray[i].length > greatestLength) {
                greatestLength = stringArray[i].length;
                longestWord = stringArray[i]
            }

            if(stringArray[i].length === greatestLength) {
                let stringVowelArray = stringArray[i].split("");
                let greastestVowelArray = longestWord.split("");
                
                for (let i = 0; i < stringVowelArray.length; ++ i) {
                    
                    if (stringVowelArray[i] == 'a' || stringVowelArray[i] == 'e' || stringVowelArray[i] == 'i' || stringVowelArray[i] == 'o' || stringVowelArray[i] == 'u') {
                        stringVowelCount = stringVowelCount + 1;
                    }
                }
                
                for (let i = 0; i < greastestVowelArray.length; ++ i) {
                    if (greastestVowelArray[i] == 'a' || greastestVowelArray[i] == 'e' || greastestVowelArray[i] == 'i' || greastestVowelArray[i] == 'o' || greastestVowelArray[i] == 'u') {
                        greastestVowelCount = greastestVowelCount + 1;
                    }
                 }

                 if(stringVowelCount > greastestVowelCount) {
                    longestWord = stringArray[i];
                 }


            }
        }

        
    
    return longestWord;
}



console.log(findTheLongestWord("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"))