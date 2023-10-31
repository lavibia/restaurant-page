import './style.css';
import Logo from './logo.png';
import HeroImage from './heading-image.png';

function loadHeader(){
    const content=document.getElementById('content');

    const header = document.createElement('div');
    header.id='header';

    const logo= new Image();
    logo.src=Logo;
    logo.id='logo';
    header.appendChild(logo);

    const navList = document.createElement('ul');
    const navItemOne = document.createElement('li');
    const aHome= document.createElement('a');
    aHome.href='index.html';
    aHome.textContent = 'Home';
    navItemOne.appendChild(aHome);
    navList.appendChild(navItemOne);

    const navItemTwo = document.createElement('li');
    const aMenu= document.createElement('a');
    aMenu.setAttribute('href','#');
    aMenu.textContent = 'Menu';
    navItemTwo.appendChild(aMenu);
    navList.appendChild(navItemTwo);

    const navItemThree = document.createElement('li');
    const aContact= document.createElement('a');
    aContact.setAttribute('href','#');
    aContact.textContent = 'Contact';
    navItemThree.appendChild(aContact);
    navList.appendChild(navItemThree);

header.appendChild(navList);

   document.body.insertBefore(header,content);
}
function loadContent(){
    const content=document.getElementById('content');
    const heroText=document.createElement('div');
    heroText.setAttribute('id','hero-text');

    const title=document.createElement('h1');
    title.textContent='Pasta Party';

    const pre=document.createElement('pre');
    const subtitle=document.createElement('h3');
    subtitle.textContent="F R I D A Y   25th October";
    pre.appendChild(subtitle);

    heroText.appendChild(title);
    heroText.appendChild(pre);

    const heroImage = document.createElement('div');
    heroImage.setAttribute('id','hero-image');
    const headingImage = new Image();
    headingImage.src= HeroImage;
    headingImage.setAttribute('id','img-hero');

    heroImage.appendChild(headingImage);


    content.appendChild(heroText);
    content.appendChild(heroImage);

}
export default function homepageLoad() {
    loadHeader();
    loadContent();
}
