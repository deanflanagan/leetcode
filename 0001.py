nums = [2,7,11,15]
target = 9
# print(nums)


class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for firstind, firstnum in enumerate(nums):
            for secondind, secondnum in enumerate(nums):
                if secondind > firstind and firstnum + secondnum == target:
                    print('                        ****')
                    print(firstind, secondind)
                    return (firstind, secondind)


