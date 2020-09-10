
/** Cookies EU banner v1.2.13 - Manage display of banner to accept/reject cookies from tracking services like Google Analytics - alex-d.github.io/Cookies-EU-banner/ - License MIT - Author : Alex-D / alex-d.fr */
!function(e,t,o){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.CookiesEuBanner=t()}(window,function(){"use strict";var e,t=window.document;return e=function(t,o,i){return this instanceof e?(this.cookieTimeout=33696e6,this.bots=/bot|googlebot|crawler|spider|robot|crawling/i,this.cookieName="hasConsent",this.trackingCookiesNames=["__utma","__utmb","__utmc","__utmt","__utmv","__utmz","_ga","_gat","_gid"],this.launchFunction=t,this.waitAccept=o||!1,void this.init()):new e(t)},e.prototype={init:function(){return this.isBot()||!this.isToTrack()||this.hasConsent()===!1?!1:this.hasConsent()===!0?(this.launchFunction(),!0):(this.showBanner(),void(this.waitAccept||this.setCookie(this.cookieName,!0)))},showBanner:function(){var e=this,o=t.getElementById("cookies-eu-banner"),i=t.getElementById("cookies-eu-reject"),n=t.getElementById("cookies-eu-accept"),s=t.getElementById("cookies-eu-more"),a=void 0===o.dataset.waitRemove?0:parseInt(o.dataset.waitRemove);o.style.display="block",s&&this.addEventListener(s,"click",function(){e.deleteCookie(e.cookieName)}),n&&this.addEventListener(n,"click",function(){e.removeBanner(o,a),e.setCookie(e.cookieName,!0),e.launchFunction()}),i&&this.addEventListener(i,"click",function(){e.removeBanner(o,a),e.setCookie(e.cookieName,!1),e.deleteTrackingCookies()})},hasConsent:function(){return t.cookie.indexOf(this.cookieName+"=true")>-1?!0:t.cookie.indexOf(this.cookieName+"=false")>-1?!1:null},isBot:function(){return this.bots.test(navigator.userAgent)},isToTrack:function(){var e=navigator.doNotTrack||navigator.msDoNotTrack||window.doNotTrack;return null!==e&&void 0!==e?e&&"yes"!==e&&1!==e&&"1"!==e:!0},deleteTrackingCookies:function(){var e=this;this.trackingCookiesNames.map(function(t){e.deleteCookie(t)})},setCookie:function(e,o){var i=new Date;i.setTime(i.getTime()+this.cookieTimeout),t.cookie=e+"="+o+";expires="+i.toGMTString()+";path=/"},deleteCookie:function(e){var o=t.location.hostname;0===o.indexOf("www.")&&(o=o.substring(4)),t.cookie=e+"=; domain=."+o+"; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/",t.cookie=e+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/"},addEventListener:function(e,o,i){t.addEventListener?e.addEventListener(o,i):e.attachEvent&&e.attachEvent("on"+o,i)},removeBanner:function(e,t){setTimeout(function(){e.parentNode.removeChild(e)},t)}},e});



// GDPR CONSENT POPUP
new CookiesEuBanner(function(){
		// callback after accepting the GDPR consent agreement
}, true);