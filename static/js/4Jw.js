// (function ($) {
//   Drupal.behaviors.supportsSVG = {
//     attach: function (context, settings) {
//       svgeezy.init(false, 'png');
//     }
//   }
// })(jQuery);

// (function ($) {
//   Drupal.behaviors.headerscroll = {
//     attach: function (context, settings) {
//
//       lastpos = $(window).scrollTop();
//       lastcount = 0 - lastpos;
//
//       // Use the pattern recommended by John: http://ejohn.org/blog/learning-from-twitter
//       $(window).scroll(function() {
//         curpos = $(window).scrollTop();
//         lastcount += lastpos - curpos;
//         lastpos = curpos;
//       });
//
//       setInterval(function() {
//         // Scrolled up.
//         if (lastcount > 50) {
//           $('#navbar').removeClass('slim').removeClass('tiny');
//           lastcount = 0;
//         }
//
//         // Scrolled down.
//         if (lastcount < -50) {
//           $('#navbar').addClass('tiny').addClass('slim');
//           lastcount = 0;
//         }
//       }, 250);
//     }
//   }
// })(jQuery);

(function ($) {
  Drupal.behaviors.Slideshow = {
    attach: function (context, settings) {
      $("div.article-image").prepend("<div class='preloader'>loading...</div>");
      if ($.isFunction($('#carousel').flexslider)) {
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 129,
            itemMargin: 6,
            touch: true,
            asNavFor: '#slider'
        });
        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            slideshow: false,
            touch: true,
            useCSS: false,
            sync: "#carousel",
            start: function(){
                $('.article-image').removeClass('loading');
                $('.preloader').remove();
            }
        });
      }
    }
  };
})(jQuery);

// (function ($) {
//   Drupal.behaviors.shareThisButtons = {
//     attach: function (context, settings) {
//       var switchTo5x = true;
//       var loadScript = function(src, callbackfn) {
//         var newScript = document.createElement("script");
//         newScript.type = "text/javascript";
//         newScript.setAttribute("async", "true");
//         newScript.setAttribute("src", src);
//         if(newScript.readyState) {
//           newScript.onreadystatechange = function() {
//             if(/loaded|complete/.test(newScript.readyState)) callbackfn();
//           }
//         } else {
//           newScript.addEventListener("load", callbackfn, false);
//         }
//         document.body.appendChild(newScript);
//       };
//       if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
//         || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
//         loadScript("//w.sharethis.com/button/buttons.js", function() {
//           stLight.options({publisher: "99c18598-fbaf-44c6-bce6-b0c6bd117058", doNotHash: false, doNotCopy: false, onhover: false, servicePopup: false, hashAddressBar: false});
//         });
//       } else {
//         loadScript("//w.sharethis.com/button/buttons.js", function() {
//           stLight.options({publisher: "99c18598-fbaf-44c6-bce6-b0c6bd117058", doNotHash: false, doNotCopy: false, onhover: false, servicePopup: true, hashAddressBar: false});
//         });
//       }
//     }
//   }
// })(jQuery);

(function ($) {
  Drupal.behaviors.eesideMenu = {
    attach: function (context, settings) {
      $.sidemenu({
        side:  'right', // left or right
        speed: 300 // animation speed
      });
      $(".sidemenu-open").click(function () {
        $("#overlaymobile").css('display','block');
        $('#navbar').addClass('sm-open');
      });
      $(".sidemenu-close").click(function () {
        $('#navbar').removeClass('sm-open');
        $("#overlaymobile").css('display','none');
      });
    }
  }
})(jQuery);

(function ($) {
  Drupal.behaviors.languageSwitcher = {
    attach: function (context, settings) {
      var $language_switcher = $('.language-switcher-menu', context);
      if ($language_switcher) {
        $language_switcher.once('languageSwitcher', function() {
          $language_switcher.find('.language-switcher-menu__mask').click(function(e) {
            if (!e.handled) {
              Drupal.behaviors.languageSwitcher.toggleSwitcher($language_switcher);
              e.handled = true;
            }
          });
          $language_switcher.find('a, i').click(function(e) {
            if (!e.handled) {
              Drupal.behaviors.languageSwitcher.toggleSwitcher($language_switcher);
              e.handled = true;
            }
          });
        });
      }
    },
    toggleSwitcher: function($language_switcher) {
      $language_switcher.toggleClass('open');
      $language_switcher.find('li').not('.last').slideToggle(200);
      $language_switcher.find('.mask').slideToggle(200);
      $language_switcher.find('i').toggleClass('fa-angle-down fa-angle-up', 200);
    }
  };
})(jQuery);

(function ($) {
  Drupal.behaviors.mobileSearchFix = {
    attach: function (context, settings) {
      // Removes placeholder text from search submit
      $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
          var input = $(this);
            if (input.val() == input.attr('placeholder')) {
              input.val('');
          }
        })
      });
      // Validates input value entered and displays search button
      validate();
      $('#mainmenu #edit-keys').change(validate);
      function validate(){
        if ($('#mainmenu #edit-keys').val().length   >   0) {
          $("#mainmenu button[type=submit]").prop("disabled", false);
        }
        else {
          $("#mainmenu button[type=submit]").prop("disabled", true);
        }
      }
    }
  }
})(jQuery);
;
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssanimations-cssfilters-csstransforms-csstransforms3d-csstransitions-flexbox-lastchild-nthchild-preserve3d-addtest-atrule-mq-printshiv-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,a,s;for(var l in x)if(x.hasOwnProperty(l)){if(e=[],t=x[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=i:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=i),S.push((i?"":"no-")+s.join("-"))}}function o(e){var t=E.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?E.className.baseVal=t:E.className=t)}function a(e,t){if("object"==typeof e)for(var n in e)_(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=s(b?"svg":"body"),e.fake=!0),e}function u(e,n,r,i){var o,a,u,f,d="modernizr",c=s("div"),p=l();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=i?i[r]:d+(r+1),c.appendChild(u);return o=s("style"),o.type="text/css",o.id="s"+d,(p.fake?p:c).appendChild(o),p.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",f=E.style.overflow,E.style.overflow="hidden",E.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),E.style.overflow=f,E.offsetHeight):c.parentNode.removeChild(c),!!a}function f(e,t){return!!~(""+e).indexOf(t)}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?c(i,n||t):i);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(m(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+m(t[i])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,i,o){function a(){u&&(delete L.style,delete L.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var l=h(e,i);if(!r(l,"undefined"))return l}for(var u,c,p,m,v,g=["modernizr","tspan"];!L.style;)u=!0,L.modElem=s(g.shift()),L.style=L.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],v=L.style[m],f(m,"-")&&(m=d(m)),L.style[m]!==n){if(o||r(i,"undefined"))return a(),"pfx"==t?m:!0;try{L.style[m]=i}catch(y){}if(L.style[m]!=v)return a(),"pfx"==t?m:!0}return a(),!1}function g(e,t,n,i,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+z.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,i,o):(s=(e+" "+F.join(a+" ")+a).split(" "),p(s,t,n))}function y(e,t,r){return g(e,n,n,t,r)}var S=[],x=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var E=t.documentElement,b="svg"===E.nodeName.toLowerCase();b||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=_.elements;return"string"==typeof e?e.split(" "):e}function i(e,t){var n=_.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),_.elements=n+" "+e,u(t)}function o(e){var t=b[e[C]];return t||(t={},E++,e[C]=E,b[E]=t),t}function a(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():x.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||S.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function s(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)i.createElement(s[a]);return i}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return _.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(_,t.frag)}function u(e){e||(e=t);var r=o(e);return!_.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||l(e,r),e}function f(e){for(var t,n=e.getElementsByTagName("*"),i=n.length,o=RegExp("^(?:"+r().join("|")+")$","i"),a=[];i--;)t=n[i],o.test(t.nodeName)&&a.push(t.applyElement(d(t)));return a}function d(e){for(var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(T+":"+e.nodeName);r--;)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function c(e){for(var t,n=e.split("{"),i=n.length,o=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+T+"\\:$2";i--;)t=n[i]=n[i].split("}"),t[t.length-1]=t[t.length-1].replace(o,a),n[i]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,i,a=o(e),s=e.namespaces,l=e.parentWindow;return!N||e.printShived?e:("undefined"==typeof s[T]&&s.add(T),l.attachEvent("onbeforeprint",function(){t();for(var o,a,s,l=e.styleSheets,u=[],d=l.length,p=Array(d);d--;)p[d]=l[d];for(;s=p.pop();)if(!s.disabled&&w.test(s.media)){try{o=s.imports,a=o.length}catch(m){a=0}for(d=0;a>d;d++)p.push(o[d]);try{u.push(s.cssText)}catch(m){}}u=c(u.reverse().join("")),i=f(e),r=n(e,u)}),l.attachEvent("onafterprint",function(){p(i),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,v,g="3.7.3",y=e.html5||{},S=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,x=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,C="_html5shiv",E=0,b={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,v=!0}}();var _={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:y.shivCSS!==!1,supportsUnknownElements:v,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:i};e.html5=_,u(t);var w=/^$|\b(?:all|print)\b/,T="html5shiv",N=!v&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();_.type+=" print",_.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=_)}("undefined"!=typeof e?e:this,t);var _;!function(){var e={}.hasOwnProperty;_=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=a});var w=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=w;var T="CSS"in e&&"supports"in e.CSS,N="supportsCSS"in e;Modernizr.addTest("supports",T||N);var j="Moz O ms Webkit",z=C._config.usePrefixes?j.split(" "):[];C._cssomPrefixes=z;var P=function(t){var r,i=w.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var a=0;i>a;a++){var s=w[a],l=s.toUpperCase()+"_"+r;if(l in o)return"@-"+s.toLowerCase()+"-"+t}return!1};C.atRule=P;var k=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=k;var M=C.testStyles=u;M("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),M("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5);var F=C._config.usePrefixes?j.toLowerCase().split(" "):[];C._domPrefixes=F;var A={elem:s("modernizr")};Modernizr._q.push(function(){delete A.elem});var L={style:A.elem.style};Modernizr._q.unshift(function(){delete L.style});C.testProp=function(e,t,r){return v([e],n,t,r)};C.testAllProps=g,C.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return y("filter","blur(2px)");var e=s("a");return e.style.cssText=w.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in E.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",M(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("preserve3d",y("transformStyle","preserve-3d")),Modernizr.addTest("csstransitions",y("transition","all",!0)),i(),o(S),delete C.addTest,delete C.addAsyncTest;for(var $=0;$<Modernizr._q.length;$++)Modernizr._q[$]();e.Modernizr=Modernizr}(window,document);;
/**
 * jquery.dlmenu.js v1.0.1
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {

	'use strict';

	// global
	var Modernizr = window.Modernizr, $body = $( 'body' );

	$.DLMenu = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	// the options
	$.DLMenu.defaults = {
		// classes for the animation effects
		animationClasses : { classin : 'dl-animate-in-1', classout : 'dl-animate-out-1' },
		// callback: click a link that has a sub menu
		// el is the link element (li); name is the level name
		onLevelClick : function( el, name ) { return false; },
		// callback: click a link that does not have a sub menu
		// el is the link element (li); ev is the event obj
		onLinkClick : function( el, ev ) { return false; },
		backLabel: 'Back',
		// Change to "true" to use the active item as back link label.
		useActiveItemAsBackLabel: false,
		// Change to "true" to add a navigable link to the active item to its child
		// menu.
		useActiveItemAsLink: false
	};

	$.DLMenu.prototype = {
		_init : function( options ) {

			// options
			this.options = $.extend( true, {}, $.DLMenu.defaults, options );
			// cache some elements and initialize some variables
			this._config();

			var animEndEventNames = {
					'WebkitAnimation' : 'webkitAnimationEnd',
					'OAnimation' : 'oAnimationEnd',
					'msAnimation' : 'MSAnimationEnd',
					'animation' : 'animationend'
				},
				transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				};
			// animation end event name
			this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ] + '.dlmenu';
			// transition end event name
			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ] + '.dlmenu';
			// support for css animations and css transitions
			this.supportAnimations = Modernizr.cssanimations;
			this.supportTransitions = Modernizr.csstransitions;

			this._initEvents();

		},
		_config : function() {
			this.open = false;
			this.$trigger = this.$el.children( '.dl-trigger' );
			this.$menu = this.$el.children( 'ul.dl-menu' );
			this.$menuitems = this.$menu.find( 'li:not(.dl-back)' );
			this.$el.find( 'ul.dl-submenu' ).prepend( '<li class="dl-back"><a href="#">' + this.options.backLabel + '</a></li>' );
			this.$back = this.$menu.find( 'li.dl-back' );

			// Set the label text for the back link.
			if (this.options.useActiveItemAsBackLabel) {
				this.$back.each(function() {
					var $this = $(this),
						parentLabel = $this.parents('li:first').find('a:first').text();

					$this.find('a').html(parentLabel);
				});
			}
			// If the active item should also be a clickable link, create one and put
			// it at the top of our menu.
			if (this.options.useActiveItemAsLink) {
				this.$el.find( 'ul.dl-submenu' ).prepend(function() {
					var parentli = $(this).parents('li:not(.dl-back):first').find('a:first');
					return '<li class="dl-parent"><a href="' + parentli.attr('href') + '">' + parentli.text() + '</a></li>';
				});
			}

		},
		_initEvents : function() {

			var self = this;

			this.$trigger.on( 'click.dlmenu', function() {
				if( self.open ) {
					self._closeMenu();
				}
				else {
					self._openMenu();
					// clicking somewhere else makes the menu close
					$body.off( 'click' ).children().on( 'click.dlmenu', function() {
						self._closeMenu() ;
					} );
					
				}
				return false;
			} );

			this.$menuitems.on( 'click.dlmenu', function( event ) {

				event.stopPropagation();

				var $item = $(this),
					$submenu = $item.children( 'ul.dl-submenu' );

				// Only go to the next menu level if one exists AND the link isn't the
				// one we added specifically for navigating to parent item pages.
				if( ($submenu.length > 0) && !($(event.currentTarget).hasClass('dl-subviewopen'))) {

					var $flyin = $submenu.clone().css( 'opacity', 0 ).insertAfter( self.$menu ),
						onAnimationEndFn = function() {
							self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classout ).addClass( 'dl-subview' );
							$item.addClass( 'dl-subviewopen' ).parents( '.dl-subviewopen:first' ).removeClass( 'dl-subviewopen' ).addClass( 'dl-subview' );
							$('#dl-menu .dl-trigger.dl-active').hide();
							$flyin.remove();
						};

					setTimeout( function() {
						$flyin.addClass( self.options.animationClasses.classin );
						self.$menu.addClass( self.options.animationClasses.classout );
						if( self.supportAnimations ) {
							self.$menu.on( self.animEndEventName, onAnimationEndFn );
						}
						else {
							onAnimationEndFn.call();
						}

						self.options.onLevelClick( $item, $item.children( 'a:first' ).text() );
					} );

					return false;

				}
				else {
					self.options.onLinkClick( $item, event );
				}

			} );

			this.$back.on( 'click.dlmenu', function( event ) {

				var $this = $( this ),
					$submenu = $this.parents( 'ul.dl-submenu:first' ),
					$item = $submenu.parent(),

					$flyin = $submenu.clone().insertAfter( self.$menu );

				var onAnimationEndFn = function() {
					self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.classin );
					$flyin.remove();
				};

				setTimeout( function() {
					$flyin.addClass( self.options.animationClasses.classout );
					self.$menu.addClass( self.options.animationClasses.classin );
					if( self.supportAnimations ) {
						self.$menu.on( self.animEndEventName, onAnimationEndFn );
					}
					else {
						onAnimationEndFn.call();
					}

					$item.removeClass( 'dl-subviewopen' );

					var $subview = $this.parents( '.dl-subview:first' );
					if( $subview.is( 'li' ) ) {
						$subview.addClass( 'dl-subviewopen' );
					}
					$subview.removeClass( 'dl-subview' );
				} );
				$('#dl-menu .dl-trigger.dl-active').show();

				return false;

			} );

		},
		closeMenu : function() {
			if( this.open ) {
				this._closeMenu();
			}
		},
		_closeMenu : function() {
			var self = this,
				onTransitionEndFn = function() {
					self.$menu.off( self.transEndEventName );
					self._resetMenu();
				};

			this.$menu.removeClass( 'dl-menuopen' );
			this.$menu.addClass( 'dl-menu-toggle' );
			this.$trigger.removeClass( 'dl-active' );

			if( this.supportTransitions ) {
				this.$menu.on( this.transEndEventName, onTransitionEndFn );
			}
			else {
				onTransitionEndFn.call();
			}

			this.open = false;
		},
		openMenu : function() {
			if( !this.open ) {
				this._openMenu();
			}
		},
		_openMenu : function() {
			var self = this;
			// clicking somewhere else makes the menu close
			$body.off( 'click' ).on( 'click.dlmenu', function() {
				self._closeMenu() ;
			} );
			this.$menu.addClass( 'dl-menuopen dl-menu-toggle' ).on( this.transEndEventName, function() {
				$( this ).removeClass( 'dl-menu-toggle' );
			} );
			this.$trigger.addClass( 'dl-active' );
			this.open = true;
		},
		// resets the menu to its original state (first level of options)
		_resetMenu : function() {
			this.$menu.removeClass( 'dl-subview' );
			this.$menuitems.removeClass( 'dl-subview dl-subviewopen' );
		}
	};

	var logError = function( message ) {
		if ( window.console ) {
			window.console.error( message );
		}
	};

	$.fn.dlmenu = function( options ) {
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				var instance = $.data( this, 'dlmenu' );
				if ( !instance ) {
					logError( "cannot call methods on dlmenu prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for dlmenu instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		}
		else {
			this.each(function() {
				var instance = $.data( this, 'dlmenu' );
				if ( instance ) {
					instance._init();
				}
				else {
					instance = $.data( this, 'dlmenu', new $.DLMenu( options, this ) );
				}
			});
		}
		return this;
	};

} )( jQuery, window );;
(function ($) {
  Drupal.behaviors.FormPlaceholder = {
    attach: function (context, settings) {
      $("input, textarea").each(function() {
        if ($(this).val() == "" && $(this).attr("placeholder") != "") {
          $(this).val($(this).attr("placeholder"));
          $(this).focus(function(){
            if ($(this).val() == $(this).attr("placeholder")) {
              $(this).val("");
            }
          });
          $(this).blur(function() {
            if ($(this).val() == "") {
              $(this).val($(this).attr("placeholder"));
            }
          });
        }
      });
      $( '#dl-menu' ).dlmenu({
        animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }
      });
    }
  };
})(jQuery);
;
/*
 * jquery.sidemenu.js
 * https://github.com/kami30k/jquery.sidemenu.js
 *
 * Copyright 2015 kami.
 * Released under the MIT license.
 */
 !function(e){function n(){e('[data-role="sidemenu"]').css(d.side,"-240px"),e('[data-role="sidemenu-toggle"]').on("click",function(){e(this).sidemenu.call(e(this.hash))})}function t(e,n,t){t=t||function(){};var i={};i[d.side]=n,e.animate(i,d.speed,t)}var i,o,s,d={side:"left",speed:400};e.sidemenu=function(n){d=e.extend(d,n)},e.fn.sidemenu=function(n){n=n||"toggle",i=e("html"),o=e(""),s=e(this),u[n]()};var u={open:function(){o.css({overflowX:"hidden",position:"absolute",width:i.width()}),t(o,"240px"),t(s,"0px")},close:function(){t(o,"0px",function(){e(this).removeAttr("style")}),t(s,"-240px")},toggle:function(){"0px"==s.css(d.side)?this.close():this.open()}};e(document).ready(function(){n(),"undefined"!=typeof Turbolinks&&e(document).on("page:load",function(){n()})})}(jQuery);
;
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);;
/*yepnope1.5.x|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);;
/**
 * SVGInjector v1.1.3 - Fast, caching, dynamic inline SVG DOM injection library
 * https://github.com/iconic/SVGInjector
 *
 * Copyright (c) 2014-2015 Waybury <hello@waybury.com>
 * @license MIT
 */
!function(t,e){"use strict";function r(t){t=t.split(" ");for(var e={},r=t.length,n=[];r--;)e.hasOwnProperty(t[r])||(e[t[r]]=1,n.unshift(t[r]));return n.join(" ")}var n="file:"===t.location.protocol,i=e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),o=Array.prototype.forEach||function(t,e){if(void 0===this||null===this||"function"!=typeof t)throw new TypeError;var r,n=this.length>>>0;for(r=0;n>r;++r)r in this&&t.call(e,this[r],r,this)},a={},l=0,s=[],u=[],c={},f=function(t){return t.cloneNode(!0)},p=function(t,e){u[t]=u[t]||[],u[t].push(e)},d=function(t){for(var e=0,r=u[t].length;r>e;e++)!function(e){setTimeout(function(){u[t][e](f(a[t]))},0)}(e)},v=function(e,r){if(void 0!==a[e])a[e]instanceof SVGSVGElement?r(f(a[e])):p(e,r);else{if(!t.XMLHttpRequest)return r("Browser does not support XMLHttpRequest"),!1;a[e]={},p(e,r);var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState){if(404===i.status||null===i.responseXML)return r("Unable to load SVG file: "+e),n&&r("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),r(),!1;if(!(200===i.status||n&&0===i.status))return r("There was a problem injecting the SVG: "+i.status+" "+i.statusText),!1;if(i.responseXML instanceof Document)a[e]=i.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var t;try{var o=new DOMParser;t=o.parseFromString(i.responseText,"text/xml")}catch(l){t=void 0}if(!t||t.getElementsByTagName("parsererror").length)return r("Unable to parse SVG file: "+e),!1;a[e]=t.documentElement}d(e)}},i.open("GET",e),i.overrideMimeType&&i.overrideMimeType("text/xml"),i.send()}},h=function(e,n,a,u){var f=e.getAttribute("data-src")||e.getAttribute("src");if(!/\.svg/i.test(f))return void u("Attempted to inject a file with a non-svg extension: "+f);if(!i){var p=e.getAttribute("data-fallback")||e.getAttribute("data-png");return void(p?(e.setAttribute("src",p),u(null)):a?(e.setAttribute("src",a+"/"+f.split("/").pop().replace(".svg",".png")),u(null)):u("This browser does not support SVG and no PNG fallback was defined."))}-1===s.indexOf(e)&&(s.push(e),e.setAttribute("src",""),v(f,function(i){if("undefined"==typeof i||"string"==typeof i)return u(i),!1;var a=e.getAttribute("id");a&&i.setAttribute("id",a);var p=e.getAttribute("title");p&&i.setAttribute("title",p);var d=[].concat(i.getAttribute("class")||[],"injected-svg",e.getAttribute("class")||[]).join(" ");i.setAttribute("class",r(d));var v=e.getAttribute("style");v&&i.setAttribute("style",v);var h=[].filter.call(e.attributes,function(t){return/^data-\w[\w\-]*$/.test(t.name)});o.call(h,function(t){t.name&&t.value&&i.setAttribute(t.name,t.value)});var g,m,b,y,A,w={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(w).forEach(function(t){g=t,b=w[t],m=i.querySelectorAll("defs "+g+"[id]");for(var e=0,r=m.length;r>e;e++){y=m[e].id,A=y+"-"+l;var n;o.call(b,function(t){n=i.querySelectorAll("["+t+'*="'+y+'"]');for(var e=0,r=n.length;r>e;e++)n[e].setAttribute(t,"url(#"+A+")")}),m[e].id=A}}),i.removeAttribute("xmlns:a");for(var x,S,k=i.querySelectorAll("script"),j=[],G=0,T=k.length;T>G;G++)S=k[G].getAttribute("type"),S&&"application/ecmascript"!==S&&"application/javascript"!==S||(x=k[G].innerText||k[G].textContent,j.push(x),i.removeChild(k[G]));if(j.length>0&&("always"===n||"once"===n&&!c[f])){for(var M=0,V=j.length;V>M;M++)new Function(j[M])(t);c[f]=!0}var E=i.querySelectorAll("style");o.call(E,function(t){t.textContent+=""}),e.parentNode.replaceChild(i,e),delete s[s.indexOf(e)],e=null,l++,u(i)}))},g=function(t,e,r){e=e||{};var n=e.evalScripts||"always",i=e.pngFallback||!1,a=e.each;if(void 0!==t.length){var l=0;o.call(t,function(e){h(e,n,i,function(e){a&&"function"==typeof a&&a(e),r&&t.length===++l&&r(l)})})}else t?h(t,n,i,function(e){a&&"function"==typeof a&&a(e),r&&r(1),t=null}):r&&r(0)};"object"==typeof module&&"object"==typeof module.exports?module.exports=exports=g:"function"==typeof define&&define.amd?define(function(){return g}):"object"==typeof t&&(t.SVGInjector=g)}(window,document);
//# sourceMappingURL=svg-injector.map.js
;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

  'use strict';

  //Use the sample behavior pattern below

//   /**
//    * Polyfill for older browsers
//    */
//   Drupal.behaviors.radialFonts = {
//     attach: function (context, settings) {
//       context = context || document;
//       settings = settings || Drupal.settings;

//       $('body', context).once('radialFonts', function() {
//         var MTIProjectId='aed77128-1e7c-4ebc-9e05-0a80f3f64a47';

//         var mtiTracking = document.createElement('script');
//         mtiTracking.type='text/javascript';
//         mtiTracking.async='true';
//         mtiTracking.src='/sites/all/themes/radial/js/vendor/mtiFontTrackingCode.js';
//         (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild( mtiTracking );
//       });
//     }
//   };

  /**
   * Polyfill for older browsers
   */
  Drupal.behaviors.radialHeaderHeight = {
    attach: function (context, settings) {
      context = context || document;
      settings = settings || Drupal.settings;

      // sticky header
      var lastScrollTop = 0,
        delta = 5,
        navBar = $('#navbar', context),
        navBarHeight = navBar.outerHeight();

      var throttledSticky = $.throttle(250, function() {stickyHeader();});

      if (navBar) {
        $(navBar).once('radialHeaderHeight', function() {
          $(window).on('scroll', throttledSticky);
        });
      }

      function stickyHeader() {
        var st = $(window).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if (st >= lastScrollTop && st >= 50){
          navBar
            .removeClass('down top')
            .addClass('up');
        }
        else if (st + $(window).height() < $(document).height() && st > navBarHeight) {
          navBar
            .addClass('down');
        }
        else if (st <= 5) {
          navBar
            .removeClass('down up')
            .addClass('top');
        }
        lastScrollTop = st;
      }
    }
  };

  /**
   * Add a hover class to the main navbar whilst hovering
   */
  Drupal.behaviors.radialTriggerNavResize = {
    attach: function(context, settings) {
      context = context || document;
      settings = settings || Drupal.settings;

      var $mainMenu = $('#mainmenu', context);
      if ($mainMenu) {
        $('.navbar-nav > li', $mainMenu).once('radialTriggerNavResize').hover(function() {
          $('.fw').addClass('hovering');
        }, function() {
          $('.fw').removeClass('hovering');
        });
      }
    }
  };

  /**
   * Randomize the header color
   */
  Drupal.behaviors.radialRandomizeHeaderColor = {
    attach: function(context, settings) {
      context = context || document;
      settings = settings || Drupal.settings;

      var $header = $('#navbar', context);
      if ($header) {
        $header.once('radialRandomizeHeaderColor', function() {
          var colors = ['blue', 'yellow', 'red', 'purple'];
          var randomColor = colors[Math.floor(Math.random() * (colors.length))];
          $header.addClass(randomColor);
        });
      }
    }
  };

  // markup modifs for insight nodes (resources)
  Drupal.behaviors.radialInsights = {
    attach: function(context, settings) {
      context = context || document;
      settings = settings || Drupal.settings;

      var $types = $('.node-type-publication, .node-type-video, .node-type-webinar', context);
      $types
        .find('h1')
        .once()
        .prependTo('article');

      $types
        .find('.main-container .block-menu, .main-container .resources-detail')
        .wrapAll('<div class="container" />');

    }
  };

  // markup modifs for insight nodes (resources)
  Drupal.behaviors.radialBlog = {

    attach: function(context, settings) {
      context = context || document;
      settings = settings || Drupal.settings;

      var $types = $('.node-type-blog-post, .node-type-press-article', context);
      $types
        .find('h1')
        .once()
        .prependTo('article');

    }
  };

  // markup modifs for insight nodes (resources)
  Drupal.behaviors.radialAbout = {

    attach: function(context, settings) {
      context = context || document;
      settings = settings || Drupal.settings;

      var $aboutMenu = $('.section-about .press-room-header', context);
      $aboutMenu
        .once()
        .prependTo('.about-nav');

    }
  };

  // markup modifs for press room nodes
  Drupal.behaviors.radialPress = {

    attach: function(context, settings) {
      context = context || document;
      settings = settings || Drupal.settings;

      var $pressNav = $('.node-type-presskit .press-room-header, .node-type-press-article .press-room-header', context);
      var $pressMedia = $('.node-type-presskit #block-multiblock-1', context);
      $pressNav
        .once()
        .prependTo('.press-nav');
      $pressMedia
        .once()
        .prependTo('.node-presskit #presskit-content');

    }
  };

  Drupal.behaviors.radialSVG = {

    attach: function(context, settings) {
      context = context || document;
      settings = settings || Drupal.settings;

      var mySVGsToInject = $('img.svg');
      // Do the injection
      SVGInjector(mySVGsToInject);


  }
};


  /**
   * Polyfill for older browsers
   */
  Drupal.behaviors.radialPolyfill = {
    attach: function(context, settings) {
      context = context || document;
      settings = settings || Drupal.settings;

      var $body = $('body', context);
      if ($body) {
        $body.once('radialPolyfill', function() {
          // add polyfill for css filters
          yepnope({
            test: Modernizr.cssfilters,
            nope: [
              '/sites/all/themes/radial/js/vendor/filterPolyfill/setup.js',
              '/sites/all/themes/radial/js/vendor/filterPolyfill/cssParser.js',
              '/sites/all/themes/radial/js/vendor/filterPolyfill/css-filters-polyfill.js'
            ]
          });

          // add polyfill for css pseudo elements
          yepnope({
            test: Modernizr.nthchild,
            nope: [
              '/sites/all/themes/radial/js/vendor/selectivizr-min.js'
            ]
          });
        });
      }
    }
  };

})(jQuery, Drupal, window, document);
;