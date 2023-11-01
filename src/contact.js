import './style.css';
import Logo from './logo.png';

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
    navItemOne.id='homeTab';
    navItemOne.textContent = 'Home';
    navList.appendChild(navItemOne);

    const navItemTwo = document.createElement('li');
    navItemTwo.id='menuTab';
    navItemTwo.textContent = 'Menu';
    navList.appendChild(navItemTwo);

    const flag = document.createElement('div');
    flag.id='flag';

    const navItemThree = document.createElement('li');
    navItemThree.id='contactTab';
    navItemThree.textContent = 'Contact';
    flag.appendChild(navItemThree);
    navList.appendChild(flag);

header.appendChild(navList);

   document.body.insertBefore(header,content);
}
function loadContent(){
    const content=document.getElementById('content');
    const heroText=document.createElement('div');
    heroText.setAttribute('id','hero-text');

    const title=document.createElement('h1');
    title.textContent='Write us an email at:';

    const pre=document.createElement('pre');
    const subtitle=document.createElement('h3');
    subtitle.textContent="restaurant@italian.com";
    pre.appendChild(subtitle);

    heroText.appendChild(title);
    heroText.appendChild(pre);

    content.appendChild(heroText);

}
export default function contactLoad() {
    loadHeader();
    loadContent();
}