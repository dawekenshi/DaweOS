let cont = document.getElementById("win-cont");
let wins = document.getElementsByClassName("window");

function setRemove() {
    let closbut;
    closbut = document.getElementsByClassName("close");
    for (let i = 0; i < closbut.length; i++) {
        closbut[i].addEventListener("click", () => {
            wins[i].style.display = "none";
        })
    }
}

setRemove();

document.getElementById("add").addEventListener("click", () => {
    let window = document.createElement("div");
    let topbar = document.createElement("div");
    let topright = document.createElement("div");
    let topleft = document.createElement("div");
    let textright = document.createElement("div");
    let textleft = document.createElement("h1");
    let main = document.createElement("div");

    window.setAttribute("class", "window");
    topbar.setAttribute("id", "topbar");
    topright.setAttribute("id", "topright");
    topleft.setAttribute("id", "topleft");
    textright.setAttribute("class", "close");

    textleft.textContent = "Topbar";


    topleft.append(textleft);
    topright.append(textright);
    topbar.append(topleft);
    topbar.append(topright);
    window.append(topbar);
    cont.append(window);

    setRemove();
})