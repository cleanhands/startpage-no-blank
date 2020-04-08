// ==UserScript==
// @name        Startpage No Blank
// @namespace   https://github.com/cleanhands
// @match       https://www.startpage.com/sp/search
// @match       https://www.startpage.com/do/search
// @match       https://www.startpage.com/do/dsearch*
// @match       https://startpage.com/sp/search
// @match       https://startpage.com/do/search
// @match       https://startpage.com/do/dsearch*
// @grant       none
// @version     1.1
// @author      cleanhands
// @description Remove target="_blank" from startpage results
// @run-at      document-end
// ==/UserScript==

(function () {
  'use strict';
  const links = document.querySelectorAll('a[target=_blank]');
  for (const link of links) {
    link.removeAttribute('target');
  }
})();
