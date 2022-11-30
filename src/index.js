import { buildFooter,buildHeader } from "./website";
import buildHome from "./home.js";
import buildMenu from "./menu";

const content = document.getElementById("content")

content.appendChild(buildHeader())
// content.appendChild(buildHome())
content.appendChild(buildMenu())
content.appendChild(buildFooter())
