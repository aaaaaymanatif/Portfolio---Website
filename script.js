var main = document.getElementsByTagName('main');
var start = true;
main[0].onmouseover=function(){
  if(start){
      start=false;
      main[0].style.width="100vw";
      main[0].style.height="100vh";
      main[0].style.border="none";
  }  
};
var nav = document.getElementsByTagName('nav');
var home = document.getElementById('home');
var services = document.getElementById('my-services');
var social_media = document.getElementById('social-media');
var skills = document.getElementById('skills');
var cards = document.getElementsByClassName('card');
var bars = document.getElementsByClassName('bar');
var service = document.getElementsByClassName('service');
var container = document.getElementById('container');
HideContainerElements("0s");
window.addEventListener('load',function(){
    setTimeout(function(){
        ShowContainerElements("1s");
    } ,100);
    setTimeout(function(){
        CheckElementAvailability(skills);     CheckElementAvailability(services.getElementsByClassName('hidden')[0]);    
        CheckElementAvailability(social_media);    
    }, 200);
});
function HideContainerElements(transition){
    home.getElementsByTagName("h4")[0].style.transform="translateX(-50vw)";
    home.getElementsByTagName("h4")[0].style.transition=transition;
    home.getElementsByTagName("h4")[1].style.transform="translateX(-100vw)";
    home.getElementsByTagName("h4")[1].style.transition=transition;
    home.getElementsByTagName("p")[0].style.transform="translateX(-150vw)";
    home.getElementsByTagName("p")[0].style.transition=transition;
    home.getElementsByTagName("button")[0].style.transform="translateX(-200vw)";
    home.getElementsByTagName("button")[0].style.transition=transition;
    home.getElementsByTagName("img")[0].style.transform="translateX(300vw)";
    home.getElementsByTagName("img")[0].style.transition=transition;
    home.getElementsByClassName("circle")[0].style.transform="translateX(200vw)";
    home.getElementsByClassName("circle")[0].style.transition=transition;
}
function ShowContainerElements(transition){
    home.getElementsByTagName("h4")[0].style.transform="translateX(0px)";
    home.getElementsByTagName("h4")[0].style.transition=transition;
    home.getElementsByTagName("h4")[1].style.transform="translateX(0px)";
    home.getElementsByTagName("h4")[1].style.transition=transition;
    home.getElementsByTagName("p")[0].style.transform="translateX(0px)";
    home.getElementsByTagName("p")[0].style.transition=transition;
    home.getElementsByTagName("button")[0].style.transform="translateX(0px)";
    home.getElementsByTagName("button")[0].style.transition=transition;
    setTimeout(function(){
         home.getElementsByTagName("img")[0].style.transform="translateX(-50%)";
    home.getElementsByTagName("img")[0].style.transition=transition;
    home.getElementsByClassName("circle")[0].style.transform="translateX(0px)";
    home.getElementsByClassName("circle")[0].style.transition=transition;           
    }, 500);
}
var list = cards[1].getElementsByClassName('list');
for(var i=0;i<list[0].getElementsByTagName('a').length;i++){
    HideSkill(list[0].getElementsByTagName('a')[i]);
}
var interval = 1000;
function HideSkill(s){
    s.style.position="relative";
    s.style.left="100%";
}
function ShowSkill(s,i){
    setTimeout(function(){
        s.style.left="0";
        s.style.transition="1s";
    },i);
}
function ShowCards(){
    setTimeout(function(){
        cards[0].style.left="50%";
        cards[1].style.left="50%";
        for(var   i=0;i<list[0].getElementsByTagName('a').length;i++){
            ShowSkill(list[0].getElementsByTagName('a')[i],interval);
            interval+=100;
        }
    },100);
}
for(var i=0;i<service.length;i++){
    HideService(service[i]);
}
function HideService(s){
    s.style.position="relative";
    s.style.left="100vw";
}
for(var i=0;i<bars.length;i++){
    HideBar(bars[i]);
}
function HideBar(b){
    b.style.position="relative";
    b.style.left="100vw";
}
var interval2;
function ShowServices(){
    interval2 = 300;
    for(var i=0;i<service.length;i++){
        ShowService(service[i], interval2);
        interval2+=150;
    }
}
var interval3;
function ShowBars(){
    interval3 = 100;
    for(var i=0;i<bars.length;i++){
        ShowBar(bars[i], interval3);
        interval3+=150;
    }
}
function ShowService(s,i){
    setTimeout(function(){
        s.style.transition="1s";
        s.style.left="0";
    },i);
}
function ShowBar(b,i){
    setTimeout(function(){
        b.style.transition="1s";
        b.style.left="0";
    },i);
}
var projects = document.getElementsByClassName("project");
var window_height = window.innerHeight;
if(window_height<500){
    home.style.height="500px";
    for(var i=0;i<projects.length;i++){
        projects[i].getElementsByClassName("left")[0].style.minHeight="200vh";
        projects[i].getElementsByClassName("right")[0].style.minHeight="200vh";
    }
    ShowContainerElements("1s");
    ShowServices();
    ShowCards();
    ShowBars();
}
container.onscroll=function(){
  if(container.scrollTop>0){
      nav[0].classList.add('nav-animation');
  }
    else{
        nav[0].classList.remove('nav-animation');
    }
};
function CheckElementAvailability(el){
    setTimeout(function(){
        if(!OnView(el))
            CheckElementAvailability(el);
        else{
            if(el==skills){
                ShowCards();
            }
            else if(el==services.getElementsByClassName('hidden')[0]){
                ShowServices();
            }
            else if(el==social_media){
                ShowBars();
            }
        }
    }, 1);
}
function OnView(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top + (rect.height/2) > 0 && // top
        rect.left + (rect.width/2) > 0 && // left
        rect.top + (rect.height/2) < (window.innerHeight || document.documentElement.clientHeight) && // bottom
        rect.left + (rect.width/2) < (window.innerWidth || document.documentElement.clientWidth) // right
    );
}
function ShowEl(el_id){
    if(el_id != "home")
        document.getElementById(el_id).scrollIntoView();
    else container.scrollTop=0;
}
var menu = document.getElementsByClassName('menu')[0];
var items = menu.getElementsByClassName('items')[0];
function OpenMenu(){
    menu.style.visibility="visible";
    menu.style.opacity="1";
    setTimeout(function(){
        items.style.left="0";
    },250);
}
function HideMenu(){
    items.style.left="-100vw";
    setTimeout(function(){
        menu.style.opacity="0";
        menu.style.visibility="hidden";
    },500);
}
var samples = document.getElementsByClassName('samples');
samples[0].classList.add('animated');
samples[1].classList.add('animated');
for(var i=0;i<2;i++){
    AnimateNav(i);
}
function AnimateNav(ind){
    var i = ind;
    samples[i].onscroll=function(){
  if(samples[i].scrollTop>0){
      samples[i].getElementsByTagName('nav')[0].classList.add('nav-animation');
  }
    else{
        samples[i].getElementsByTagName('nav')[0].classList.remove('nav-animation');
    }
};
}
function Samples(el){
    var index = 0;
    if(el=='android') index =0;
    else if(el=='websites') index =1;
    main[0].classList.add('animated');
    setTimeout(function(){
        main[0].style.left="150vw";
        samples[index].style.left="0";
        setTimeout(function(){
            samples[index].classList.remove('animated');
    }, 1500);
    }, 1000);
}
function Home(el){
    var index = 0;
    if(el=='android') index =0;
    else if(el=='websites') index =1;
    samples[index].classList.add('animated');
    setTimeout(function(){
        samples[index].style.left="-150vw";
        main[0].style.left="0";
        setTimeout(function(){
            main[0].classList.remove('animated');
    }, 1500);
    }, 1000);
}
var mobile = document.getElementsByClassName('mobile');
var monitor = document.getElementsByClassName('monitor');
var cover = document.getElementsByClassName('cover')[0];
for(var i=0;i<mobile.length;i++){
    ClickMobile(mobile[i]);
}
for(var i=0;i<monitor.length;i++){
    ClickMonitor(monitor[i]);
}
var m_tmp;
var monitor_tmp;
var _case=-1;
function ClickMobile(m){
    m.onclick=function(){
        _case=0;
        m_tmp = m;
        m.classList.add("expand");
        cover.style.visibility="visible";
        cover.style.opacity="1";
    };
}
function ClickMonitor(m){
    m.onclick=function(){
        _case=1;
        monitor_tmp = m;
        m.classList.add("expand");
        cover.style.visibility="visible";
        cover.style.opacity="1";
    };
}
cover.onclick=function(){
    cover.style.opacity="0";
    cover.style.visibility="hidden";
    if(_case==0){
     m_tmp.classList.remove("expand");   
    }
    else if(_case==1){
     monitor_tmp.classList.remove("expand");   
    }
}