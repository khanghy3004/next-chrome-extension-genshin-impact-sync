export function getAllCookies(callback) {
    chrome.cookies.getAll({url: "https://www.hoyolab.com"}, function (cookies) {
        if (cookies.length > 0) {
            let cookieString = "";
            for (let i = 0; i < cookies.length; i++) {
                cookieString += cookies[i].name + "=" + cookies[i].value + ";";
            }
            callback(cookieString);
        } else {
            callback([]);
        }
    });
    // callback('_MHYUUID=2002d1c8-4f29-431e-8133-fe1b6c68278f; mi18nLang=en-us; _gid=GA1.2.1314719839.1684586054; G_ENABLED_IDPS=google; DEVICEFP_SEED_ID=a9a2d72ac9563498; DEVICEFP_SEED_TIME=1684586054110; DEVICEFP=38d7ed6a26de7; ltoken=NYVFhsVy3J57ZX4hiidimLjtynUVn7GG2rdE5M4Y; ltuid=23482809; cookie_token=g9wMIWEA8ZZUNA0wcEDnAe0zuPLnlTmk61BtPkQl; account_id=23482809; _ga_1CHR121QPG=GS1.1.1684651054.1.1.1684651058.0.0.0; _ga_JTLS2F53NR=GS1.1.1684650940.2.1.1684652133.0.0.0; _ga=GA1.2.1775088705.1684586054; _gat_gtag_UA_206868027_11=1')
}