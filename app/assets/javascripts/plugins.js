/*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */
(function(a,d,p){a.fn.backstretch=function(c,b){(c===p||0===c.length)&&a.error("No images were supplied for Backstretch");0===a(d).scrollTop()&&d.scrollTo(0,0);return this.each(function(){var d=a(this),g=d.data("backstretch");if(g){if("string"==typeof c&&"function"==typeof g[c]){g[c](b);return}b=a.extend(g.options,b);g.destroy(!0)}g=new q(this,c,b);d.data("backstretch",g)})};a.backstretch=function(c,b){return a("body").backstretch(c,b).data("backstretch")};a.expr[":"].backstretch=function(c){return a(c).data("backstretch")!==p};a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5E3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},q=function(c,b,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{});this.images=a.isArray(b)?b:[b];a.each(this.images,function(){a("<img />")[0].src=this});this.isBody=c===document.body;this.$container=a(c);this.$root=this.isBody?l?a(d):a(document):this.$container;c=this.$container.children(".backstretch").first();this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(c=this.$container.css("position"),b=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===b?0:b,background:"none"}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&l?"fixed":"absolute"});this.index=0;this.show(this.index);a(d).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===d.pageYOffset&&(d.scrollTo(0,1),this.resize())},this))};q.prototype={resize:function(){try{var a={left:0,top:0},b=this.isBody?this.$root.width():this.$root.innerWidth(),e=b,g=this.isBody?d.innerHeight?d.innerHeight:this.$root.height():this.$root.innerHeight(),j=e/this.$img.data("ratio"),f;j>=g?(f=(j-g)/2,this.options.centeredY&&(a.top="-"+f+"px")):(j=g,e=j*this.$img.data("ratio"),f=(e-b)/2,this.options.centeredX&&(a.left="-"+f+"px"));this.$wrap.css({width:b,height:g}).find("img:not(.deleteable)").css({width:e,height:j}).css(a)}catch(h){}return this},show:function(c){if(!(Math.abs(c)>this.images.length-1)){var b=this,e=b.$wrap.find("img").addClass("deleteable"),d={relatedTarget:b.$container[0]};b.$container.trigger(a.Event("backstretch.before",d),[b,c]);this.index=c;clearInterval(b.interval);b.$img=a("<img />").css(s).bind("load",function(f){var h=this.width||a(f.target).width();f=this.height||a(f.target).height();a(this).data("ratio",h/f);a(this).fadeIn(b.options.speed||b.options.fade,function(){e.remove();b.paused||b.cycle();a(["after","show"]).each(function(){b.$container.trigger(a.Event("backstretch."+this,d),[b,c])})});b.resize()}).appendTo(b.$wrap);b.$img.attr("src",b.images[c]);return b}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(c){a(d).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);c||this.$wrap.remove();this.$container.removeData("backstretch")}};var l,f=navigator.userAgent,m=navigator.platform,e=f.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],h=f.match(/Fennec\/([0-9]+)/),h=!!h&&h[1],n=f.match(/Opera Mobi\/([0-9]+)/),t=!!n&&n[1],k=f.match(/MSIE ([0-9]+)/),k=!!k&&k[1];l=!((-1<m.indexOf("iPhone")||-1<m.indexOf("iPad")||-1<m.indexOf("iPod"))&&e&&534>e||d.operamini&&"[object OperaMini]"==={}.toString.call(d.operamini)||n&&7458>t||-1<f.indexOf("Android")&&e&&533>e||h&&6>h||"palmGetResource"in d&&e&&534>e||-1<f.indexOf("MeeGo")&&-1<f.indexOf("NokiaBrowser/8.5.0")||k&&6>=k)})(jQuery,window);

//SELECT SWAP
!function(b){var a=function(d,c,f){if(f){f.stopPropagation();f.preventDefault()}this.$element=b(d);this.$newElement=null;this.button=null;this.options=b.extend({},b.fn.selectpicker.defaults,this.$element.data(),typeof c=="object"&&c);if(this.options.title==null){this.options.title=this.$element.attr("title")}this.val=a.prototype.val;this.render=a.prototype.render;this.refresh=a.prototype.refresh;this.selectAll=a.prototype.selectAll;this.deselectAll=a.prototype.deselectAll;this.init()};a.prototype={constructor:a,init:function(d){if(!this.options.container){this.$element.hide()}else{this.$element.css("visibility","hidden")}this.multiple=this.$element.prop("multiple");var f=this.$element.attr("class")!==undefined?this.$element.attr("class").split(/\s+/):"";var g=this.$element.attr("id");this.$element.after(this.createView());this.$newElement=this.$element.next(".gin-select");if(this.options.container){this.selectPosition()}this.button=this.$newElement.find("> button");if(g!==undefined){this.button.attr("id",g);b('label[for="'+g+'"]').click(b.proxy(this,function(){this.$newElement.find("button#"+g).focus()}))}for(var c=0;c<f.length;c++){if(f[c]!="selectpicker"){this.$newElement.addClass(f[c])}}if(this.multiple){this.$newElement.addClass("show-tick")}this.button.addClass(this.options.style);this.checkDisabled();this.checkTabIndex();this.clickListener();this.$element.bind("DOMNodeInserted DOMNodeRemoved",b.proxy(this.refresh,this));this.render();this.setSize()},createDropdown:function(){var c="<div class='btn-group gin-select'><button class='btn dropdown-toggle clearfix' data-toggle='dropdown'><span class='filter-option pull-left'></span><span class='caret'></span></button><ul class='dropdown-menu' role='menu'></ul></div>";return b(c)},createView:function(){var c=this.createDropdown();var d=this.createLi();c.find("ul").append(d);return c},reloadLi:function(){this.destroyLi();$li=this.createLi();this.$newElement.find("ul").append($li)},destroyLi:function(){this.$newElement.find("li").remove()},createLi:function(){var h=this;var e=[];var g=[];var c="";this.$element.find("option").each(function(){e.push(b(this).text())});this.$element.find("option").each(function(k){var n=b(this).attr("class")!==undefined?b(this).attr("class"):"";var m=b(this).text();var l=b(this).data("subtext")!==undefined?'<small class="muted">'+b(this).data("subtext")+"</small>":"";m+=l;if(b(this).parent().is("optgroup")&&b(this).data("divider")!=true){if(b(this).index()==0){var j=b(this).parent().attr("label");var i=b(this).parent().data("subtext")!==undefined?'<small class="muted">'+b(this).parent().data("subtext")+"</small>":"";j+=i;if(b(this)[0].index!=0){g.push('<div class="div-contain"><div class="divider"></div></div><dt>'+j+"</dt>"+h.createA(m,"opt "+n))}else{g.push("<dt>"+j+"</dt>"+h.createA(m,"opt "+n))}}else{g.push(h.createA(m,"opt "+n))}}else{if(b(this).data("divider")==true){g.push('<div class="div-contain"><div class="divider"></div></div>')}else{g.push(h.createA(m,n))}}});if(e.length>0){for(var d=0;d<e.length;d++){var f=this.$element.find("option").eq(d);c+="<li rel="+d+">"+g[d]+"</li>"}}if(this.$element.find("option:selected").length==0&&!h.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")}return b(c)},createA:function(d,c){return'<a tabindex="-1" href="#" class="'+c+'"><span class="pull-left">'+d+'</span><i class="icon-ok check-mark"></i></a>'},render:function(){var f=this;this.$element.find("option").each(function(g){f.setDisabled(g,b(this).is(":disabled")||b(this).parent().is(":disabled"));f.setSelected(g,b(this).is(":selected"))});var e=this.$element.find("option:selected").map(function(g,h){if(b(this).attr("title")!=undefined){return b(this).attr("title")}else{return b(this).text()}}).toArray();var d=e.join(", ");if(f.multiple&&f.options.selectedTextFormat.indexOf("count")>-1){var c=f.options.selectedTextFormat.split(">");if((c.length>1&&e.length>c[1])||(c.length==1&&e.length>=2)){d=e.length+" of "+this.$element.find("option").length+" selected"}}if(!d){d=f.options.title!=undefined?f.options.title:f.options.noneSelectedText}f.$newElement.find(".filter-option").html(d)},setSize:function(){var h=this;var d=this.$newElement.find(".dropdown-menu");var j=d.find("li > a");var m=this.$newElement.addClass("open").find(".dropdown-menu li > a").outerHeight();this.$newElement.removeClass("open");var f=d.find("li .divider").outerHeight(true);var e=this.$newElement.offset().top;var i=this.$newElement.outerHeight();var c=parseInt(d.css("padding-top"))+parseInt(d.css("padding-bottom"))+parseInt(d.css("border-top-width"))+parseInt(d.css("border-bottom-width"));if(this.options.size=="auto"){function n(){var o=e-b(window).scrollTop();var r=window.innerHeight;var p=c+parseInt(d.css("margin-top"))+parseInt(d.css("margin-bottom"))+2;var q=r-o-i-p;menuHeight=q;if(h.$newElement.hasClass("dropup")){menuHeight=o-p}if((d.find("li").length+d.find("dt").length)>3){minHeight=m*3+p-2}else{minHeight=0}d.css({"max-height":menuHeight+"px","overflow-y":"auto","min-height":minHeight+"px"})}n();b(window).resize(n);b(window).scroll(n)}else{if(this.options.size&&this.options.size!="auto"&&d.find("li").length>this.options.size){var l=d.find("li > *").filter(":not(.div-contain)").slice(0,this.options.size).last().parent().index();var k=d.find("li").slice(0,l+1).find(".div-contain").length;menuHeight=m*this.options.size+k*f+c;d.css({"max-height":menuHeight+"px","overflow-y":"auto"})}}if(this.options.width=="auto"){this.$newElement.find(".dropdown-menu").css("min-width","0");var g=this.$newElement.find(".dropdown-menu").css("width");this.$newElement.css("width",g);if(this.options.container){this.$element.css("width",g)}}else{if(this.options.width&&this.options.width!="auto"){this.$newElement.css("width",this.options.width);if(this.options.container){this.$element.css("width",this.options.width)}}}},selectPosition:function(){var d=this.$element.offset().top;var c=this.$element.offset().left;this.$newElement.appendTo(this.options.container);this.$newElement.css({position:"absolute",top:d+"px",left:c+"px"})},refresh:function(){this.reloadLi();this.render();this.setSize();this.checkDisabled();if(this.options.container){this.selectPosition()}},setSelected:function(c,d){if(d){this.$newElement.find("li").eq(c).addClass("selected")}else{this.$newElement.find("li").eq(c).removeClass("selected")}},setDisabled:function(c,d){if(d){this.$newElement.find("li").eq(c).addClass("disabled")}else{this.$newElement.find("li").eq(c).removeClass("disabled")}},checkDisabled:function(){if(this.$element.is(":disabled")){this.button.addClass("disabled");this.button.click(function(c){c.preventDefault()});this.button.on("focusin",function(){b(this).blur()})}else{if(!this.$element.is(":disabled")&&this.button.hasClass("disabled")){this.button.removeClass("disabled");this.button.click(function(){return true})}}},checkTabIndex:function(){if(this.$element.is("[tabindex]")){var c=this.$element.attr("tabindex");this.button.attr("tabindex",c)}},clickListener:function(){var c=this;b("body").on("touchstart.dropdown",".dropdown-menu",function(d){d.stopPropagation()});this.$newElement.on("click","li a",function(j){var h=b(this).parent().index(),i=b(this).parent(),d=i.parents(".gin-select"),f=c.$element[0].selectedIndex;if(c.multiple){j.stopPropagation()}j.preventDefault();if(c.$element.not(":disabled")&&!b(this).parent().hasClass("disabled")){if(!c.multiple){c.$element.find("option").removeAttr("selected");c.$element.find("option").eq(h).prop("selected",true).attr("selected","selected")}else{var g=c.$element.find("option").eq(h).prop("selected");if(g){c.$element.find("option").eq(h).removeAttr("selected")}else{c.$element.find("option").eq(h).prop("selected",true).attr("selected","selected")}}d.find(".filter-option").html(i.text());d.find("button").focus();if(f!=h){c.$element.trigger("change")}c.render()}});this.$newElement.on("click","li.disabled a, li dt, li .div-contain",function(d){d.preventDefault();d.stopPropagation();$select=b(this).parent().parents(".gin-select");$select.find("button").focus()});this.$element.on("change",function(d){c.render()})},val:function(c){if(c!=undefined){this.$element.val(c);this.$element.trigger("change");return this.$element}else{return this.$element.val()}},selectAll:function(){this.$element.find("option").prop("selected",true).attr("selected","selected");this.render()},deselectAll:function(){this.$element.find("option").prop("selected",false).removeAttr("selected");this.render()},};b.fn.selectpicker=function(e,f){var c=arguments;var g;var d=this.each(function(){if(b(this).is("select")){var l=b(this),k=l.data("selectpicker"),h=typeof e=="object"&&e;if(!k){l.data("selectpicker",(k=new a(this,h,f)))}else{if(h){for(var j in h){k.options[j]=h[j]}}}if(typeof e=="string"){property=e;if(k[property] instanceof Function){[].shift.apply(c);g=k[property].apply(k,c)}else{g=k.options[property]}}}});if(g!=undefined){return g}else{return d}};b.fn.selectpicker.defaults={style:null,size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected",width:null,container:false}}(window.jQuery);
//END SELECT

// SELECT DROP DOWN
!function(e){"use strict";function r(){e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;if(!n){n=t.attr("href");n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")}r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;s=i(n);o=s.hasClass("open");r();if(!o){s.toggleClass("open")}n.focus();return false},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this);n.preventDefault();n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r);a=u.hasClass("open");if(!a||a&&n.keyCode==27){if(n.which==27)u.find(t).focus();return r.click()}s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus"));if(n.keyCode==38&&f>0)f--;if(n.keyCode==40&&f<s.length-1)f++;if(!~f)f=0;s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");if(!i)r.data("dropdown",i=new n(this));if(typeof t=="string")i[t].call(r)})};e.fn.dropdown.Constructor=n;e.fn.dropdown.noConflict=function(){e.fn.dropdown=s;return this};e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown-menu",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery)
// END DROPDOWN