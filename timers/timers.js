//countDown
function countDown(num){
   let time= setInterval(function(){
        num--;
        if(num <= 0){
            clearInterval(time);
            console.log("DONE") 
        }
        else{
            console.log(num)
            
        }
   }, 1000)
}


//randomGame
// function randomGame(){
//    let num;
//    let attempts = 0
//    let timer = setInterval(function(){
//     num = Math.random();
//     attempts++
//     if(num > .75){
//        clearInterval(timer)
//        console.log("It took " + attempts +" number of attempts")
//    }
// },1000)
// }
