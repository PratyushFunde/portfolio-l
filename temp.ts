// let nums =  [0, -1, 2, -3, 1];

// function checkTwoSum(arr, target) {

//     for (let i = 0; i < arr.length; i++)
//     {
//         for (let j=i+1;j<arr.length;j++)
//         {
//             if(arr[i]+arr[j]==target)
//             {
//                 return {num1:arr[i],num2:arr[j]}
//             }
//         }
//     }

// }

// console.log(checkTwoSum(nums,-2))

import {sendMail} from "./src/utils/email"

sendMail("John Doe", "Hello! I saw your portfolio 👋").then((res) => {
    if(res.success) alert("Mail sent ✅");
    else alert("Failed to send ❌");
});