const twoNums = ()=>{
    let max = 99;
    let nums = [];
    for(let i = 0; i < 2; i++){
        let num = Math.floor(Math.random()* Math.floor(max))
        if(num != 0){
            nums.push(num) 
        }else{
            return tenOrLessNumbers()
        }
        document.getElementById('numOne').innerHTML = nums[0];
        document.getElementById("numTwo").innerHTML = nums[1];

    }
}
setInterval(twoNums,3000)





