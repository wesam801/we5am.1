


document.getElementById('submitBtn').addEventListener('click', function(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var tol = document.getElementById('tol').value;
    var gm = document.getElementById('gm').value;
    var textName = document.getElementById('text-name').value;
    var textAge = document.getElementById('text-age').value;
    var textTol = document.getElementById('text-tol').value;
    var textGm = document.getElementById('text-gm').value;
    var LengthSquare = tol * tol 
    var Bloc = gm / LengthSquare
    if (Bloc < 18) {
        document.getElementById('text-name').innerHTML = `${name}`;
        document.getElementById('text-age').innerHTML = `${age}`;
        document.getElementById('text-tol').innerHTML = `${tol}`;
        document.getElementById('text-gm').innerHTML = `${gm}`;
        document.getElementById('bloc').innerHTML = `${Bloc}`;
        document.getElementById('result').innerHTML = `نحافة`;
    }else if (Bloc >= 18 && Bloc <= 24.9) {
        document.getElementById('text-name').innerHTML = `${name}`;
        document.getElementById('text-age').innerHTML = `${age}`;
        document.getElementById('text-tol').innerHTML = `${tol}`;
        document.getElementById('text-gm').innerHTML = `${gm}`;
        document.getElementById('bloc').innerHTML = `${Bloc}`;
        document.getElementById('result').innerHTML = `وزن مثالي`;
    }else if (Bloc >= 25 && Bloc <= 29.9) {
        document.getElementById('text-name').innerHTML = `${name}`;
        document.getElementById('text-age').innerHTML = `${age}`;
        document.getElementById('text-tol').innerHTML = `${tol}`;
        document.getElementById('text-gm').innerHTML = `${gm}`;
        document.getElementById('bloc').innerHTML = `${Bloc}`;
        document.getElementById('result').innerHTML = `وزن زائد`;
    }else if (Bloc >= 30 && Bloc <= 34.9) {
        document.getElementById('text-name').innerHTML = `${name}`;
        document.getElementById('text-age').innerHTML = `${age}`;
        document.getElementById('text-tol').innerHTML = `${tol}`;
        document.getElementById('text-gm').innerHTML = `${gm}`;
        document.getElementById('bloc').innerHTML = `${Bloc}`;
        document.getElementById('result').innerHTML = `سمنة درجة أولى`;
    }else if (Bloc >= 35 && Bloc <= 39.9) {
        document.getElementById('text-name').innerHTML = `${name}`;
        document.getElementById('text-age').innerHTML = `${age}`;
        document.getElementById('text-tol').innerHTML = `${tol}`;
        document.getElementById('text-gm').innerHTML = `${gm}`;
        document.getElementById('bloc').innerHTML = `${Bloc}`;
        document.getElementById('result').innerHTML = `سمنة درجة ثانية`;
    }else if (Bloc > 40) {
        document.getElementById('text-name').innerHTML = `${name}`;
        document.getElementById('text-age').innerHTML = `${age}`;
        document.getElementById('text-tol').innerHTML = `${tol}`;
        document.getElementById('text-gm').innerHTML = `${gm}`;
        document.getElementById('bloc').innerHTML = `${Bloc}`;
        document.getElementById('result').innerHTML = `سمنة خطيرة`;
    }
})