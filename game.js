// Class for easier management of numbers

class char {
    constructor(HP, ATK, DEF, MANA, Name){
        this.HP = HP;
        this.ATK = ATK;
        this.DEF = DEF;
        this.MANA = MANA;
        this.Name = Name;
    }
    
}

function Story() {
    alert("Welcome to ProgramWar!\nAfter choosing a character, you will face 3 enemies, which are related to your chosen character\nGood luck!");
    let choice = Number(prompt("Choose your character[1-Brendan Eich,2-Dennis M. Ritchie,3-Linus Torvalds,4-Nits László]"));
    if(choice === 1){
        return 1;
    }else if(choice === 2){
        return 2;
    }else if(choice === 3){
        return 3;
    }else if(choice === 4){
        return 4
    }else{
        alert("You failed to choose a character, the game defaults to Nits");
        return 4;
    }
}

/*let S1E = new char(200, 50, 20, 20, "testENEMY1");
let S1P = new char(500, 80, 10, 30, "test");*/

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


// alerts character and enemy data
function menu(PNAME, PHP, PATK, PDEF, PMANA,ENAME, EHP, EATK, EDEF, EMANA) {
    alert(`You are ${PNAME}\n
    Your hp = ${PHP}
    Your Atk = ${PATK}
    Your Def = ${PDEF}
    Your Mana = ${PMANA}\n
    Enemy is ${ENAME}
    Enemy hp = ${EHP}
    Enemy Atk = ${EATK}
    Enemy Def = ${EDEF}
    Enemy Mana = ${EMANA}`
    );
}

// alerts help data if player asks for it
function help(){
    breaker = false;
    while (breaker === false){
        let PMAction = prompt("Choose the item you want help on [1-Slice,2-Shield,3-Restore]")
        while (!Choices.includes(Number(PMAction))){
            alert("input check failed, please try again")
            let PMAction = prompt("Choose the item you want help on [1-Slice,2-Shield,3-Restore]");
        }
        if (PMAction == '1') {
            alert("Slice reduces the enemy hp by 50% of it's current HP, it costs 15 mana");
            let ContinuationChoice = prompt("do you want more help?[Y/N]");
            if (ContinuationChoice == 'n' || ContinuationChoice == "N") {
                breaker = true
                break;
            }
        }
        if (PMAction == '2') {
            alert("Shield doubles your defense for 1 turn, it costs 10 mana");
            let ContinuationChoice = prompt("do you want more help?[Y/N]");
            if (ContinuationChoice == 'n' || ContinuationChoice == "N") {
                breaker = true
                break;
            }
        }
        if (PMAction == '3') {
            alert("Restore heals you for 50 HP, it costs 7 mana");
            let ContinuationChoice = prompt("do you want more help?[Y/N]");
            if (ContinuationChoice == 'n' || ContinuationChoice == "N") {
                breaker = true
                break;
            }
        }
    }
}

// "AI" for deciding enemy's move
function AI(EHP, EATK, EDEF, EMANA, EMAXHP) {
    EChoice = -1 // 1 - atk, 2 - slice, 3 - shield, 4 - restore
    let randnum = Math.floor(Math.random() * 100) + 1;
    if (EMANA < 7 && randnum < 50){
        EChoice = 1;
        return EChoice
    }
    else if(EMANA >= 15 && randnum >= 70){
        EChoice = 2;
        return EChoice;
    }
    else if(EMANA >= 10 && randnum >= 50){
        EChoice = 3;
        return EChoice;
    }
    else if(EMANA >= 7 && randnum >= 50 && EHP <= EMAXHP / 2){
        EChoice = 4;
        return EChoice;
    }
    return 1;
}

// checks who, if anyone has died
function death(EHP, PHP) {
    if (EHP <= 0){
        return "P" //Player wins
    }else if(PHP <= 0){
        return "E" // Enemy wins
    }else{
        return "C" // No winner yet
    }
}

function battle(PNAME, PHP, PATK, PDEF, PMANA, ENAME, EHP, EATK, EDEF, EMANA){

    // main loop
    while (PHP > 0 || EHP > 0){
        menu(PNAME, PHP, PATK, PDEF, PMANA,ENAME, EHP, EATK, EDEF, EMANA);

        PMAction = prompt("Choose your action [1-atk, 2-Magic move,3-help]");
        // input check
        while (!Choices.includes(Number(PMAction))){
            alert("input check failed, please try again")
            PMAction = Number(prompt("Choose your action [1-atk, 2-Magic move,3-help]"))
        }
        // actions based on choice
        if (PMAction == 1){
            alert(`You dealt ${PATK - EDEF} damage to ${ENAME}`);
            EHP -= (PATK - EDEF);
        }
        else if(PMAction == '2'){
            let PSAction = prompt("Choose your magical move[1-Slice, 2-Shield, 3-Restore]")
            while (!Choices.includes(Number(PSAction))) {
                alert("input check failed, please try again")
                PSAction = prompt("Choose your magical move[1-Slice, 2-Shield, 3-Restore]")
            }
            if (PSAction == '1' && PMANA >= 15) {
                alert(`Slice halved enemy HP, reducing it to ${EHP / 2}`);
                EHP = EHP / 2;
                PMANA -= 15;
            }
            else if (PSAction == '2' && PMANA >= 10) {
                alert(`Shield doubles your def for 1 turn, setting it to ${PDEF * 2}`)
                PDEF = PDEF * 2;
                PMANA -= 10;
                PTurn = 1;
            }
            else if(PSAction == '3' && PMANA >= 7) {
                alert(`Restore heals for 50 hp, making your hp ${PHP + 50}`);
                PHP += 50;
                PMANA -= 7;
            }else{
                alert("insufficient mana");
            }
        }
        else if(PMAction == "3"){
            help();
        }
        // resetting defense values to default

        if(ETurn == 1){
            EDEF = EMAXDEF;
            ETurn = 0;
        }
        

        // enemy action
        // death check I
        if (death(EHP, PHP) == "P") {
            return "P"
        }else if(death(EHP, PHP) == "E"){
            return "E"
        }else{
            // battle continues, do nothing
        }
        let ENChoice = AI(EHP, EATK, EDEF, EMANA, EMAXHP);
        if (ENChoice == 1) {
            alert(`Enemy dealt ${EATK - PDEF} damage to ${PNAME}`);
            PHP -= (EATK - PDEF);
        }
        else if(ENChoice == 2){
            alert(`Slice halved your HP, reducing it to ${PHP / 2}`);
            PHP = PHP / 2;
            EMANA -= 15;
        }else if(ENChoice == 3){
            alert(`Shield doubles enemy def for 1 turn, setting it to ${EDEF * 2}`)
            EDEF = EDEF * 2;
            EMANA -= 10;
            ETurn = 1;
        }else if(ENChoice == 4){
            alert(`Restore heals for 50 hp, making enemy hp ${EHP + 50}`);
            EHP += 50;
            EMANA -= 7;
        }
        // mana regen
        EMANA += 2;
        PMANA += 2;

        // death check II
        if (death(EHP, PHP) == "P") {
            return "P"
        }else if(death(EHP, PHP) == "E"){
            return "E"
        }else{
            // battle continues, do nothing
        }
    }

    // resets II
    if(PTurn == 1){
        PDEF = PDEF / 2;
        PTurn = 0;
    }
}

// END OF FUNCTIONS

let choice = Story();

let S1P;
let S1E;
let S2E;
let S3E;

// character and enemy creation
if (choice === 1) {
    S1P = new char(500, 50, 30, 20, "Brendan Eich");
    S1E = new char(250, 35, 15, 22, "Pascal");
    S2E = new char(400, 15, 10, 20, "Mozilla");
    S3E = new char(243, 29, 16, 20, "Don't be evil");
}
else if(choice === 2){
    S1P = new char(600, 40, 25, 20, "Dennis M. Ritchie");
    S1E = new char(250, 35, 15, 22, "Pascal");
    S2E = new char(420, 18, 13, 22, "Microsoft");
    S3E = new char(522, 24, 19, 25, "Magic number");
}
else if(choice === 3){
    S1P = new char(500, 50, 30, 20, "Linus Torvalds");
    S1E = new char(250, 35, 15, 22, "Nvidia");
    S2E = new char(400, 15, 10, 20, "Bitbucket");
    S3E = new char(243, 29, 16, 20, "SCO");
}
else if(choice === 4){
    S1P = new char(500000, 5000, 3000, 20, "Nits László");
    S1E = new char(650, 55, 25, 100, "Python");
    S2E = new char(1200, 35, 20, 150, "Salátakód");
    S3E = new char(500, 12, 24, 100, "JS");
}else{
    alert(error);
}
const EMAXHP = S1E.HP;
let EMAXDEF = S1E.DEF;
let PMAXDEF = S1P.DEF;
// running the battle to decide the winner
let winner = battle(S1P.Name, S1P.HP, S1P.ATK, S1P.DEF, S1P.MANA, S1E.Name, S1E.HP, S1E.ATK, S1E.DEF, S1E.MANA);

// Win check
if (winner == "P"){
    alert("You win");
}else if(winner == "E"){
    alert("EVIL WINS");
}else{
    alert("error");
}

// setting the new enemy's max def value
EMAXDEF = S2E.DEF;

winner2 = battle(S1P.Name, S1P.HP, S1P.ATK, S1P.DEF, S1P.MANA, S2E.Name, S2E.HP, S2E.ATK, S2E.DEF, S2E.MANA);

if (winner2 == "P"){
    alert("You win");
}else if(winner2 == "E"){
    alert("EVIL WINS");
}else{
    alert("error");
}

// setting the new enemy's max def value
EMAXDEF = S3E.DEF;

winner3 = battle(S1P.Name, S1P.HP, S1P.ATK, S1P.DEF, S1P.MANA, S3E.Name, S3E.HP, S3E.ATK, S3E.DEF, S3E.MANA);

if (winner3 == "P"){
    alert("You win");
}else if(winner3 == "E"){
    alert("EVIL WINS");
}else{
    alert("error");
}

function Reset() { // oldal újratöltése
    location.reload();
}
