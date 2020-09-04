setInterval(() => {
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();

    hrotation=30*h+m/2;
    mrotation=6*m;
    srotation=6*s;

    hour=document.querySelector(".hour");
    min=document.querySelector(".min");
    sec=document.querySelector(".sec");
    hour.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;

}, 1000);
