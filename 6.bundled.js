(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1669:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=n(534),u=n(993);function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(b,e);var t,n,a,l,m=(t=b,function(){var e,n=d(t);if(y()){var r=d(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return p(this,e)});function b(){var e;i(this,b);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(s(e=m.call.apply(m,[this].concat(n))),"callPlayer",o.callPlayer),h(s(e),"duration",null),h(s(e),"currentTime",null),h(s(e),"secondsLoaded",null),h(s(e),"mute",(function(){e.callPlayer("mute")})),h(s(e),"unmute",(function(){e.callPlayer("unmute")})),h(s(e),"ref",(function(t){e.iframe=t})),e}return n=b,(a=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;(0,o.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((function(e){t.iframe&&(t.player=new e.Player(t.iframe),t.player.setLoop(t.props.loop),t.player.on("ready",t.props.onReady),t.player.on("play",t.props.onPlay),t.player.on("pause",t.props.onPause),t.player.on("seeked",t.props.onSeek),t.player.on("ended",t.props.onEnded),t.player.on("error",t.props.onError),t.player.on("timeupdate",(function(e){var n=e.duration,r=e.seconds;t.duration=n,t.currentTime=r})),t.player.on("buffered",(function(e){var n=e.percent;t.duration&&(t.secondsLoaded=t.duration*n)})),t.props.muted&&t.player.mute())}),this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("setCurrentTime",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e=this.props.url.match(u.MATCH_URL_STREAMABLE)[1];return r.default.createElement("iframe",{ref:this.ref,src:"https://streamable.com/o/".concat(e),frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allowFullScreen:!0})}}])&&c(n.prototype,a),l&&c(n,l),b}(r.Component);t.default=m,h(m,"displayName","Streamable")}}]);
//# sourceMappingURL=6.bundled.js.map