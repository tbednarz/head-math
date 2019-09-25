const twoNums = ()=>{
    let max = 99;
    let nums = [];
    for(let i = 0; i < 2; i++){
        let one = document.getElementById("numOne");
        let two = document.getElementById("numTwo");
        let num = Math.floor(Math.random()* Math.floor(max))
        if(num != 0){
            nums.push(num) 
        }else{
            return twoNums;
        }
        one.innerHTML = nums[0];
       two.innerHTML = nums[1];
    }
}
setInterval(twoNums,3000)





