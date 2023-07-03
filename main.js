let cont = document.getElementById("win-cont");
let wins = document.getElementsByClassName("window");
let x = 0;
console.log(x);

function setRemovable() {
    let closbut;
    closbut = document.getElementsByClassName("close");
    for (let i = 0; i < closbut.length; i++) {
        closbut[i].addEventListener("click", () => {
            wins[i].style.display = "none";
            x--;
            console.log(x);
        })
    }
}

setRemovable();

document.getElementById("about-me").addEventListener("click", () => {
    if (x == 0) {
        let window = document.createElement("div");
        let titlebar = document.createElement("div");
        let titlebartext = document.createElement("div");
        let titlebarcontrols = document.createElement("div");
        let minimize = document.createElement("button");
        let maximize = document.createElement("button");
        let close = document.createElement("button");
        let windowbody = document.createElement("div");
        let itemscont = document.createElement("div");
        let pfp = document.createElement("img");
        let halfone = document.createElement("div");
        let halftwo = document.createElement("div");
        let github = document.createElement("a");
        let title = document.createElement("h1");
        let text = document.createElement("h2");

        github.setAttribute("href", "https://github.com/dawekenshi");
        github.setAttribute("target", "_blank");
        halfone.setAttribute("id", "halfone");
        halftwo.setAttribute("id", "halftwo");
        pfp.setAttribute("src", "https://i.ibb.co/T0y5dDW/104755414.png");
        pfp.setAttribute("id", "pfp");
        itemscont.setAttribute("id", "itemscont");
        window.setAttribute("class", "window");
        titlebar.setAttribute("class", "title-bar");
        titlebar.setAttribute("style", "height: 3.5vh; font-size: 0.7vw;");
        titlebartext.setAttribute("class", "title-bar-text");
        titlebarcontrols.setAttribute("class", "title-bar-controls");
        minimize.setAttribute("aria-label", "Minimize");
        maximize.setAttribute("aria-label", "Maximize");
        close.setAttribute("aria-label", "Close");
        close.setAttribute("class", "close");
        windowbody.setAttribute("class", "window-body");

        titlebartext.textContent = "About Me";
        halfone.append(pfp);
        halfone.append(github);
        title.textContent = "About Me";
        text.textContent = "I am Dawe a Full-Stack 15 y/o dev based in Spain, my goal is to end up working as a Back-End dev because I enjoy it more but I like both fields, so if you want you can hire me as whatever you want.";
        halftwo.append(title);
        halftwo.append(text);
        github.textContent = "Github";
        itemscont.append(halfone);
        itemscont.append(halftwo);
        windowbody.append(itemscont)
        titlebarcontrols.append(minimize);
        titlebarcontrols.append(maximize);
        titlebarcontrols.append(close);
        titlebar.append(titlebartext);
        titlebar.append(titlebarcontrols);
        window.append(titlebar);
        window.append(windowbody);
        cont.append(window);

        setRemovable();
        x++;
        console.log(x);
    }
})

document.getElementById("projects").addEventListener("click", () => {
    if (x == 0) {
        let window = document.createElement("div");
        let titlebar = document.createElement("div");
        let titlebartext = document.createElement("div");
        let titlebarcontrols = document.createElement("div");
        let minimize = document.createElement("button");
        let maximize = document.createElement("button");
        let close = document.createElement("button");
        let windowbody = document.createElement("div");
        let itemscont = document.createElement("div");
        let pfp = document.createElement("img");
        let halfone = document.createElement("div");
        let halftwo = document.createElement("div");
        let github = document.createElement("a");
        let title = document.createElement("h1");
        let text = document.createElement("h2");

        github.setAttribute("href", "https://github.com/dawekenshi");
        github.setAttribute("target", "_blank");
        halfone.setAttribute("id", "halfone");
        halftwo.setAttribute("id", "halftwo");
        pfp.setAttribute("src", "https://i.ibb.co/T0y5dDW/104755414.png");
        pfp.setAttribute("id", "pfp");
        itemscont.setAttribute("id", "itemscont");
        window.setAttribute("class", "window");
        titlebar.setAttribute("class", "title-bar");
        titlebar.setAttribute("style", "height: 3.5vh; font-size: 0.7vw;");
        titlebartext.setAttribute("class", "title-bar-text");
        titlebarcontrols.setAttribute("class", "title-bar-controls");
        minimize.setAttribute("aria-label", "Minimize");
        maximize.setAttribute("aria-label", "Maximize");
        close.setAttribute("aria-label", "Close");
        close.setAttribute("class", "close");
        windowbody.setAttribute("class", "window-body");

        titlebartext.textContent = "Projects";
        halfone.append(pfp);
        halfone.append(github);
        title.textContent = "Projects";
        text.textContent = "I am Dawe a Full-Stack 15 y/o dev based in Spain, my goal is to end up working as a Back-End dev because I enjoy it more but I like both fields, so if you want you can hire me as whatever you want.";
        halftwo.append(title);
        halftwo.append(text);
        github.textContent = "Github";
        itemscont.append(halfone);
        itemscont.append(halftwo);
        windowbody.append(itemscont)
        titlebarcontrols.append(minimize);
        titlebarcontrols.append(maximize);
        titlebarcontrols.append(close);
        titlebar.append(titlebartext);
        titlebar.append(titlebarcontrols);
        window.append(titlebar);
        window.append(windowbody);
        cont.append(window);

        setRemovable();
        x++;
        console.log(x);
    }
})

document.getElementById("social").addEventListener("click", () => {
    if (x == 0) {
        let window = document.createElement("div");
        let titlebar = document.createElement("div");
        let titlebartext = document.createElement("div");
        let titlebarcontrols = document.createElement("div");
        let minimize = document.createElement("button");
        let maximize = document.createElement("button");
        let close = document.createElement("button");
        let windowbody = document.createElement("div");
        let itemscont = document.createElement("div");
        let pfp = document.createElement("img");
        let halfone = document.createElement("div");
        let halftwo = document.createElement("div");
        let github = document.createElement("a");
        let title = document.createElement("h1");
        let text = document.createElement("h2");

        github.setAttribute("href", "https://github.com/dawekenshi");
        github.setAttribute("target", "_blank");
        halfone.setAttribute("id", "halfone");
        halftwo.setAttribute("id", "halftwo");
        pfp.setAttribute("src", "https://i.ibb.co/T0y5dDW/104755414.png");
        pfp.setAttribute("id", "pfp");
        itemscont.setAttribute("id", "itemscont");
        window.setAttribute("class", "window");
        titlebar.setAttribute("class", "title-bar");
        titlebar.setAttribute("style", "height: 3.5vh; font-size: 0.7vw;");
        titlebartext.setAttribute("class", "title-bar-text");
        titlebarcontrols.setAttribute("class", "title-bar-controls");
        minimize.setAttribute("aria-label", "Minimize");
        maximize.setAttribute("aria-label", "Maximize");
        close.setAttribute("aria-label", "Close");
        close.setAttribute("class", "close");
        windowbody.setAttribute("class", "window-body");

        titlebartext.textContent = "Social Media";
        halfone.append(pfp);
        halfone.append(github);
        title.textContent = "Social Media";
        text.textContent = "I am Dawe a Full-Stack 15 y/o dev based in Spain, my goal is to end up working as a Back-End dev because I enjoy it more but I like both fields, so if you want you can hire me as whatever you want.";
        halftwo.append(title);
        halftwo.append(text);
        github.textContent = "Github";
        itemscont.append(halfone);
        itemscont.append(halftwo);
        windowbody.append(itemscont)
        titlebarcontrols.append(minimize);
        titlebarcontrols.append(maximize);
        titlebarcontrols.append(close);
        titlebar.append(titlebartext);
        titlebar.append(titlebarcontrols);
        window.append(titlebar);
        window.append(windowbody);
        cont.append(window);

        setRemovable();
        x++;
        console.log(x);
    }
})