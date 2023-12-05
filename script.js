function expandOverlay(){
    createOverlay();

}

function createOverlay(){
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.right = "0";
    overlay.style.bottom = "0";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    overlay.style.zIndex = "2";
    document.body.appendChild(overlay);
    var image = document.createElement("div");
    image.id = "image";
    image.style.width = "90%";
    image.style.height = "90%";
    image.style.position = "fixed";
    image.style.top = "5%";
    image.style.left = "5%";
    image.style.right = "5%";
    image.style.bottom = "5%";
    image.style.backgroundColor = "white";
    image.style.zIndex = "3";
    document.body.appendChild(image);
    var img = document.createElement("div");
    img.src = "Images/placegolder.png";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.backgroundColor = "#1f1f1f";
    var close = document.createElement("button");
    close.id = "close";
    close.innerHTML = "Close";
    close.style.position = "absolute";
    close.style.top = "0";
    close.style.right = "0";
    close.style.zIndex = "4";
    close.onclick = function(){
        document.body.removeChild(overlay);
        document.body.removeChild(image);
    }
    image.appendChild(img);
    image.appendChild(close);
}
