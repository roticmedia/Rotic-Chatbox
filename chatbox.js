$(document).ready(function () {
    $("body").append(appendChatbox());
    var checkShowed = false;
    $("#rotic-btn-show").click(function () {
        anime({
            targets: "#rotic-btn-show",
            translateY: {
                delay: 0,
                easing: "easeInExpo",
                value: 250,
                duration: 1000,
            },
            opacity: {
                value: 0,
                easing: "easeInExpo",
                duration: 900,
            },
        });
        if (checkShowed == false) {
            $(".rotic-chatbox").css({
                visibility: "visible",
            });
            anime({
                targets: ".rotic-chatbox",
                translateY: {
                    value: -624,
                    easing: "easeOutExpo",
                    delay: 1100,
                },
                opacity: {
                    value: 1,
                    easing: "easeOutExpo",
                    delay: 1300,
                },
            });
            checkShowed = true;
        }
    });
    $(".rotic-close-text").click(function () {
        anime({
            targets: ".rotic-chatbox",
            translateY: {
                value: +624,
                easing: "easeInExpo",
            },
            opacity: {
                value: 0,
                easing: "easeInExpo",
            },
            duration: 1000,
        });
        checkShowed = false;
        anime({
            targets: "#rotic-btn-show",
            translateY: {
                delay: 1100,
                easing: "easeOutExpo",
                value: 0,
                duration: 1000,
            },
            opacity: {
                value: 1,
                easing: "easeOutExpo",
                duration: 900,
                delay: 1300,
            },
        });
    });
});

function appendChatbox() {
    return `<div class="rotic-chatbox">
    <div class="rotic-close-box">
        <img src="https://rotic.ir/images/logo/Theme.png" alt="rotic" class="rotic-image-logo__img"> <p class="rotic-image-logo__p">powered by </p>
        <div class="rotic-close-text">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#5FC5C4" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="#000" /></svg>
        </div>
    </div>
    <iframe class="rotic-iframe-chatbox" src="https://rotic.ir/widgets/6a105d7f17b029f067615f47b6e6b432/6a105d7f17b029f067615f47b6e6b43211" frameborder="0"></iframe>
</div>
<div id="rotic-btn-show">
    <img src="https://rotic.ir/images/icon/kavina.jpg" id="rotic-image"/>
</div>
<style>
        @font-face {
            font-family: 'IranSans';
            src: url("http://mincdn.ir/font/IranSans/IRANSansWeb.woff") format("woff");
            font-weight: normal;
        }

        @media only screen and (max-width: 768px) {
            .rotic-chatbox {
                right: 0 !important;
                width: 100% !important;
                height: 100% !important;
                bottom: -624px !important;
            }
        }
        @media only screen and (min-width: 768px) {
            .rotic-chatbox {
                right: 36px !important;
                width: 300px !important;
                height: 553px !important;
                bottom: -600px !important;
            }
        }
        .rotic-chatbox {
            z-index: 9999999;
            position: fixed;
            bottom: -600px;
            opacity: 0;
            right: 36px;
            width: 300px;
            height: 553px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            box-shadow: 5px 5px 20px lightgray;
            font-family: IranSans ;
            visibility: hidden;
            padding: 0 !important;
        }

        #rotic-btn-show {
            z-index: 99999;
            position: fixed;
            background: none;
            border: none;
            bottom: 180px;
            border-radius: 50%;
            right: 40px;
            box-shadow: 10px 10px 30px lightgray;
        }
        #rotic-image {
            height: 72px;
            width: 72px;
            border-radius: 50%;
        }
        #rotic-btn-show:hover {
            cursor: pointer;
        }
        .rotic-close-box {
            position: fixed;
            z-index: 999;
            top: 0;
            right: 0;
            height: 41px !important;
            width: 100%;
            background: white;
            border-top: 1px solid #5BC5CB;
        }
        .rotic-close-text {
            position: fixed;
            z-index: 9999;
            top: 20px;
            right: 0px;
            transform: translate(-50%, -50%);
            color:black;
            font-weight: 500;
            font-size: 24px;
        }
        .rotic-close-text:hover {
            cursor: pointer;
        }
        .rotic-image-logo__img {
            height: 24px;
            position: absolute;
            transform: translate(0, -50%);
            top: 20px;
            left: 70px;
        }
        .rotic-image-logo__p {
            position: absolute;
            top: 20px;
            left: 10px;
            transform: translate(0, -50%);
            font-size: 12px;
            font-weight: lighter;
            margin: 0;
            color: lightgray;
        }
        .rotic-iframe-chatbox {
            font-family: IranSans;
            position: fixed;
            top: 41px;
            right: 0;
            width: 100%;
            height: 100%;
        }
    </style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous"></script>
`
}