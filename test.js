var twoSum = function(nums, target) {
   
    for(var i = 0 ; i < nums.length ; i++){
        for(var j = 1 ; j < nums.length ; j++){
            if(nums[i]+nums[j] == target){
                arr.push(i,j);
                console.log(arr);
            }
                  
        }
         
    }
   
};
var nums = [2 , 7 , 11 , 15];
var target = 9;
var arr = [];
twoSum(nums , target);