var elForm = document.querySelector('.form')
var elInp = document.querySelector('.inp')
var elTitle = document.querySelector('.title')


var arr = [] 

function fnCheck(){
    arr.push(elInp.value)
    for ( let i = 0; i< arr.length; i++){
        if (arr[i].includes(1,2,3,4,5,6,7,8,9,0)){
            elTitle.textContent = 'True'
        }else {
            elTitle.textContent= 'try again'
        }
        
    } 
}
alert('If you want to use this, follow the instructions!')