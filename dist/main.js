(()=>{"use strict";function e(){const e=document.createElement("main"),t=document.createElement("img"),n=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div");return a.textContent="HEAD CHEF",d.textContent="Arsam Abbasadeh",c.textContent="Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras, dapibus ac facilisis in, meet head chef - Arsam Abbaszadeh.",t.classList.add("chefImage"),a.classList.add("headChefTxt"),d.classList.add("headChefName"),c.classList.add("headChefPara"),t.setAttribute("src","https://lifeandlaw.weebly.com/uploads/1/2/6/0/126058316/chef-2x_1.png"),t.setAttribute("alt","chef iamge"),n.appendChild(a),n.appendChild(d),n.appendChild(c),e.appendChild(t),e.appendChild(n),e.classList.add("main","home"),e}const t=document.getElementById("content");t.appendChild(function(){const e=document.createElement("header"),t=document.createElement("h1"),n=document.createElement("div"),a=["Home","Menu","Contact"];for(let e=0;e<3;e++){const t=document.createElement("button");t.textContent=a[e],t.classList.add(`${a[e].toLowerCase()}Btn`),n.appendChild(t)}return t.textContent="awesome resturant",e.appendChild(t),e.appendChild(n),e}()),t.appendChild(e()),t.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("i"),n=document.createElement("a"),a=document.createElement("p");return t.classList.add("fa-brands","fa-github"),n.setAttribute("src","https://github.com/Hungry-munk/resturnat-page/tree/main/dist"),n.setAttribute("alt","github"),a.textContent=`CopyRight ⓒ Hungry_munk ${(new Date).getFullYear()}`,n.appendChild(t),e.appendChild(a),e.appendChild(t),e}());const n=document.querySelector(".homeBtn"),a=document.querySelector(".menuBtn"),d=document.querySelector(".contactBtn");n.addEventListener("click",(n=>{document.querySelector("main").remove(),t.appendChild(e())})),a.addEventListener("click",(e=>{document.querySelector("main").remove(),t.appendChild(function(){const e=document.createElement("main"),t=document.createElement("h1"),n=document.createElement("div");return e.classList.add("main","menu"),t.classList.add("menuHeading"),n.classList.add("menuItemContainer"),t.textContent="Menu",function(){const e=[];for(let t=0;t<8;t++){const t=document.createElement("div"),n=document.createElement("h3"),a=document.createElement("div"),d=document.createElement("img");d.setAttribute("src","https://michalosman.github.io/restaurant-page/images/pizzas/gamberi.png"),d.setAttribute("alt","item image"),n.textContent="nice pizza",a.textContent="Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",t.classList.add("item"),n.classList.add("itemHeader"),a.classList.add("ItemDescription"),d.classList.add("ItemImage"),t.appendChild(d),t.appendChild(n),t.appendChild(a),e.push(t)}return e}().forEach((e=>n.appendChild(e))),e.appendChild(t),e.appendChild(n),e}())})),d.addEventListener("click",(e=>{document.querySelector("main").remove(),t.appendChild(function(){const e=document.createElement("main"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("img"),d=document.createElement("i"),c=document.createElement("i"),i=document.createElement("div"),s=document.createElement("div");return a.setAttribute("src","./../assests/area51.png"),a.setAttribute("alt","location image"),d.classList.add("fa-solid","fa-phone"),c.classList.add("fa-solid","fa-location-pin"),i.textContent="012345678",s.textContent="area 51",t.appendChild(d),t.appendChild(i),n.appendChild(c),n.appendChild(s),e.appendChild(t),e.appendChild(n),e.appendChild(a),e}())}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksV0FBVyxtQkFFckM2QyxFQUFZL0MsWUFBYyxZQUMxQmdELEVBQVFoRCxZQUFjLFVBRXRCMEMsRUFBcUJ0QyxZQUFZeUMsR0FDakNILEVBQXFCdEMsWUFBWTJDLEdBRWpDSixFQUFpQnZDLFlBQVkwQyxHQUM3QkgsRUFBaUJ2QyxZQUFZNEMsR0FFN0JQLEVBQVlyQyxZQUFZc0MsR0FDeEJELEVBQVlyQyxZQUFZdUMsR0FDeEJGLEVBQVlyQyxZQUFZd0MsR0FFakJILENBQ1gsQ0hSd0JRLEdBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2MvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9jLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2MvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9jLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vYy8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkSG9tZSAoKSB7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIilcclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgY29uc3QgaW1hZ2VUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgLy8gaW1hZ2UgdHh0IHN0dWZmXHJcbiAgICBjb25zdCBoZWFkQ2hlZlR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnN0IGhlYWRDaGVmTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnN0IGhlYWRDaGVmUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuXHJcbiAgICBoZWFkQ2hlZlR4dC50ZXh0Q29udGVudCA9IFwiSEVBRCBDSEVGXCJcclxuICAgIGhlYWRDaGVmTmFtZS50ZXh0Q29udGVudCA9IFwiQXJzYW0gQWJiYXNhZGVoXCJcclxuICAgIGhlYWRDaGVmUGFyYS50ZXh0Q29udGVudCA9IFwiUGFyYWdyYXBoIFRleHQuIFByYWVzZW50IGNvbW1vZG8gY3Vyc3VzIG1hZ25hLCB2ZWwgc2NlbGVyaXNxdWUgbmlzbCBjb25zZWN0ZXR1ciBldC4gU2VkIHBvc3VlcmUgY29uc2VjdGV0dXIgZXN0IGF0IGxvYm9ydGlzLiBDcmFzLCBkYXBpYnVzIGFjIGZhY2lsaXNpcyBpbiwgbWVldCBoZWFkIGNoZWYgLSBBcnNhbSBBYmJhc3phZGVoLlwiXHJcblxyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImNoZWZJbWFnZVwiKVxyXG4gICAgaGVhZENoZWZUeHQuY2xhc3NMaXN0LmFkZChcImhlYWRDaGVmVHh0XCIpXHJcbiAgICBoZWFkQ2hlZk5hbWUuY2xhc3NMaXN0LmFkZChcImhlYWRDaGVmTmFtZVwiKVxyXG4gICAgaGVhZENoZWZQYXJhLmNsYXNzTGlzdC5hZGQoXCJoZWFkQ2hlZlBhcmFcIilcclxuXHJcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcImh0dHBzOi8vbGlmZWFuZGxhdy53ZWVibHkuY29tL3VwbG9hZHMvMS8yLzYvMC8xMjYwNTgzMTYvY2hlZi0yeF8xLnBuZ1wiKVxyXG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLFwiY2hlZiBpYW1nZVwiKVxyXG5cclxuICAgIGltYWdlVHh0LmFwcGVuZENoaWxkKGhlYWRDaGVmVHh0KVxyXG4gICAgaW1hZ2VUeHQuYXBwZW5kQ2hpbGQoaGVhZENoZWZOYW1lKVxyXG4gICAgaW1hZ2VUeHQuYXBwZW5kQ2hpbGQoaGVhZENoZWZQYXJhKVxyXG5cclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaW1hZ2UpXHJcbiAgICBob21lLmFwcGVuZENoaWxkKGltYWdlVHh0KVxyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibWFpblwiLFwiaG9tZVwiKVxyXG5cclxuICAgIHJldHVybiBob21lXHJcbn0iLCJpbXBvcnQgeyBidWlsZEZvb3RlciwgYnVpbGRIZWFkZXIgfSBmcm9tIFwiLi93ZWJzaXRlXCI7XHJcbmltcG9ydCBidWlsZEhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgYnVpbGRNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGJ1aWxkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcblxyXG5jb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSGVhZGVyKCkpXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIb21lKCkpXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRGb290ZXIoKSlcclxuXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVCdG5cIilcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUJ0blwiKVxyXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0QnRuXCIpXHJcblxyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikucmVtb3ZlKClcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIb21lKCkpXHJcbn0pXHJcblxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikucmVtb3ZlKClcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRNZW51KCkpXHJcbn0pXHJcblxyXG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikucmVtb3ZlKClcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRDb250YWN0KCkpXHJcbn0pXHJcbiIsImZ1bmN0aW9uIGJ1aWxkSGVhZGVyICgpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIilcclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcblxyXG4gICAgY29uc3QgYnV0dG9uVHh0cyA9IFtcclxuICAgICAgICBcIkhvbWVcIixcclxuICAgICAgICBcIk1lbnVcIixcclxuICAgICAgICBcIkNvbnRhY3RcIlxyXG4gICAgXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpPDMgOyBpKysgKSB7XHJcbiAgICAgICAgY29uc3QgbmF2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIG5hdkJ0bi50ZXh0Q29udGVudCA9IGJ1dHRvblR4dHNbaV1cclxuICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZChgJHtidXR0b25UeHRzW2ldLnRvTG93ZXJDYXNlKCl9QnRuYClcclxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobmF2QnRuKVxyXG4gICAgfVxyXG5cclxuICAgIGgxLnRleHRDb250ZW50ID0gXCJhd2Vzb21lIHJlc3R1cmFudFwiXHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKVxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdilcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyICgpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIilcclxuICAgIGNvbnN0IGdpdEh1YkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKVxyXG4gICAgY29uc3QgZ2l0SHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXHJcbiAgICBjb25zdCBmb290ZXJUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG5cclxuICAgIGdpdEh1YkxvZ28uY2xhc3NMaXN0LmFkZChcImZhLWJyYW5kc1wiLFwiZmEtZ2l0aHViXCIpXHJcbiAgICBnaXRIdWJMaW5rLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiaHR0cHM6Ly9naXRodWIuY29tL0h1bmdyeS1tdW5rL3Jlc3R1cm5hdC1wYWdlL3RyZWUvbWFpbi9kaXN0XCIpXHJcbiAgICBnaXRIdWJMaW5rLnNldEF0dHJpYnV0ZShcImFsdFwiLFwiZ2l0aHViXCIpXHJcbiAgICBmb290ZXJUeHQudGV4dENvbnRlbnQgPSBgQ29weVJpZ2h0IOKTkiBIdW5ncnlfbXVuayAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gXHJcblxyXG4gICAgZ2l0SHViTGluay5hcHBlbmRDaGlsZChnaXRIdWJMb2dvKVxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclR4dClcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRIdWJMb2dvKVxyXG5cclxuICAgIHJldHVybiBmb290ZXJcclxufVxyXG5cclxuZXhwb3J0IHtidWlsZEhlYWRlcixidWlsZEZvb3Rlcn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1lbnUgKCkgIHtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKVxyXG4gICAgY29uc3QgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcclxuICAgIGNvbnN0IG1lbnVJdGVtQ29uYXRpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIsXCJtZW51XCIpXHJcbiAgICBtZW51SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwibWVudUhlYWRpbmdcIilcclxuICAgIG1lbnVJdGVtQ29uYXRpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbUNvbnRhaW5lclwiKVxyXG5cclxuICAgIG1lbnVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJNZW51XCJcclxuXHJcbiAgICAvLyBhZGRpbmcgaXRlbXMgdG8gbWVudVxyXG4gICAgYnVpbGRNZW51SXRlbXMoKS5mb3JFYWNoKGl0ZW0gPT4gbWVudUl0ZW1Db25hdGluZXIuYXBwZW5kQ2hpbGQoaXRlbSkpXHJcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nKVxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbUNvbmF0aW5lcilcclxuXHJcbiAgICByZXR1cm4gbWVudVxyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZE1lbnVJdGVtcyAoKSB7XHJcbiAgICBjb25zdCBtZW51SXRlbXMgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpPDggOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIGNvbnN0IGl0ZW1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcclxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgY29uc3QgaXRlbUltYWdlICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuXHJcbiAgICAgICAgaXRlbUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiaHR0cHM6Ly9taWNoYWxvc21hbi5naXRodWIuaW8vcmVzdGF1cmFudC1wYWdlL2ltYWdlcy9waXp6YXMvZ2FtYmVyaS5wbmdcIilcclxuICAgICAgICBpdGVtSW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsXCJpdGVtIGltYWdlXCIpXHJcbiAgICAgICAgaXRlbUhlYWRlci50ZXh0Q29udGVudCA9ICduaWNlIHBpenphJ1xyXG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcHMsIEZldGEgY2hlZXNlLCBPbGl2ZXMsIEJhc2lsXCJcclxuXHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKVxyXG4gICAgICAgIGl0ZW1IZWFkZXIuY2xhc3NMaXN0LmFkZChcIml0ZW1IZWFkZXJcIilcclxuICAgICAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIkl0ZW1EZXNjcmlwdGlvblwiKVxyXG4gICAgICAgIGl0ZW1JbWFnZS5jbGFzc0xpc3QuYWRkKFwiSXRlbUltYWdlXCIpXHJcblxyXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUltYWdlKVxyXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUhlYWRlcilcclxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbilcclxuXHJcbiAgICAgICAgbWVudUl0ZW1zLnB1c2goaXRlbSlcclxuICAgIH07XHJcbiAgICByZXR1cm4gbWVudUl0ZW1zXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZENvbnRhY3QgKCkge1xyXG4gICAgY29uc3QgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKVxyXG4gICAgY29uc3QgcGhvbmVOdW1iZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb25zdCBhZGRyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29uc3QgbG9jYXRpb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIC8vIGljb25zXHJcbiAgICBjb25zdCBwaG9uZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKVxyXG4gICAgY29uc3QgYWRkcmVzc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKVxyXG5cclxuICAgIC8vIGRldGFpbHMgXHJcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnN0IGFkZHJlc3M9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuXHJcbiAgICAvL2ltYWdlIGF0dHJpYnV0ZXNcclxuICAgIGxvY2F0aW9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsXCIuLy4uL2Fzc2VzdHMvYXJlYTUxLnBuZ1wiKVxyXG4gICAgbG9jYXRpb25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIixcImxvY2F0aW9uIGltYWdlXCIpXHJcblxyXG4gICAgLy8gZm9udGF3ZXNvbWUgaWNvbnNcclxuICAgIHBob25lSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIixcImZhLXBob25lXCIpXHJcbiAgICBhZGRyZXNzSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIixcImZhLWxvY2F0aW9uLXBpblwiKVxyXG4gICAgLy8gZGV0YWlscyB0eHQgY29udGVudFxyXG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBcIjAxMjM0NTY3OFwiXHJcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCJhcmVhIDUxXCJcclxuICAgIFxyXG4gICAgcGhvbmVOdW1iZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVJY29uKVxyXG4gICAgcGhvbmVOdW1iZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpXHJcblxyXG4gICAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzSWNvbilcclxuICAgIGFkZHJlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcylcclxuICAgIC8vIGNvbXBsZXRpbmcgdGhlIGNvbnRhY3QgZWxlbWVudFxyXG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXJDb250YWluZXIpXHJcbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChhZGRyZXNzQ29udGFpbmVyKVxyXG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWFnZSlcclxuXHJcbiAgICByZXR1cm4gY29udGFjdFBhZ2VcclxufSJdLCJuYW1lcyI6WyJidWlsZEhvbWUiLCJob21lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW1hZ2UiLCJpbWFnZVR4dCIsImhlYWRDaGVmVHh0IiwiaGVhZENoZWZOYW1lIiwiaGVhZENoZWZQYXJhIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImhlYWRlciIsImgxIiwibmF2IiwiYnV0dG9uVHh0cyIsImkiLCJuYXZCdG4iLCJ0b0xvd2VyQ2FzZSIsImJ1aWxkSGVhZGVyIiwiZm9vdGVyIiwiZ2l0SHViTG9nbyIsImdpdEh1YkxpbmsiLCJmb290ZXJUeHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJidWlsZEZvb3RlciIsImhvbWVCdG4iLCJxdWVyeVNlbGVjdG9yIiwibWVudUJ0biIsImNvbnRhY3RCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlbW92ZSIsIm1lbnUiLCJtZW51SGVhZGluZyIsIm1lbnVJdGVtQ29uYXRpbmVyIiwibWVudUl0ZW1zIiwiaXRlbSIsIml0ZW1IZWFkZXIiLCJpdGVtRGVzY3JpcHRpb24iLCJpdGVtSW1hZ2UiLCJwdXNoIiwiYnVpbGRNZW51SXRlbXMiLCJmb3JFYWNoIiwiYnVpbGRNZW51IiwiY29udGFjdFBhZ2UiLCJwaG9uZU51bWJlckNvbnRhaW5lciIsImFkZHJlc3NDb250YWluZXIiLCJsb2NhdGlvbkltYWdlIiwicGhvbmVJY29uIiwiYWRkcmVzc0ljb24iLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJidWlsZENvbnRhY3QiXSwic291cmNlUm9vdCI6IiJ9