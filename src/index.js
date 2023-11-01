import homepageLoad from './homepage.js'
import menuLoad from './menu.js'
import contactLoad from './contact.js'

homepageLoad();
changeTab();

function clearPage(){
    document.body.innerHTML="";
    const content = document.createElement('div');
    content.id="content";
    document.body.appendChild(content);
}

function changeTab(){
    document.getElementById('homeTab').addEventListener('click', ()=>{
        clearPage();
        homepageLoad();
        changeTab();
    })
    document.getElementById('menuTab').addEventListener('click', ()=>{
        clearPage();
        menuLoad();
        changeTab();
    })
    document.getElementById('contactTab').addEventListener('click', ()=>{
        clearPage();
        contactLoad();
        changeTab();
    })
}
