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
    document.body.appendChild(overlay);

    var cardRect = getCornersOfCard();

    var contentContainer = document.createElement("div");
    contentContainer.id = "content";
    contentContainer.style.width = 1178 + "px";
    contentContainer.style.height = 777 + "px";
    contentContainer.style.position = "fixed";
    contentContainer.style.top = cardRect[0] + "px";
    contentContainer.style.left = cardRect[3] + "px";
    contentContainer.style.bottom = cardRect[2] + "px";
    contentContainer.style.right = cardRect[1] + "px";
    contentContainer.style.zIndex = "11";
    contentContainer.style.overflowY = "auto";
    contentContainer.style.backgroundColor = "#1f1f1f";
    
    document.body.appendChild(contentContainer);

    var duplicatedContent = document.createElement("div");
    duplicatedContent.className = "duplicated-content";
    duplicatedContent.style.position = "static";
    duplicatedContent.style.cursor = "auto";

    var clonedImage = clickedCard.querySelector(".img img").cloneNode(true);
    var clonedText = clickedCard.querySelector(".container.programmerTitle").cloneNode(true);
    console.log(clonedText);

    clonedImage.className = "img";
    clonedText.className = "container programmerTitle";

    duplicatedContent.appendChild(clonedImage);
    duplicatedContent.appendChild(clonedText);

    contentContainer.appendChild(duplicatedContent);

    var close = document.createElement("button");
    close.id = "close";
    close.innerHTML = "Close";
    close.style.position = "absolute";
    close.style.top = "0";
    close.style.right = "0";
    close.style.zIndex = "13";
    close.onclick = function () {
        document.body.removeChild(overlay);
        document.body.removeChild(contentContainer);
    };
    contentContainer.appendChild(close);
}


function getCornersOfCard() {
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
