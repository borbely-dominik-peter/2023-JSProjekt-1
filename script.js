function expandOverlay(clickedCard) {
    var person = currPerson(clickedCard);
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "10";
   
    
    document.body.appendChild(overlay);

    var cardRect = getCornersOfOverlay();

    var contentContainer = document.createElement("div");
    contentContainer.id = "content";
    contentContainer.style.width = 0;
    contentContainer.style.height = 0;
    contentContainer.style.transition = "All ease 1s";
    contentContainer.style.position = "fixed";
    contentContainer.style.left = "370px";
    contentContainer.style.top = "65px"
    switch(person){
        case "Dennis M. Ritchie":  
            contentContainer.style.left = "1550px";
            break;
        case "Nits László": 
            contentContainer.style.top =  "840px";
            contentContainer.style.left = "1550px";
            break;
        case "Linus Torvalds":
            contentContainer.style.top =  "840px";
            break;
    }
    
    contentContainer.style.zIndex = "11";
    contentContainer.style.overflowY = "hidden";
    contentContainer.style.backgroundColor = "#1f1f1f";
    
    document.body.appendChild(contentContainer);
    
    var duplicatedContent = document.createElement("div");
    duplicatedContent.className = "infoCards";
    duplicatedContent.style.position = "relative";
    duplicatedContent.style.cursor = "auto";

    var clonedImage = clickedCard.querySelector(".img img").cloneNode(true);
    var clonedDivText = clickedCard.querySelector(".container.programmerTitle").cloneNode(true);
    
    
    var divImage = document.createElement("div");

    divImage.className = "img";

    clonedDivText.className = "container programmerTitle";

    divImage.appendChild(clonedImage);

    duplicatedContent.appendChild(divImage);
    duplicatedContent.appendChild(clonedDivText);

    moveCardValues(clickedCard, duplicatedContent);
    
    contentContainer.appendChild(duplicatedContent);
    addContent(person, contentContainer);
    
    setTimeout(function() {
        contentContainer.style.width = 1178 + "px";
        contentContainer.style.height = 777 + "px";
        contentContainer.style.fontSize = "20px";
        contentContainer.style.top = cardRect[0] + "px";
        contentContainer.style.left = cardRect[3] + "px";
        overlay.onclick = function (event) {
            if (event.target.id === "overlay") {
                closeOverlay(overlay);
            }
        };
        
      }, 100);
}

function closeOverlay(overlay) {
    document.body.removeChild(overlay);
    var contentContainer = document.getElementById("content");
    contentContainer.style.width = 0;
    contentContainer.style.height = 0;
    setTimeout(function() {
        document.body.removeChild(contentContainer);
      }, 1000);
    
}


function getCornersOfOverlay(){
    var topRightCard = document.getElementById("top-right");
    var bottomLeftCard = document.getElementById("bottom-left");
    var topRightCardRect = topRightCard.getBoundingClientRect();
    var bottomLeftCardRect = bottomLeftCard.getBoundingClientRect();
    var corners = [];
    corners.push(topRightCardRect.top);
    corners.push(topRightCardRect.right);
    corners.push(bottomLeftCardRect.bottom);
    corners.push(bottomLeftCardRect.left);
    return corners;
}
function moveCardValues(clickedCard, duplicatedContent){
    switch (clickedCard.id) {
        case "top-left":
            duplicatedContent.style.float = "left";
            break;
        case "top-right":
            duplicatedContent.style.float = "right";
            break;
        case "bottom-left":
            duplicatedContent.style.float = "left";
            duplicatedContent.style.top = 403 + "px"
            break;
        case "bottom-right":
            duplicatedContent.style.float = "right";
            duplicatedContent.style.top = 403 + "px"
            break;
    }
}
function addContent(person, contentContainer){
    var allText = []
    switch (person) {
        case "Brendan Eich":      
            var content = document.createElement("div");
            contentContainer.appendChild(content);
            content.className = "content";
            var header = document.createElement("h1");
            header.innerHTML = person;
            content.appendChild(header);
            allText.push("Brendan Eich, az amerikai programozó, rendkívül jelentős szerepet játszott a számítástechnika világában. Leginkább a JavaScript programnyelv atyjaként ismert, melyet 1995-ben hozott létre, amikor még a Netscape munkatársa volt. Egykori Silicon Graphics tapasztalatával és elkötelezettségével Eich a Mozilla projekt és a Mozilla Corporation társalapítója lett, ő volt az alapítvány szoftverarchitektúráért felelős vezetője.");
            allText.push("Az informatikai szektorban betöltött szerepe tovább bővült, amikor 2016-ban létrehozta a Brave Software nevű startupot, ahol vezérigazgatóként irányította a vállalkozást. Eich évtizedek óta kulcsszereplője a webfejlesztés és böngészőtechnológiák területének, és elhivatottan járult hozzá az internetes technológiák fejlődéséhez és elterjedéséhez.");
            allText.push("Eich karrierje kivételesen sokszínű, hiszen a Silicon Graphics mellett a Netscape-nél is dolgozott. A 2014-es évben, a Mozilla Alapítványban eltöltött időszak után, elindította a Brave Software-t, ahol a böngészőtechnológia és online adatvédelem terén mutatott úttörő munkája emelte ki. Eich kiemelkedő szakmai hozzájárulása mellett elkötelezett a nyílt forráskódú projektek iránt, elősegítve az internetes tartalom és alkalmazások fejlődését.");
            for (var i = 0; i < allText.length; i++) {
                var paragraph = document.createElement("div");
                paragraph.innerHTML = allText[i];
                if (i > 1){
                    paragraph.classList = "divFormat";
                    contentContainer.appendChild(paragraph)
                }
                else{
                    content.appendChild(paragraph);
                }
                
                content.appendChild(document.createElement("br"));
            }
            break;
        case "Dennis M. Ritchie":
            var content = document.createElement("div");
            contentContainer.appendChild(content);
            content.className = "content";
            var header = document.createElement("h1");
            header.innerHTML = person;
            content.appendChild(header);
            allText.push("Dennis MacAlistair Ritchie, az 1941-ben Bronxville-ben született amerikai számítógéptudós, rendkívüli hozzájárulást tett a számítástechnika fejlődéséhez. Legjelentősebb teljesítményei közé tartozik a C programozási nyelv kifejlesztése és a Unix operációs rendszer fejlesztésében játszott kulcsszerep.");
            allText.push("Fizika és alkalmazott matematika tanulmányait a Harvard Egyetemen végezte el, majd 1967-ben csatlakozott a Bell Labs Computing Sciences Research Centerhez. Végül a Lucent Technologies System Software Research Department vezetőjévé vált, és 2007-ben vonult nyugdíjba. Ritchie öröksége a szoftvertervezés és programozás terén mély nyomokat hagyott maga után, elismerve azt a technológiai forradalmat, amelyben részt vett.");
            allText.push("Ritchie, aki a számítógépészeti világ egyik ikonikus alakja lett, nem csupán a C nyelvvel és a Unix rendszerrel hagyta örök emlékét, hanem a szoftvertervezés és az operációs rendszer-architektúrák terén is. Harvardi tanulmányai után, 1967-ben csatlakozott a Bell Labs-hez, ahol pályafutása során számos innovációt vezetett be. Az általa kifejlesztett C nyelv széles körben elterjedt és az informatika alapjává vált, míg a Unix rendszer a megbecsült számítógépes operációs rendszerek egyik alapkövévé vált. Ritchie neve örökre összefonódik a modern számítógépészettel és a programozással.");
            for (var i = 0; i < allText.length; i++) {
                var paragraph = document.createElement("div");
                paragraph.innerHTML = allText[i];
                if (i > 1){
                    paragraph.classList = "divFormat";
                    contentContainer.appendChild(paragraph)
                }
                else{
                    content.appendChild(paragraph);
                }
                
                content.appendChild(document.createElement("br"));
            }
            break;
        case "Linus Torvalds":
            var paddingList = [[60, 0, 5, 20], [175, 0, 5, 20], [300, 0, 5, 350]]
            var header = document.createElement("h1");
            header.innerHTML = person;
            header.style.position = "absolute";
            header.style.paddingLeft = 20 + "px"; 
            header.style.marginRight = "a";
            var content = document.createElement("div");
            contentContainer.appendChild(header);
            allText.push("Linus Torvalds, a finn számítógéptudós, 1969. december 28-án született Helsinkiben. Leghíresebb a Linux operációs rendszer megalkotásáról, amit 1991-ben indított el, és amely a világ legnépszerűbb nyílt forráskódú operációs rendszere lett. Torvalds a Helsinkin Egyetemen tanult, ahol informatikai mérnöki diplomát szerzett.");
            allText.push("A Linux projektet a tanulmányai során kezdte, és rövid idő alatt globális közösséggé nőtte ki magát. Az alázat és az együttműködés elkötelezett híveként Torvalds a Linux fejlesztése során szilárd alapot teremtett a nyílt forráskódú mozgalomnak.");
            allText.push("Torvalds, az informatikai világban korszakalkotó alak, nem csupán a Linux operációs rendszer atyja, hanem a nyílt forráskódú közösségi fejlesztés elkötelezett támogatója is. Az 1991-ben indított Linux gyorsan népszerűvé vált, és globális közösséget hozott létre. Linus, aki a Helsinkin Egyetemen informatikai mérnöki diplomát szerzett, az alázat és az együttműködés elveit vallva irányította a projektet. A Linux nem csupán egy operációs rendszer, hanem a szabad szoftverek és a nyílt forráskód szellemének szimbóluma, melyet Torvalds elszántsága és vezetése örökre beírt a számítástechnika történetébe.");
            for (var i = 0; i < allText.length; i++) {
                var paragraph = document.createElement("div");
                paragraph.innerHTML = allText[i];
                paragraph = setProperties(paragraph, paddingList[i]);
                contentContainer.appendChild(paragraph)
            }
            contentContainer.appendChild(content);
            content.className = "content";
            
            break;
        case "Nits László":
            var paddingList = [[60, 0, 5, 20], [150, 0, 5, 20], [270, 253, 5, 20]]
            var header = document.createElement("h1");
            header.innerHTML = person;
            header.style.position = "absolute";
            header.style.paddingLeft = 20 + "px"; 
            header.style.marginRight = "a";
            var content = document.createElement("div");
            contentContainer.appendChild(header);
            allText.push("Nits László a fő védelmezője a tiszta kód elvének, közismerten a legtehetségesebb objektum orientált programozó. Elterjedt tény róla, hogy Chuck Norris leglelkesebb hívei közé tartozik.");
            allText.push("Programozási remekei tartozik az LNKO számító program (Python és C# nyelven is), az osztó harmonikus szám kereső program és hasonló matematikai problémákat megoldó programok. Tanítványai közül rengetegen értek el sikereket, ami kiváló tanítási képességét támasztja alá.");
            allText.push("Nits László jellegzetes torokköszörülését már mérföldekről meghallani, frekvenciája és hangszíne nagyon egyedülálló. Még számos más különleges tulajdonsága van, külsőleg és belsőleg is, például páratlan és elegáns öltözködési módja, hihetetlen viccei, leírhatatlan tanítási képességei.");
            for (var i = 0; i < allText.length; i++) {
                var paragraph = document.createElement("div");
                paragraph.innerHTML = allText[i];
                for (var i = 0; i < allText.length; i++) {
                    var paragraph = document.createElement("div");
                    paragraph.innerHTML = allText[i];
                    paragraph = setProperties(paragraph, paddingList[i]);
                    contentContainer.appendChild(paragraph)
                }
            }
            contentContainer.appendChild(content);
            content.className = "content";
            break;
    }       


}

function setProperties(paragraph, paddingValues){
    paragraph.classList = "divFormat";
    paragraph.style.position = "absolute";
    paragraph.style.paddingTop = paddingValues[0] + "px";
    paragraph.style.paddingRight = paddingValues[1] + "px";
    paragraph.style.paddingBottom = paddingValues[2] + "px";
    paragraph.style.paddingLeft = paddingValues[3] + "px";
    return paragraph;
}

function currPerson(clickedCard){
    var person;
    switch (clickedCard.id) {
        case "top-left":
            person = "Brendan Eich";
            break;
        case "top-right":
            person = "Dennis M. Ritchie";
            break;
        case "bottom-left":
            person = "Linus Torvalds";
            break;
        case "bottom-right":
            person = "Nits László";
            break;
    }
    return person;
}

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

    }
    if (charCount == 0) {
        clean = false;
        msg = "üres";
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
    let R1num = 1;
    let target1 = document.querySelector("#Answer1");

    // 2-kérdéshez változók
    let Q2btns = document.querySelectorAll("input[name='Case']");
    let R2num = 1;
    let target2 = document.querySelector("#Answer2");

    // 3-kérdéshez változók
    let Q3btns = document.querySelectorAll("input[name='Clean']");
    let R3num = 1;
    let target3 = document.querySelector("#Answer3");

    Q1btns.forEach(element => {
        if (element.checked) {
            if (R1num == 1) {
                target1.innerHTML = "Pascal a Nits kedvenc nyelve, +500 pont";
                points += 500;
            }else if(R1num == 2){
                target1.innerHTML = "A typescriptet is nagyon szereti, de a pascal a kedvence +400 pont";
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
        }    
        R2num++;
        });

    Q3btns.forEach(element => {
        if (element.checked) {
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
    });
    document.querySelector("#sum").innerHTML = points + " pontot kaptál";
}
