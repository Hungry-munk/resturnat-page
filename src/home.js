export default function buildHome () {
    const home = document.createElement("main")
    const image = document.createElement("img")
    const imageTxt = document.createElement('div')
    // image txt stuff
    const headChefTxt = document.createElement("div")
    const headChefName = document.createElement("div")
    const headChefPara = document.createElement("div")

    headChefTxt.textContent = "HEAD CHEF"
    headChefName.textContent = "Arsam Abbasadeh"
    headChefPara.textContent = "Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras, dapibus ac facilisis in, meet head chef - Arsam Abbaszadeh."

    image.classList.add("chefImage")
    headChefTxt.classList.add("headChefTxt")
    headChefName.classList.add("headChefName")
    headChefPara.classList.add("headChefPara")

    image.setAttribute("src","https://lifeandlaw.weebly.com/uploads/1/2/6/0/126058316/chef-2x_1.png")
    image.setAttribute('alt',"chef iamge")

    imageTxt.appendChild(headChefTxt)
    imageTxt.appendChild(headChefName)
    imageTxt.appendChild(headChefPara)

    home.appendChild(image)
    home.appendChild(imageTxt)
    home.classList.add("main","home")

    return home
}