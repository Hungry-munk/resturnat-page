import { buildFooter, buildHeader } from "./website";
import buildHome from "./home.js";
import buildMenu from "./menu";
import buildContact from "./contact";

const content = document.getElementById("content")

content.appendChild(buildHeader())
content.appendChild(buildFooter())
content.appendChild(buildContact())
