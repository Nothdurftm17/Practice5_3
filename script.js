// Checks for duplicates
// step 1: Make an empty arr to push into.
// step 2: Create a loop that iterates through the array ]
// step 3: first conditional, checks if temp arr is empty. If so, push the first index of nums.
// step 4: if not empty, conditional to check if nums[i] is already included in arr. return true if yes.. push and keep going if no.
// step 5: return false if array has been irated through and there are no duplicates.
var containsDuplicate = function(nums) {
    var arr = [ ];
    var i = 0;
    while (i < nums.length){
        console.log(nums[i])
        if(arr.length == 0 ){
            arr.push(nums[i])
            i++
        }
        else if(arr.includes(nums[i])){
            return true
        }
        else{
            arr.push(nums[i])
            console.log(arr)
            i++
        }
    }
    return false
};

// console.log(containsDuplicate([1,2,3,1,5]))

// Checks for anagrams 

// step 1: Check that the lengths of the words are the same.
// step 2: Iterate through string s.
// step 3: Condition that checks to see if s[i] exists in string t.
// step 4: if so, in string t replace that letter with " " to cancel it out which helps deal with words containing duplicates of letters
// step 5: else, return false 
// step 6: Once it gets through the entire string meeting the proper conditions then return true outside of the while loop
var i = 0;
var isAnagram = function(s, t) {
    if( s.length != t.length){
        console.log("they ain't even the same length")
        return false 
    }
    while (i < s.length){
        console.log(s[i])
        if(t.includes(s[i])){
            t.replace(s[i] , " ")
            i++
        }
        else{
            return false
        }
    }
    return true
};

// console.log(isAnagram("rat","tar"))