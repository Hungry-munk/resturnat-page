export default function buildMenu ()  {
    const menu = document.createElement("main")
    const menuHeading = document.createElement("h1")
    const menuItemConatiner = document.createElement('div')

    menu.classList.add("main","menu")
    menuHeading.classList.add("menuHeading")
    menuItemConatiner.classList.add("menuItemContainer")

    menuHeading.textContent = "Menu"

    // adding items to menu
    buildMenuItems().forEach(item => menuItemConatiner.appendChild(item))
    menu.appendChild(menuHeading)
    menu.appendChild(menuItemConatiner)

    return menu
}

function buildMenuItems () {
    const menuItems = []
    for (let i = 0 ; i<8 ; i++) {
        const item = document.createElement("div")
        const itemHeader = document.createElement("h3")
        const itemDescription = document.createElement("div")
        const itemImage  = document.createElement("img")

        itemImage.setAttribute("src","https://michalosman.github.io/restaurant-page/images/pizzas/gamberi.png")
        itemImage.setAttribute("alt","item image")
        itemHeader.textContent = 'nice pizza'
        itemDescription.textContent = "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"

        item.classList.add("item")
        itemHeader.classList.add("itemHeader")
        itemDescription.classList.add("ItemDescription")
        itemImage.classList.add("ItemImage")

        item.appendChild(itemImage)
        item.appendChild(itemHeader)
        item.appendChild(itemDescription)

        menuItems.push(item)
    };
    return menuItems
}