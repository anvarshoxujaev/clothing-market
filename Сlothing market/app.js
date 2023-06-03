let myVar;

function myFunction(){
    myVar=setTimeout(showPage,3000);
}

function showPage(){
    document.getElementById("loader").style.display="none";
    document.getElementById("img").style.display="block";
}

window.replainSettings = { id: '2c8d1efb-bc93-483b-8fdc-15358e5cdfd5' };
(function(u)
{let s=document.createElement('script');s.async=true;s.src=u;
    let x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
}
)
('https://widget.replain.cc/dist/client.js');