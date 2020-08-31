const nums = [3, 2, 4];
const target = 6;

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    const diffInd = nums.indexOf(target - nums[i]);
    if (diffInd > -1 && diffInd != i) {
      return [i, nums.indexOf(target - nums[i])];
    }
  }
};

console.log(twoSum(nums, target));
