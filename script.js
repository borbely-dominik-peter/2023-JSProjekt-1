function expandOverlay(clickedCard) {
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "10";
    overlay.onclick = function (event) {
        if (event.target.id === "overlay") {
            closeOverlay(overlay);
        }
    };
    document.body.appendChild(overlay);

    var cardRect = getCornersOfOverlay();

    var contentContainer = document.createElement("div");
    contentContainer.id = "content";
    contentContainer.style.width = 1178 + "px";
    contentContainer.style.height = 777 + "px";
    contentContainer.style.position = "fixed";
    contentContainer.style.top = cardRect[0] + "px";
    contentContainer.style.right = cardRect[1] + "px";
    contentContainer.style.bottom = cardRect[2] + "px";
    contentContainer.style.left = cardRect[3] + "px";
    contentContainer.style.zIndex = "11";
    contentContainer.style.overflowY = "auto";
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

    var corners = moveCardValues(clickedCard, duplicatedContent);

    // duplicatedContent.style.top = corners[0] + "px";
    // duplicatedContent.style.right = corners[1] + "px";
    // duplicatedContent.style.bottom = corners[2] + "px";
    // duplicatedContent.style.left = corners[3] + "px";
    


    contentContainer.appendChild(duplicatedContent);
    contentContainer.appendChild(addContent(clickedCard));
}

function closeOverlay(overlay) {
    document.body.removeChild(overlay);
    var contentContainer = document.getElementById("content");
    document.body.removeChild(contentContainer);
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

function addContent(clickedCard){
    var content = document.createElement("p");
    content.className = "content";

    switch (clickedCard.id) {
        case "top-left":
            content.innerHTML = "<h1>Brendan Eich</h1>";
            break;
        case "top-right":
            content.innerHTML = "<h1>Dennis M. Ritchie</h1>";
            break;
        case "bottom-left":
            content.innerHTML = "<h1>Linus Torvalds</h1>";
            break;
        case "bottom-right":
            content.innerHTML = "<h1>Nits László</h1>";
            break;
    }

    // Brendan Eich
    var text = document.createElement("p");
    text.innerHTML = "Brendan Eich amerikai programozó, a JavaScript programnyelv megteremtője. Társalapítója a Mozilla projektnek, a Mozilla Alapítványnak és a Mozilla Corporationnak. Ez utóbbi műszaki igazgatója és rövid ideig vezérigazgatója is volt. 2016-tól a Brave Software nevű startup alapítója és vezérigazgatója.";
    content.appendChild(text);

    var text2 = document.createElement("p");
    text2.innerHTML = "A Silicon Graphics nevű cégnél dolgozott, majd 1995-ben a Netscape munkatársa lett, ahol JavaScript programnyelv megalkotása lett a feladata. 1998-ban a Mozilla Alapítvány egyik alapítója volt és a szervezetben ő lett a szoftverarchitektúráért felelős vezető.";
    content.appendChild(text2);

    // Dennis M. Ritchie
    var text3 = document.createElement("p");
    text3.innerHTML = "Dennis MacAlistair Ritchie (Bronxville, New York állam, 1941. szeptember 9. – Berkeley Heights, New Jersey, 2011. október 12.[1]) amerikai számítógéptudós. Legismertebb a C programozási nyelv kifejlesztéséről, és a Unix kifejlesztésében is komoly érdemei voltak.";
    content.appendChild(text3);

    var text4 = document.createElement("p");
    text4.innerHTML = "Bronxville-ben született, majd fizikát és alkalmazott matematikát tanult, diplomáját a Harvard Egyetemen szerezte. Pályáját 1967-ben a Bell Labs|Bell Labs' Computing Sciences Research Centernél kezdte, végül a Lucent Technologies|Lucent Technologies' System Software Research Department vezetője, 2007-es nyugállományba vonulásáig.";
    content.appendChild(text4);

    // Linus Torvalds
    var text5 = document.createElement("p");
    text5.innerHTML = "Linus Benedict Torvalds (Helsinki, 1969. december 28.) a népszerű, Unix-szerű operációs rendszer, a Linux fejlesztésének elindítója, jelenleg is egyik fő fejlesztője.";
    content.appendChild(text5);

    var text6 = document.createElement("p");
    text6.innerHTML = "1997 eleje óta az USA-ban (Santa Clara) élnek. Jelenleg Linus munkaadója a Linux Foundation, amely a korábbi OSDL (Open Source Development Labs) és a Free Standards Group egyesüléséből jött létre. A Linux Foundation az ipar fontos szervezetei, cégei által fenntartott alapítvány, amely anyagi hátteret teremt a Linux kernel fejlesztésének.";
    content.appendChild(text6);

    // Nits László
    var text7 = document.createElement("p");
    text7.innerHTML = "";

    return content;
}
