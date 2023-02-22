alert("Игра угадай число");
function letGuessNum(){
    var number = prompt("Введи что то" );
    console.log(number);
    var guessNum = 5;
if (guessNum > number){
    alert("Число должнобыть больше");
    return letGuessNum();
} else if (guessNum < number){
    alert('Должно быть меньше');
    return letGuessNum();
} else {
    alert("вы угадали")
} 
}
letGuessNum();