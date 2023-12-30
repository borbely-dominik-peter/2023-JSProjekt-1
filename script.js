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

    var corners = moveCardValues(clickedCard);

    duplicatedContent.style.top = corners[0] + "px";
    duplicatedContent.style.right = corners[1] + "px";
    duplicatedContent.style.bottom = corners[2] + "px";
    duplicatedContent.style.left = corners[3] + "px";

    contentContainer.appendChild(duplicatedContent);
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

function moveCardValues(clickedCard){
    var corners;
    switch (clickedCard.id) {
        case "top-left":
            corners = [0, 0, 0, 0]
            break;
        case "top-right":
            corners = [0, 0, 0, 874]
            break;
        case "bottom-left":
            corners = [403, 0, 0, 0]
            break;
        case "bottom-right":
            corners = [403, 0, 0, 874]
            break;
    }
    return corners;
}
