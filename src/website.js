
function buildHeader () {
    const header = document.createElement("header")
    const h1 = document.createElement("h1")
    const nav = document.createElement("h1")
}

function buildFooter () {
    const footer = document.createElement("footer")
    const gitHubLogo = document.createElement("i")
    const gitHubLink = document.createElement("a")
    const footerTxt = document.createElement("p")

    gitHubLogo.classList.add("fa-brands","fa-github")
    gitHubLink.setAttribute("src","https://github.com/Hungry-munk/resturnat-page/tree/main/dist")
    gitHubLink.setAttribute("alt","github")
    footerTxt.textContent = `CopyRight ⓒ ${new Date().getFullYear()}`

    gitHubLink.appendChild(gitHubLogo)
    footer.appendChild(footerTxt)
    footer.appendChild(gitHubLogo)

    return footer
}

export {buildHeader,buildFooter}