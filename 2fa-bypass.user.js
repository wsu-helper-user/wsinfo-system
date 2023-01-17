// ==UserScript==
// @name         우송대학교 정보시스템 이중인증 무시
// @version      0.1
// @description  disable two factor login at wsinfo
// @author       wsu-helper-user
// @match        https://wsinfo.wsu.ac.kr/
// @run-at       document-end
// @updateURL    https://github.com/wsu-helper-user/wsinfo-system/raw/main/2fa-bypass.user.js
// @grant        none
// ==/UserScript==

(function(login) {
    'use strict';
    window.addEventListener('load', function() {
        custom.com.openCsywP040 = function() {
            login();
        }
    }, false);
})(function() {
    fetch("https://wsinfo.wsu.ac.kr/system/simpleLogin", {
        "headers": {
            "accept": "application/json",
            "accept-language": "en,ko;q=0.9,en-US;q=0.8",
            "content-type": "application/json; charset=\"UTF-8\"",
            "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google 
Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "submissionid": "mf_sbm_simpleLogin"
        },
        "referrer": "https://wsinfo.wsu.ac.kr/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(e => {
        location.reload()
    });
});
