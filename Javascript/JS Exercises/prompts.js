
// EASY MODE

/*
 Prompt 1

Description:
Write a function convertToFahrenheit that converts Celsius temperatures to Fahrenheit.
The formula to convert Celsius to Fahrenheit is F = C * 9/5 + 32, where C is the
temperature in Celsius and F is the temperature in Fahrenheit.
*/


function convertToFahrenheit(celsius){
    return (celsius * 9) /5 + 32;
}

// console.log(convertToFahrenheit(0))
// console.log(convertToFahrenheit(-40))
// console.log(convertToFahrenheit(100))
// console.log(convertToFahrenheit(37))


/*
 Prompt 2

Description:
Create a function sumEvenNumbers that takes an array of numbers as a parameter and
returns the sum of all the even numbers in the array.

*/

function sumEvenNumbers(arr){
    let sum = 0;

    // for (let i = 0; i <= arr.length; i++){
    //     if (i % 2 ===  0){
    //         sum += i
    //     }
    // }

    for (i of arr){
        if (i % 2 ===  0){
            sum += i
        }
    }

    return sum
}


// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))

/*
Prompt 3

Description:
Develop a function countVowelsAndConsonants that accepts a string as input and
returns an object with two properties: vowels and consonants. The properties should
count the number of vowels and consonants in the string, respectively. Assume the
string will only contain lowercase or uppercase letters and no spaces or special
characters.

*/

function countVowelsAndConsonants (letters){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let result = {
        vowels: 0,
        consonants: 0
    }

    for (const letter of letters){
        if (vowels.includes(letter)){
            result.vowels += 1
        }
        else {
            result.consonants += 1
        }
    }
    return result

}


// console.log(countVowelsAndConsonants("javascript"))
// console.log(countVowelsAndConsonants("ProgrammingInJavaScript"))
// console.log(countVowelsAndConsonants("ExampleOfMixedCase"))
// console.log(countVowelsAndConsonants("FUNCTIONALprogramming"))
// console.log(countVowelsAndConsonants("DataStructuresAndAlgorithms"))


/*
Prompt 4

Description:
Create a function findLongestWord that accepts a string as input and returns the longest
word in the string. Assume the string will only contain words separated by spaces and
no punctuation or special characters. In case of a tie, return the word that appears first.
For an added challenge: do NOT use the .split() method to solve this problem.

*/


// My Solution 

function findLongestWord (sentence){
    let words = sentence.split(" ")
    let longestWord = words[0]
    for (const word of words){
        if (word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord
}

// Other solution


/*
function findLongestWord(sentence) {
  let longestWord = "";
  let currentWord = "";

  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === " " || i === sentence.length) {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = ""; // Reset current word for the next word
    } else {
      currentWord += sentence[i];
    }
  }

  return longestWord;
}

*/


// console.log(findLongestWord("The quick brown fox is jumping over the lazy dog"))
// console.log(findLongestWord("Sustainability encompasses various initiatives and strategies to maintain ecological balance."))
// console.log(findLongestWord("An exploration of quantum computing reveals intricacies within computational theories."))
// console.log(findLongestWord("Innovative technological advancements revolutionize traditional methodologies in various sectors."))


/*
Prompt 5

Description:
Create a function findLargestAgeDifference that accepts an array of tuples, each tuple
representing a pair of ages. The function should return the largest age difference among
all pairs. If the array is empty, return 0.

*/

function findLargestAgeDifference (agePairs){
    let largestDiff = Number.NEGATIVE_INFINITY
    for (pair of agePairs){
        const diff = Math.abs(pair[1] - pair[0])
        if(diff > largestDiff){
            largestDiff = diff
        }
    }
    console.log(largestDiff)
    return largestDiff
}

// findLargestAgeDifference([[18, 30], [29, 40], [50, 60]]);
// findLargestAgeDifference([[10, 20], [20, 30], [30, 40], [40, 50], [50, 60]])
// findLargestAgeDifference([[1, 5], [6, 10], [11, 20], [21, 35], [36, 55], [56, 80]])
// findLargestAgeDifference([[5, 25], [26, 46], [47, 67], [68, 88], [89, 109]])
// findLargestAgeDifference([[15, 5], [25, 10], [60, 40], [100, 60]])
// findLargestAgeDifference([[100, 300], [200, 400], [500, 800], [600, 900]])



// MEDIUM MODE

/*
Prompt 1

Description:
Write a JavaScript function named findUniqueCharacters that takes a string as input
and returns a string containing only the unique characters from the input, in the order
they first appeared. A character is considered unique if it appears exactly once in the
input string.

*/

function findUniqueCharacters (str){
    let result = ""
    let characters = {}
    for (const char of str){
        if (characters[char]){
            characters[char] += 1
        }
        else {
            characters[char] = 1
        }
    }
    for (let char of str){
        if (characters[char] === 1){
            result += char
        }
    }
    console.log (result)
    return result
}

// findUniqueCharacters("bubble");
// findUniqueCharacters("abcdef");
// findUniqueCharacters("aabbccdd");
// findUniqueCharacters("");
// findUniqueCharacters("!a b c! a");
// findUniqueCharacters("123412345");
// findUniqueCharacters("AaBbCc");


/*
Prompt 2

Description:
Write a JavaScript function named mergeSortedArrays that takes two arrays of numbers
as inputs, both of which are already sorted in ascending order. The function should
return a new array that merges both input arrays into one, maintaining the ascending
order. Aim for an efficient solution that does not use the built-in sort method.

*/

function mergeSortedArrays(arr1, arr2){
    let finalArr = []

    while (arr1.length !== 0 && arr2.length !== 0){
        let temp
        if (arr1[0] <= arr2[0]){
            temp = arr1.shift()
            finalArr.push(temp)
        }
        else if (arr2[0] <= arr1[0]) {
            temp = arr2.shift()
            finalArr.push(temp)
        }
        
    }
    while (arr1.length !== 0){
        finalArr.push(arr1.shif())
    }
    while (arr2.length !== 0){
        finalArr.push(arr2.shift())
    }
    console.log(finalArr)
    return finalArr
}

// mergeSortedArrays([1, 3, 5], [2, 4, 6]);
// mergeSortedArrays([], [1, 2, 3])
// mergeSortedArrays([1, 3], [2, 4, 5, 6])
// mergeSortedArrays([1, 2, 2], [2, 3, 4])
// mergeSortedArrays([-3, -2, -1], [1, 2, 3])
// mergeSortedArrays([-10, 1, 2, 3, 4, 50, 60, 70, 100, 110], [-5, 5,  15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125])



/*
Prompt 3

Description:
Write a JavaScript function named updateEmployeeSalary that takes three parameters:
an array of employee objects, an employee ID, and a new salary value. Each employee
object will have the following structure:

        {
            id: Number,
            name: String,
            position: String,
            salary: Number,
            department: {
            name: String,
            location: String
            }
        }

The function should update the salary of the employee with the specified ID to the new
salary value provided. If the employee ID does not exist in the array, the function should
return null. After updating the salary, return the updated employee object.

*/

function updateEmployeeSalary(employees, employeeID, newSalary){
    let updatedEmployee = {}
    if (employees.length === 0){
        console.log("null")
        return null
    }
    for (let employee of employees){
        if (employee.id === employeeID){
            employee.salary = newSalary
            updatedEmployee = employee
        }
    }
    if (Object.keys(updatedEmployee).length === 0){
        console.log("null")
        return null
    }
    else {
        console.log(updatedEmployee)
        return updatedEmployee
    }

}

// const employees = [
//     { id: 1, name: "John Doe", position: "Software Engineer", salary:
//     70000, department: { name: "Engineering", location: "New York" } },
//     { id: 2, name: "Jane Smith", position: "Product Manager", salary:
//     80000, department: { name: "Product", location: "San Francisco" } }
//     ];
// updateEmployeeSalary(employees, 1, 75000);


// const employees1 = [
//     { id: 1, name: "John Doe", position: "Developer", salary: 60000,
//     department: { name: "Development", location: "New York" } },
//     { id: 2, name: "Jane Smith", position: "Designer", salary: 65000,
//     department: { name: "Design", location: "San Francisco" } }
//     ];
// updateEmployeeSalary(employees1, 1, 65000);

// const employees2 = [
//     { id: 1, name: "Alice Brown", position: "Manager", salary: 75000,
//     department: { name: "Management", location: "London" } }
//     ];
// updateEmployeeSalary(employees2, 3, 80000);

// const employees3 = [
//     { id: 1, name: "Bob Green", position: "Analyst", salary: 50000,
//     department: { name: "Analytics", location: "Berlin" } }
//     ];
// updateEmployeeSalary(employees3, 1, 48000);

// const employees4 = [
//     { id: 2, name: "Charlie Black", position: "Consultant", salary:
//     70000, department: { name: "Consulting", location: "Toronto" } }
//     ];
// updateEmployeeSalary(employees4, 2, 72000);

// const employees5 = [];
// updateEmployeeSalary(employees5, 1, 85000);


/*
Prompt 4

Description:
Write a JavaScript function named rotateArray that takes two parameters: an array of integers arr and a non-negative integer k, which represents the number of times the array elements should be rotated to the right. The function should rotate the array in-place, meaning you should modify the array directly without using extra space for another array. After performing the rotation, the function doesn't need to return anything.
In the context of an array, "rotation" refers to moving the elements of the array around to new positions according to a specific rule. When we talk about rotating an array to the right (or clockwise), it means that each element is moved to the next position in the array, and the last element moves to the first position. This process is repeated a specified number of times (k times, in our case).

*/
//  function rotateArray(arr, k){
//     if (arr.length === 0){
//         return null
//     }

//     let current = arr[0]
//     let next
//     let rounds = 0
//     while(rounds < k){
//         for (let i = 0; i < arr.length; i++){
//             if(i === arr.length - 1){
//                 arr[0] = current
//             }
//             next = arr[i + 1]
//             arr[i + 1] = current
//             current = next
//         }
//         rounds++
//     }

//     console.log(arr)
//     return null
//  }

// Helper function to reverse a portion of the array
function reverse(arr, start, end) {
    // console.log("Before: \n", arr, "\n")
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    //   console.log("After: \n", arr, "\n\n")
    }
  }
  
  function rotateArray(arr, k) {
    // Ensure k is within the bounds of the array length
    k %= arr.length;
    // console.log(k)
  
    // Step 1: Reverse the entire array
    // console.log("Entire Reverse \n\n")
    reverse(arr, 0, arr.length - 1);
  
    // Step 2: Reverse the first k elements
    // console.log("First Half reverse: \n\n")
    reverse(arr, 0, k - 1);
  
    // Step 3: Reverse the remaining elements
    // console.log("Second Half reverse: \n\n")
    reverse(arr, k, arr.length - 1);

    console.log(arr)
    return arr
  }

// rotateArray([1, 2, 3, 4, 5, 6, 7], 3);



/*
Prompt 5

Description:
Write a JavaScript function named isPalindrome that checks if a given string is a
palindrome. A palindrome is a word, phrase, number, or other sequences of characters
that reads the same forward and backward (ignoring spaces, punctuation, and
capitalization). The function should return true if the input string is a palindrome and
false otherwise.


*/
function ignorePunctuautions (str){
    let newStr = ""
    const punctuation = [",", " ", "!", "'", ".", "?", ";", ":", "-", "_", "(", ")", "[", "]", "{", "}", "\"", "`", "~", "@", "#", "$", "%", "^", "&", "*", "+", "=", "|", "\\", "<", ">", "/", " "]
    for (char of str){
        if (!punctuation.includes(char)){
            newStr += char
        }
         
    }
    // console.log(newStr)
    return newStr
}
function reverseString(str){
    const reversedString = 
    str.split("").reduce((acc, char) => char + acc, "");
    console.log(reversedString);
}

function isPalindrome (str){
    let k
    
    let newStr = ignorePunctuautions(str).toUpperCase()
    console.log(newStr)
    const len = newStr.length

    if (len % 2 === 1){
        k = Math.floor(len / 2) + 1
        const firstHalf = newStr.substring(0, k)
        const secondHalf = reverseString(newStr.substring(k+1, -1))
        console.log(firstHalf, "\n", secondHalf)
        // for (let i = 0; i < k; i++) {
        //     for (let j = len -1; j > k + 1; j--){
        //         if (newStr[i] === newStr[j]){
        //             continue
        //         }
        //         else{
        //             console.log(i, newStr[i], j, newStr[j], len, k)
        //             console.log("false 1")
        //             return false
        //         }
        //     }
        // }
    }
    else {
        k = ((str.length) / 2) - 1
        for (let i = 0; i <= k; i++) {
            for (let j = len - 1; j > k; j--){
                if (newStr[i] === newStr[j]){
                    continue
                }
                else{
                    console.log("false 2")
                    return false
                }
            }
        }
    }
    console.log('true')
    return true
}


isPalindrome("A man, a plan, a canal, Panama");