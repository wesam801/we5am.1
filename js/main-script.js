document.getElementById('submitBtn').addEventListener('click', function(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var tol = document.getElementById('tol').value;
    var gm = document.getElementById('gm').value;
    var LengthSquare = tol * tol 
    var Bloc = gm / LengthSquare
    document.getElementById('text-name').innerHTML = `الاسم : ${name}`;
    document.getElementById('text-age').innerHTML = `العمر : ${age}`;
    document.getElementById('text-tol').innerHTML = `الطول : ${tol} متر  `;
    document.getElementById('text-gm').innerHTML = `الوزن : ${gm}`;
    document.getElementById('bloc').innerHTML = ` النسبة : ${Bloc}`;
    var bmiC = `نحيف`
    if (Bloc < 18) {
        bmiC = `نحافة`
    }else if (Bloc >= 18 && Bloc <= 24.9) {
        bmiC = `وزن مثالي`
    }else if (Bloc >= 25 && Bloc <= 29.9) {
        bmiC = `وزن زائد`
    }else if (Bloc >= 30 && Bloc <= 34.9) {
        bmiC = `سمنة درجة أولى`
    }else if (Bloc >= 35 && Bloc <= 39.9) {
        bmiC = `سمنة درجة ثانية`
    }else if (Bloc > 40) {
        bmiC = `سمنة خطيرة`
    }
    document.getElementById('result').innerHTML = `${bmiC}`;
})
