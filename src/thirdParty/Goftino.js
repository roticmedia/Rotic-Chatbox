const $ = require("jquery");

const hide = () => {
    try {
        window.addEventListener('goftino_ready', function () {
            let style = document.createElement("style");
            style.type = "text/css"
            style.id = "rotic-hotfix"
            style.appendChild(document.createTextNode(""));
            style.innerHTML = "#goftino_w { display: none !important; }"
            document.body.appendChild(style)
        });
    } catch (err) {
    }
}

const show = () => {
    try {
        $("#rotic-hotfix")[0].disabled = true;

        var date = new Date()
        date.setTime(date.getTime() + 86400000)
        let expire = "expires=" + date.toUTCString();
        document.cookie = `__rotic-driver=true;${expire};path=/`
    } catch (err) {
        console.log(err)
    }
}


const open = () => {
    try {
        let script = document.createElement("script");
        script.innerHTML = `
            Goftino.open(); 
        `
        document.body.appendChild(script)
    } catch (err) {}
}

const showInitMessage = () => {
    try {
        setTimeout(() => {
            let script = document.createElement("script");
            script.innerHTML = `
            Goftino.sendMessage({
                text: "شما از چت بات هوشمند روتیک به اینجا منتقل شدید"
            }); 
        `
            document.body.appendChild(script)

            setTimeout(() => {
                let script1 = document.createElement("script");
                script1.innerHTML = `
                    Goftino.sendMessage({
                        text: "در خواست شما چیست"
                    }); 
                `
                document.body.appendChild(script1)
            }, 1000)
        }, 1000)

    } catch (err) {}
}

module.exports = {
    hide,
    show,
    open,
    showInitMessage
}