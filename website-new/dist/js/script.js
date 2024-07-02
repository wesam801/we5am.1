

var fixedNumber = document.getElementById('input').value;


document.getElementById("plural").addEventListener('click', function(){
    document.getElementById('input').value += '+';
})
document.getElementById("Subtract").addEventListener('click', function(){
    document.getElementById('input').value += '-';
})
document.getElementById("divide").addEventListener('click', function(){
    document.getElementById('input').value += '/';
})
document.getElementById("hit").addEventListener('click', function(){
    document.getElementById('input').value += '*';
})
document.getElementById("one").addEventListener('click', function(){
    document.getElementById('input').value += '1';
})
document.getElementById("two").addEventListener('click', function(){
    document.getElementById('input').value += '2';
})
document.getElementById("three").addEventListener('click', function(){
    document.getElementById('input').value += '3';
})
document.getElementById("four").addEventListener('click', function(){
    document.getElementById('input').value += '4';
})
document.getElementById("five").addEventListener('click', function(){
    document.getElementById('input').value += '5';
})
document.getElementById("six").addEventListener('click', function(){
    document.getElementById('input').value += '6';
})
document.getElementById("seven").addEventListener('click', function(){
    document.getElementById('input').value += '7';
})
document.getElementById("eight").addEventListener('click', function(){
    document.getElementById('input').value += '8';
})
document.getElementById("nine").addEventListener('click', function(){
    document.getElementById('input').value += '9';
})
document.getElementById("zero").addEventListener('click', function(){
    document.getElementById('input').value += '0';
})
document.getElementById("decimal").addEventListener('click', function(){
    document.getElementById('input').value += '.';
    Array.p
})
document.getElementById("delete").addEventListener('click', function(){
    document.getElementById('text').innerHTML = '';
    document.getElementById('input').value = '';
})

document.getElementById("equality").addEventListener('click', function(){
    document.getElementById('text').innerHTML = eval(document.getElementById('input').value);
    document.getElementById('input').value

})
