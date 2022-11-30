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

homeBtn.addEventListener("click", e =>{
    document.querySelector("main").remove()
    content.appendChild(buildHome())
})

menuBtn.addEventListener("click", e =>{
    document.querySelector("main").remove()
    content.appendChild(buildMenu())
})

contactBtn.addEventListener("click", e =>{
    document.querySelector("main").remove()
    content.appendChild(buildContact())
})
