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
            allText.push("Brendan Eich amerikai programozó, a JavaScript programnyelv megteremtője. Társalapítója a Mozilla projektnek, a Mozilla Alapítványnak és a Mozilla Corporationnak. Ez utóbbi műszaki igazgatója és rövid ideig vezérigazgatója is volt. 2016-tól a Brave Software nevű startup alapítója és vezérigazgatója.");
            allText.push("A Silicon Graphics nevű cégnél dolgozott, majd 1995-ben a Netscape munkatársa lett, ahol JavaScript programnyelv megalkotása lett a feladata. 1998-ban a Mozilla Alapítvány egyik alapítója volt és a szervezetben ő lett a szoftverarchitektúráért felelős vezető. 2014-ben az Alapítvány műszaki vezérigazgatói posztjáról lépett elő az első számú vezetői posztra");
            allText.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur mollis ipsum, a laoreet ex ultrices in. Morbi sed viverra purus. Aliquam aliquet in ante eu cursus. Cras sit amet dolor justo. Nulla eu ex a lectus dapibus malesuada eu ac ante. Maecenas rutrum finibus lacus non finibus. Nulla hendrerit aliquam metus, a dapibus ex efficitur sed. Fusce rutrum libero ut ligula tempus, a vehicula arcu condimentum. Nunc feugiat consequat eros, id pharetra libero tincidunt nec. Quisque et risus nunc.");
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
            allText.push("Dennis MacAlistair Ritchie (Bronxville, New York állam, 1941. szeptember 9. – Berkeley Heights, New Jersey, 2011. október 12.[1]) amerikai számítógéptudós. Legismertebb a C programozási nyelv kifejlesztéséről, és a Unix kifejlesztésében is komoly érdemei voltak.");
            allText.push("Bronxville-ben született, majd fizikát és alkalmazott matematikát tanult, diplomáját a Harvard Egyetemen szerezte. Pályáját 1967-ben a Bell Labs|Bell Labs' Computing Sciences Research Centernél kezdte, végül a Lucent Technologies|Lucent Technologies' System Software Research Department vezetője, 2007-es nyugállományba vonulásáig.");
            allText.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur mollis ipsum, a laoreet ex ultrices in. Morbi sed viverra purus. Aliquam aliquet in ante eu cursus. Cras sit amet dolor justo. Nulla eu ex a lectus dapibus malesuada eu ac ante. Maecenas rutrum finibus lacus non finibus. Nulla hendrerit aliquam metus, a dapibus ex efficitur sed. Fusce rutrum libero ut ligula tempus, a vehicula arcu condimentum. Nunc feugiat consequat eros, id pharetra libero tincidunt nec. Quisque et risus nunc.");
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
            allText.push("Linus Benedict Torvalds (Helsinki, 1969. december 28.) a népszerű, Unix-szerű operációs rendszer, a Linux fejlesztésének elindítója, jelenleg is egyik fő fejlesztője.");
            allText.push("1997 eleje óta az USA-ban (Santa Clara) élnek. Jelenleg Linus munkaadója a Linux Foundation, amely a korábbi OSDL (Open Source Development Labs) és a Free Standards Group egyesüléséből jött létre. A Linux Foundation az ipar fontos szervezetei, cégei által fenntartott alapítvány, amely anyagi hátteret teremt a Linux kernel fejlesztésének.");
            allText.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur mollis ipsum, a laoreet ex ultrices in. Morbi sed viverra purus. Aliquam aliquet in ante eu cursus. Cras sit amet dolor justo. Nulla eu ex a lectus dapibus malesuada eu ac ante. Maecenas rutrum finibus lacus non finibus. Nulla hendrerit aliquam metus, a dapibus ex efficitur sed. Fusce rutrum libero ut ligula tempus, a vehicula arcu condimentum. Nunc feugiat consequat eros, id pharetra libero tincidunt nec. Quisque et risus nunc.");
            for (var i = 0; i < allText.length; i++) {
                var paragraph = document.createElement("div");
                paragraph.innerHTML = allText[i];
                if (i < 1){
                    paragraph.classList = "divFormat";
                    contentContainer.appendChild(paragraph)
                }
                else{
                    content.appendChild(paragraph);
                }
                
                content.appendChild(document.createElement("br"));
            }
            var content = document.createElement("div");
            contentContainer.appendChild(content);
            content.className = "content";
            var header = document.createElement("h1");
            header.innerHTML = person;
            content.appendChild(header);
            break;
        case "Nits László":
            allText.push("Nits László a fő védelmezője a tiszta kód elvének, közismerten a legtehetségesebb objektum orientált programozó. Elterjedt tény róla, hogy Chuck Norris leglelkesebb hívei közé tartozik.");
            allText.push("Programozási remekei tartozik az LNKO számító program (Python és C# nyelven is), az osztó harmonikus szám kereső program és hasonló matematikai problémákat megoldó programok. Tanítványai közül rengetegen értek el sikereket, ami kiváló tanítási képességét támasztja alá.");
            allText.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur mollis ipsum, a laoreet ex ultrices in. Morbi sed viverra purus. Aliquam aliquet in ante eu cursus. Cras sit amet dolor justo. Nulla eu ex a lectus dapibus malesuada eu ac ante. Maecenas rutrum finibus lacus non finibus. Nulla hendrerit aliquam metus, a dapibus ex efficitur sed. Fusce rutrum libero ut ligula tempus, a vehicula arcu condimentum. Nunc feugiat consequat eros, id pharetra libero tincidunt nec. Quisque et risus nunc.");
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
    }       


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