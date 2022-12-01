import { buildFooter, buildHeader } from "./website";
import buildHome from "./home.js";
import buildMenu from "./menu";
import buildContact from "./contact";

const content = document.getElementById("content")

content.appendChild(buildHeader())
content.appendChild(buildHome())
content.appendChild(buildFooter())

const homeBtn = document.querySelector(".homeBtn")
const menuBtn = document.querySelector(".menuBtn")
const contactBtn = document.querySelector(".contactBtn")
homeBtn.classList.add("active")

homeBtn.addEventListener("click", e =>{
    document.querySelector("main").remove()
    content.appendChild(buildHome())
    homeBtn.classList.add("active")
    menuBtn.classList.remove("active")
    contactBtn.classList.remove("active")
})

menuBtn.addEventListener("click", e =>{
    document.querySelector("main").remove()
    content.appendChild(buildMenu())
    menuBtn.classList.add("active")
    homeBtn.classList.remove("active")
    contactBtn.classList.remove("active")
})

contactBtn.addEventListener("click", e =>{
    document.querySelector("main").remove()
    content.appendChild(buildContact())
    contactBtn.classList.add("active")
    homeBtn.classList.remove("active")
    menuBtn.classList.remove("active")
})
