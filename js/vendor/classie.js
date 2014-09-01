/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
(function(l){function i(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}var m,k,j;if("classList" in document.documentElement){m=function(b,a){return b.classList.contains(a)};k=function(b,a){b.classList.add(a)};j=function(b,a){b.classList.remove(a)}}else{m=function(b,a){return i(a).test(b.className)};k=function(b,a){if(!m(b,a)){b.className=b.className+" "+a}};j=function(b,a){b.className=b.className.replace(i(a)," ")}}function h(b,a){var c=m(b,a)?j:k;c(b,a)}var n={hasClass:m,addClass:k,removeClass:j,toggleClass:h,has:m,add:k,remove:j,toggle:h};if(typeof define==="function"&&define.amd){define(n)}else{l.classie=n}})(window);