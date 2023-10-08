$(".option").click(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});

if (
  window.location.href.indexOf("fullcpgrid") == -1 /*Small on pages*/ &&
  window.location.href.indexOf(
    "debug"
  ) /*...debug, mentioned for whenever I forget how to read code*/ == -1 &&
  window.location.href.indexOf("fullembedgrid") == -1 /*Focused/details*/
) {
  
  document.body.innerHTML += `<link href="https://codepen.io/z-/pen/a8e37caf2a04602ea5815e5acedab458.css" rel="stylesheet"><div style=position:fixed;bottom:-5rem;right:-5rem; id=user-button><div class=u-icons style=position:absolute;z-index:950;top:50%;left:50%;width:0;height:0%;opacity:0;><a id="socialbutton-twitter" href="https://twitter.com/zed_dash" target=_top rel="no-refer"><div class="u-card fab fa-twitter"></div></a><a href=https://codepen.io/z- target=_blank><div class="u-card fab fa-codepen"></div></a>${pen_socialbutton_randomItem}${
    pen_socialbutton_theme_needed
      ? `<a id="theme_button" onclick="pen_socialbutton_theme_switch()" style="${pen_socialbutton_theme_buttons[pen_socialbutton_theme].style}" title="${pen_socialbutton_theme_buttons[pen_socialbutton_theme].title}">${pen_socialbutton_theme_buttons[pen_socialbutton_theme].innerHTML}</button>`
      : ``
  }</div><div class="u-card u-main"style=position:relative;z-index:1000;width:4rem;height:4rem;display:grid;place-items:center;background:var(--user-button-background)><a href="https://codepen.io/z-" target="_blank"><img src="https://i.koya.io/S70jhQ.webp" style="border-radius:100%; width:64px; height:64px;"/></a></div></div>`; //https://codepen.io/z-/pen/37f471adc6c5dba134cac86a34c93a61

} //https://i.imgur.com/DZ3sYcD.png

//fullcpgrid/a8e37caf2a04602ea5815e5acedab458
