class char {
    constructor(HP, ATK, DEF, MANA, Name){
        this.HP = HP;
        this.ATK = ATK;
        this.DEF = DEF;
        this.MANA = MANA;
        this.Name = Name;
    }

}

function menu(PHP, PATK, PDEF, PMANA, EHP, EATK, EDEF, EMANA) {
    console.log(`Your hp = ${PHP}`);
    console.log(`Your Atk = ${PATK}`);
    console.log(`Your Def = ${PDEF}`);
    console.log(`Your Mana = ${PMANA}`);
    console.log(`Enemy hp = ${EHP}`);
    console.log(``);
    console.log(``);
    console.log(``);
}

function battle(PHP, PATK, PDEF, PMANA, EHP, EATK, EDEF, EMANA)

