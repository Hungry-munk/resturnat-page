export default function buildContact () {
    const contactPage = document.createElement("main")
    const phoneNumberContainer = document.createElement("div")
    const addressContainer = document.createElement("div")
    const locationImage = document.createElement("img")
    // icons
    const phoneIcon = document.createElement("i")
    const addressIcon = document.createElement("i")

    // details 
    const phoneNumber = document.createElement("div")
    const address= document.createElement("div")

    //image attributes
    locationImage.setAttribute("src","./../assests/area51.png")
    locationImage.setAttribute("alt","location image")

    // fontawesome icons
    phoneIcon.classList.add("fa-solid","fa-phone")
    addressIcon.classList.add("fa-solid","fa-location-pin")
    // details txt content
    phoneNumber.textContent = "012345678"
    address.textContent = "area 51"
    
    phoneNumberContainer.appendChild(phoneIcon)
    phoneNumberContainer.appendChild(phoneNumber)

    addressContainer.appendChild(addressIcon)
    addressContainer.appendChild(address)
    // completing the copntact element
    contactPage.appendChild(phoneNumberContainer)
    contactPage.appendChild(addressContainer)
    contactPage.appendChild(locationImage)

    return contactPage
}