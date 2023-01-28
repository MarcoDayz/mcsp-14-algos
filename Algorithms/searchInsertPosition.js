// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4


const searchInsert = (nums, target) => {
    const compare = (a, b) => {
        return a - b
    }

    if(nums.includes(target)){
        return nums.indexOf(target)
    }else{
        nums.unshift(target)
        nums.sort(compare)
        return nums.indexOf(target)
    }
};

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([3,5,7,9,10], 8))