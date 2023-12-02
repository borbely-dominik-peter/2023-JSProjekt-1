class char {
    constructor(HP, ATK, DEF, MANA, Name){
        this.HP = HP;
        this.ATK = ATK;
        this.DEF = DEF;
        this.MANA = MANA;
        this.Name = Name;
    }
    
}

let S1E = new char(200, 50, 20, 20, "testENEMY1");
let S1P = new char(500, 80, 10, 30, "test");

const EMAXHP = S1E.HP;
const EMAXDEF = S1E.DEF;
const PMAXDEF = S1P.DEF;
const Choices = [1,2,3];
/*let PNAME = "test";
let PHP = 500;
let PATK = 80;
let PDEF = 10;
let PMANA = 30;
let ENAME = "EVILTM";
let EHP = 200;
let EATK = 50;
let EDEF = 20;
let EMANA = 20;
*/
let ETurn = 0;
let PTurn = 0;
let PMAction;


function menu(PNAME, PHP, PATK, PDEF, PMANA,ENAME, EHP, EATK, EDEF, EMANA) {
    console.log(`You are ${PNAME}`);
    console.log(`Your hp = ${PHP}`);
    console.log(`Your Atk = ${PATK}`);
    console.log(`Your Def = ${PDEF}`);
    console.log(`Your Mana = ${PMANA}`);
    console.log(' ');
    console.log(`Enemy is ${ENAME}`);
    console.log(`Enemy hp = ${EHP}`);
    console.log(`Enemy Atk = ${EATK}`);
    console.log(`Enemy Def = ${EDEF}`);
    console.log(`Enemy Mana = ${EMANA}`);
}

function help(){
    breaker = false;
    while (breaker === false){
        let PMAction = prompt("Choose the item you want help on [1-Slice,2-Shield,3-Restore]")
        while (!Choices.includes(Number(PMAction))){
            alert("input check failed, please try again")
            let PMAction = prompt("Choose the item you want help on [1-Slice,2-Shield,3-Restore]");
        }
        if (PMAction == '1') {
            console.log("Slice reduces the enemy hp by 50% of it's current HP, it costs 15 mana");
            let ContinuationChoice = prompt("do you want more help?[Y/N]");
            if (ContinuationChoice == 'n' || ContinuationChoice == "N") {
                breaker = true
                break;
            }
        }
        if (PMAction == '2') {
            console.log("Shield doubles your defense for 1 turn, it costs 10 mana");
            let ContinuationChoice = prompt("do you want more help?[Y/N]");
            if (ContinuationChoice == 'n' || ContinuationChoice == "N") {
                breaker = true
                break;
            }
        }
        if (PMAction == '3') {
            console.log("Restore heals you for 50 HP, it costs 7 mana");
            let ContinuationChoice = prompt("do you want more help?[Y/N]");
            if (ContinuationChoice == 'n' || ContinuationChoice == "N") {
                breaker = true
                break;
            }
        }
    }
}


function AI(EHP, EATK, EDEF, EMANA, EMAXHP) {
    EChoice = -1 // 1 - atk, 2 - slice, 3 - shield, 4 - restore
    let randnum = Math.floor(Math.random() * 100) + 1;
    alert(`${typeof(randnum)} ${randnum}`)
    if (EMANA < 7 && randnum < 50){
        alert("AI CHOSE 1");
        EChoice = 1;
        return EChoice
    }
    else if(EMANA >= 15 && randnum >= 70){
        alert("AI CHOSE 2");
        EChoice = 2;
        return EChoice;
    }
    else if(EMANA >= 10 && randnum >= 50){
        alert("AI CHOSE 3");
        EChoice = 3;
        return EChoice;
    }
    else if(EMANA >= 7 && randnum >= 50 && EHP <= EMAXHP / 2){
        alert("AI CHOSE 4");
        EChoice = 4;
        return EChoice;
    }
    alert("AI DEFAULTED");
    return 1;
}

function battle(PNAME, PHP, PATK, PDEF, PMANA, ENAME, EHP, EATK, EDEF, EMANA){

    // main loop
    while (PHP > 0 || EHP > 0){
        // menu
        menu(PNAME, PHP, PATK, PDEF, PMANA,ENAME, EHP, EATK, EDEF, EMANA);
        PMAction = prompt("Choose your action [1-atk, 2-Magic move,3-help]");
        while (!Choices.includes(Number(PMAction))){
            alert("input check failed, please try again")
            PMAction = Number(prompt("Choose your action [1-atk, 2-Magic move,3-help]"))
        }
        if (PMAction == 1){
            console.log(`You dealt ${PATK - EDEF} damage to ${ENAME}`);
            EHP -= (PATK - EDEF);
        }
        else if(PMAction == '2'){
            let PSAction = prompt("Choose your magical move[1-Slice, 2-Shield, 3-Restore]")
            while (!Choices.includes(Number(PSAction))) {
                alert("input check failed, please try again")
                PSAction = prompt("Choose your magical move[1-Slice, 2-Shield, 3-Restore]")
            }
            if (PSAction == '1' && PMANA >= 15) {
                console.log(`Slice halved enemy HP, reducing it to ${EHP / 2}`);
                EHP = EHP / 2;
                PMANA -= 15;
            }
            else if (PSAction == '2' && PMANA >= 10) {
                console.log(`Shield doubles your def for 1 turn, setting it to ${PDEF * 2}`)
                PDEF = PDEF * 2;
                PMANA -= 10;
                PTurn = 1;
            }
            else if(PSAction == '3' && PMANA >= 7) {
                console.log(`Restore heals for 50 hp, making your hp ${PHP + 50}`);
                PHP += 50;
                PMANA -= 7;
            }else{
                alert("insufficient mana");
            }
        }
        else if(PMAction == "3"){
            help();
        }
        // resets

        if(ETurn == 1){
            EDEF = EMAXDEF;
            ETurn = 0;
        }
        

        // enemy action
            let ENChoice = AI(EHP, EATK, EDEF, EMANA, EMAXHP);
            if (ENChoice == 1) {
                console.log(`Enemy dealt ${EATK - PDEF} damage to ${PNAME}`);
                PHP -= (EATK - PDEF);
            }
            else if(ENChoice == 2){
                console.log(`Slice halved your HP, reducing it to ${PHP / 2}`);
                PHP = PHP / 2;
                EMANA -= 15;
            }else if(ENChoice == 3){
                console.log(`Shield doubles enemy def for 1 turn, setting it to ${EDEF * 2}`)
                EDEF = EDEF * 2;
                EMANA -= 10;
                ETurn = 1;
            }else if(ENChoice == 4){
                console.log(`Restore heals for 50 hp, making enemy hp ${EHP + 50}`);
                EHP += 50;
                EMANA -= 7;
            }
        // mana regen
        EMANA += 2;
        PMANA += 2;

        // death check
        if (EHP <= 0){
            return "P"
        }else if(PHP <= 0){
            return "E"
        }
    }

    // resets II
    if(PTurn == 1){
        PDEF = PDEF / 2;
        PTurn = 0;
    }
}

let winner = battle(S1P.Name, S1P.HP, S1P.ATK, S1P.DEF, S1P.MANA, S1E.Name, S1E.HP, S1E.ATK, S1E.DEF, S1E.MANA);

// Win check
if (winner == "P"){
    alert("You win");
}else if(winner == "E"){
    alert("EVIL WINS");
}else{
    alert("error");
}
    
