var display = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
var scndOpr = true;
var degree = true;
var index = 0;
var memoryStore = [];
function deg() {
    if (degree) {
        document.getElementById('deg').innerHTML = 'RAD';
        degree = !degree;
    }
    else {
        document.getElementById('deg').innerHTML = 'DEG';
        degree = !degree;
    }
}
function fe() {
    display.value = Number(display.value).toExponential();
}
function memoryFunctions(input) {
    function memDis() {
        document.getElementById('mc').style.pointerEvents = 'none';
        document.getElementById('mc').style.color = 'gray';
        document.getElementById('mr').style.pointerEvents = 'none';
        document.getElementById('mr').style.color = 'gray';
    }
    function memEn() {
        document.getElementById('mc').style.pointerEvents = 'auto';
        document.getElementById('mc').style.color = 'black';
        document.getElementById('mr').style.pointerEvents = 'auto';
        document.getElementById('mr').style.color = 'black';
    }
    if (input == 'MC') {
        memoryStore = [];
        memDis();
        index = 0;
    }
    else if (input == 'MR') {
        index = 0;
        var res_1 = 0;
        memoryStore.forEach(memCal);
        function memCal(value, idex, array) {
            res_1 += value;
        }
        display.value = String(res_1);
    }
    else if (input == 'M+') {
        if (display.value !== '') {
            memoryStore.push(Number(eval(display.value)));
        }
        display.value = '';
        if (memoryStore.length === 1) {
            memEn();
        }
        index = 0;
    }
    else if (input == 'M-') {
        if (display.value !== '') {
            memoryStore.push(-1 * Number(eval(display.value)));
        }
        display.value = '';
        if (memoryStore.length === 1) {
            memEn();
        }
        index = 0;
    }
    else if (input == 'MS') {
        if (memoryStore.length == 0) {
            alert('Memory is empty');
        }
        else {
            display.value = String(memoryStore[index]);
            if (index < memoryStore.length - 1) {
                index++;
            }
            else {
                index = 0;
            }
        }
    }
}
function trigoFunctions(input) {
    if (degree) {
        display.value = String(Number(display.value) * (Math.PI / 180));
    }
    if (input == 'Sin') {
        display.value = String(Math.sin(Number(display.value)));
    }
    else if (input == 'Cos') {
        display.value = String(Math.cos(Number(display.value)));
    }
    else if (input == 'Tan') {
        display.value = String(Math.tan(Number(display.value)));
    }
    else if (input == 'Sin-1') {
        display.value = String(Math.asin(Number(display.value)));
    }
    else if (input == 'Cos-1') {
        display.value = String(Math.acos(Number(display.value)));
    }
    else if (input == 'Tan-1') {
        display.value = String(Math.atan(Number(display.value)));
    }
}
function functions(input) {
    if (input == 'round') {
        display.value = String(Math.round(Number(display.value)));
    }
    else if (input == 'ceil') {
        display.value = String(Math.ceil(Number(display.value)));
    }
    else if (input == 'floor') {
        display.value = String(Math.floor(Number(display.value)));
    }
    else if (input == 'trunc') {
        display.value = String(parseInt(display.value));
    }
}
function scndBtn() {
    if (scndOpr) {
        document.getElementById('scndOp').style.boxShadow = ('inset 5px 5px 8px #00000020, inset -5px -5px 5px #ffffff');
        document.getElementById('xPow').innerHTML = 'x<sup>3</sup>';
        document.getElementById('root').innerHTML = '<sup>3</sup>&radic;x';
        document.getElementById('powX').innerHTML = '2<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log<sub>2</sub>';
        document.getElementById('ln').innerHTML = 'ln<sub>2</sub>';
        document.getElementById('sin').innerHTML = 'Sin<sup>-1</sup>';
        document.getElementById('cos').innerHTML = 'Cos<sup>-1</sup>';
        document.getElementById('tan').innerHTML = 'Tan<sup>-1</sup>';
        scndOpr = !scndOpr;
    }
    else {
        document.getElementById('scndOp').style.boxShadow = 'none';
        document.getElementById('xPow').innerHTML = 'x<sup>2</sup>';
        document.getElementById('root').innerHTML = '<sup>2</sup>&radic;x';
        document.getElementById('powX').innerHTML = '10<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log';
        document.getElementById('ln').innerHTML = 'ln';
        document.getElementById('sin').innerHTML = 'Sin';
        document.getElementById('cos').innerHTML = 'Cos';
        document.getElementById('tan').innerHTML = 'Tan';
        scndOpr = !scndOpr;
    }
}
function pi() {
    if (display.value == '0') {
        display.value = String(Math.PI);
    }
    else {
        display.value = String(Number(display.value) * Math.PI);
    }
}
function e() {
    if (display.value == '0') {
        display.value = String(Math.E);
    }
    else {
        display.value = String(Number(display.value) * Math.E);
    }
}
function backspc() {
    display.value = display.value.substr(0, display.value.length - 1);
}
function pow(x, y) {
    display.value = String(Math.pow(x, y));
}
function divx() {
    display.value = eval(String(1 / Number(display.value)));
}
function abs() {
    display.value = String(Math.abs(Number(display.value)));
}
function exp() {
    display.value = String(Math.exp(Number(display.value)));
}
function root() {
    display.value = String(Math.sqrt(Number(display.value)));
}
function cube() {
    display.value = String(Math.round(Math.pow(Number(display.value), Number(1 / 3))));
}
function fact() {
    var i, num, f;
    f = 1;
    num = display.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    display.value = String(f);
}
function log(input) {
    if (input == 'log') {
        display.value = String(Math.log(Number(display.value)));
    }
    else if (input == 'log2') {
        display.value = String(Math.log(Number(display.value) / Math.log(2)));
    }
    else if (input == 'ln') {
        display.value += '(' + Math.LN10 + ')';
    }
    else if (input == 'ln2') {
        display.value += '(' + Math.LN2 + ')';
    }
}
function pN() {
    display.value = String(Number(display.value) * -1);
}
function chkOpr() {
    if (display.value.charAt(display.value.length - 1) == '+' ||
        display.value.charAt(display.value.length - 1) == '-' ||
        display.value.charAt(display.value.length - 1) == '*' ||
        display.value.charAt(display.value.length - 1) == '/' ||
        display.value.charAt(display.value.length - 1) == '%' ||
        display.value.charAt(display.value.length - 1) == '.') {
        backspc();
        chkOpr();
    }
}
function ans() {
    if (display.value == '+' ||
        display.value == '-' ||
        display.value == '*' ||
        display.value == '/' ||
        display.value == '%' ||
        display.value == '.') {
        display.value = '';
    }
    if (display.value !== '') {
        var res = display.value.split('-(').join('-').split(')-').join('-')
            .split('+(').join('+').split(')+').join('+')
            .split('/(').join('/').split(')/').join('/')
            .split('*(').join('*').split(')*').join('*')
            .split('(').join('*').split(')').join('*');
        if (res.charAt(res.length - 1) == '*' ||
            res.charAt(res.length - 1) == '/' ||
            res.charAt(res.length - 1) == '+' ||
            res.charAt(res.length - 1) == '-' ||
            res.charAt(res.length - 1) == '%' ||
            res.charAt(res.length - 1) == '.') {
            res = res.substr(0, res.length - 1);
        }
        display.value = eval(res);
    }
}
for (var _i = 0, _a = (btn); _i < _a.length; _i++) {
    var item = _a[_i];
    item.addEventListener('click', function (e) {
        var btntxt = e.target;
        var btntext = btntxt.innerText;
        if (btntext == 'DEG' ||
            btntext == 'RAD') {
            deg();
            btntext = '';
        }
        else if (btntext == 'F-E') {
            fe();
            btntext = '';
        }
        else if (btntext == 'MC' ||
            btntext == 'MR' ||
            btntext == 'M+' ||
            btntext == 'M-' ||
            btntext == 'MS') {
            memoryFunctions(btntext);
            btntext = '';
        }
        else if (btntext == 'Sin' ||
            btntext == 'Cos' ||
            btntext == 'Tan' ||
            btntext == 'Sin-1' ||
            btntext == 'Cos-1' ||
            btntext == 'Tan-1') {
            trigoFunctions(btntext);
            btntext = '';
        }
        else if (btntext == 'ceil' ||
            btntext == 'round' ||
            btntext == 'floor' ||
            btntext == 'trunc') {
            functions(btntext);
            btntext = '';
        }
        else if (btntext == '2nd') {
            scndBtn();
            btntext = '';
        }
        else if (btntext == 'x2') {
            pow(display.value, 2);
            btntext = '';
        }
        else if (btntext == 'x3') {
            pow(display.value, 3);
            btntext = '';
        }
        else if (btntext == '2√x') {
            root();
            btntext = '';
        }
        else if (btntext == '3√x') {
            cube();
            btntext = '';
        }
        else if (btntext == 'xy') {
            btntext = '**';
        }
        else if (btntext == '10x') {
            pow(10, display.value);
            btntext = '';
        }
        else if (btntext == '2x') {
            pow(2, display.value);
            btntext = '';
        }
        else if (btntext == 'log' ||
            btntext == 'log2' ||
            btntext == 'ln' ||
            btntext == 'ln2') {
            log(btntext);
            btntext = '';
        }
        else if (btntext == '+/-') {
            pN();
            btntext = '';
        }
        else if (btntext == 'mod') {
            chkOpr();
            btntext = '%';
        }
        else if (btntext == '×') {
            chkOpr();
            btntext = '*';
        }
        else if (btntext == '+' || btntext == '-') {
            chkOpr();
        }
        else if (btntext == '÷') {
            chkOpr();
            btntext = '/';
        }
        else if (btntext == '.') {
            if (display.value.charAt(display.value.length - 1) == '.') {
                btntext = '';
            }
        }
        display.value += btntext;
    });
}
