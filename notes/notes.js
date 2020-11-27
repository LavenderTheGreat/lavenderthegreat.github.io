function makeRequest(method, url) {
    console.log("Requesting " + url)
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            console.log("Retrieved " + url)
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

async function loadFile(name){

    var converter = new showdown.Converter(),
        htmlText      = converter.makeHtml(await makeRequest("GET", name));
    
    console.log(htmlText)

    document.getElementById("article").innerHTML = htmlText

}

const url = new URL(window.location.href)
let args = url.searchParams

loadFile("../md/" + args.get("a") + ".md")