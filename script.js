function VarNameCheck() {
    let clean = true;
    let msg = "";
    let charCount = 0;
    let variable = document.querySelector("#VarIn").value;
    let target = document.querySelector("#VarRET");
    
    for(let character of variable){
        charCount++;
        if(character == "-"){
            clean = false;
            msg = "Kötöjel nem szabad a tiszta kód elvekben";
        }
        if (charCount > 50) {
            clean = false;
            msg = "Túl hosszú(50+)";
        }
    }
    if (charCount < 10) {
        clean = false;
        msg = "A változó Nevének kifejezőnek kell lennie(10- hiba)"
    }

    if(clean === false){
        target.innerHTML = msg;
    }else{
        msg = "A változó megfelel Nits László Tiszta kód elveinek";
        target.innerHTML = msg;
    }
}

function FuncCheck() {
    let clean = true;
    let msg = "";
    let charCount = 0;
    let linesCount = 0;
    let lineCharCount = 0;
    let funcContent = document.querySelector("#FuncIn").value;
    let target = document.querySelector("#FuncRET");

    for(let character of funcContent){
        charCount++;
        lineCharCount++;
        if (lineCharCount > 120) {
            clean = false;
            msg = "Egy sor MAXIMUM 120 karakter hosszú lehet(kivéve ha linq, akkor szabad)";
        }
        if (character == ";") {
            linesCount++;
            lineCharCount = 0;
        }
        if (linesCount > 5) {
            clean = false;
            msg = "A függvény csak 5 soros lehet maximum";
        }
        if (charCount == 0) {
            clean = false;
            msg = "üres";
        }
    }
    if (clean === false) {
        target.innerHTML = msg;
    }else{
        target.innerHTML = "A függvény tartalom megfelel Nits László Tiszta Kód elveinek!";
    }
}
document.querySelector("#CleanQuiz").addEventListener("submit", QuizCheck);

function QuizCheck(event){
    event.preventDefault();
    let points = 0

    // 1-kérdéshez változók
    let Q1btns = document.querySelectorAll("input[name='Nyelv']");
    let Q1btn;
    let R1num = 1;
    let target1 = document.querySelector("#Answer1");

    // 2-kérdéshez változók
    let Q2btns = document.querySelectorAll("input[name='Case']");
    let Q2btn;
    let R2num = 1;
    let target2 = document.querySelector("#Answer2");

    // 2-kérdéshez változók
    let Q3btns = document.querySelectorAll("input[name='Clean']");
    let Q3btn;
    let R3num = 1;
    let target3 = document.querySelector("#Answer3");

    Q1btns.forEach(element => {
        if (element.checked) {
            Q1btn = element;
            if (R1num == 1) {
                target1.innerHTML = "Pascal a Nits kedvenc nyelve, +500 pont";
                points += 500;
            }else if(R1num == 2){
                target1.innerHTML = "A typescriptet is nagyon szereti, +400 pont";
                points += 400;
            }else if(R1num == 3){
                target1.innerHTML = "A Javascript az nem az ő kedvence, 0 pont";
            }else if(R1num == 4){
                target1.innerHTML = "A C# jó, de a 8-bites szám az nem jó, +250 pont"
                points += 250
            }else if(R1num == 5){
                target1.innerHTML = "NINCS KÍÍRVA A TÍPUS, FUJ, -2000 pont";
                points -= 2000;
            }
        }
        R1num++;
    });

    Q2btns.forEach(element => {
        if (element.checked) {
            Q2btn = element;
            if (R2num == 1) {
                target2.innerHTML = "NO, A python-ba snake case van, -500 pont";
                points -= 500;
            }else if(R2num == 2){
                target2.innerHTML = "Helyes, +500pont";
                points += 500;
            }else if(R2num == 3){
                target2.innerHTML = "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE, -2000pont";
                points += -2000;
            }
        R2num++;
    }});

    Q3btns.forEach(element => {
        if (element.checked) {
            Q3btn = element;
            if (R3num == 1) {
                target3.innerHTML = "Ez tiszta kód elv, -500 pont";
                points -= 500;
            }else if(R3num == 2){
                target3.innerHTML = "Ez tiszta kód elv, -500 pont";
                points -= 500;
            }else if(R3num == 3){
                target3.innerHTML = "Ez tiszta kód elv, -500 pont";
                points -= 500
            }else if(R3num == 4){
                target3.innerHTML = "Ez tiszta kód elv, -500 pont";
                points -= 500;
            }else if(R3num == 5){
                target3.innerHTML = "Helyes, +9999 pont";
                points += 9999;
            }
        }
        R3num++;
        document.querySelector("#sum").innerHTML = points + "-ot kaptál";
    });
}
