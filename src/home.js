export default function buildHome () {
    const home = document.createElement("div")
    const homeContainer = document.createElement("main")
    const image = document.createElement("img")
    const imageTxt = document.createElement('div')
    // image txt stuff
    const headChefHeader = document.createElement("div")
    const headChefName = document.createElement("div")
    const headChefPara = document.createElement("div")

    headChefHeader.textContent = "HEAD CHEF"
    headChefName.textContent = "Arsam Abbasadeh"
    headChefPara.textContent = "Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras, dapibus ac facilisis in, meet head chef - Arsam Abbaszadeh."

    image.classList.add("chefImage")
    imageTxt.classList.add("chefImageTxt")
    headChefHeader.classList.add("headChefHeader")
    headChefName.classList.add("headChefName")
    headChefPara.classList.add("headChefPara")

    image.setAttribute("src","https://lifeandlaw.weebly.com/uploads/1/2/6/0/126058316/chef-2x_1.png")
    image.setAttribute('alt',"chef iamge")

    imageTxt.appendChild(headChefHeader)
    imageTxt.appendChild(headChefName)
    imageTxt.appendChild(headChefPara)

    home.appendChild(image)
    home.appendChild(imageTxt)
    homeContainer.classList.add("main","home")
    homeContainer.appendChild(home)

    return homeContainer
}