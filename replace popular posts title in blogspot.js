    function getData5sLink(x) { window.open("https://www.data5s.net/search?q=" + x.innerHTML, "_blank") }

    function showTopFileId(e, fileId) {

        const showButton = document.getElementsByClassName("showIdButton");
        for (let i = 0; i < showButton.length; i++) {
            showButton[i].innerHTML = "Get file ID";
            document.getElementById("id" + (1 + i)).style.display = "none";
        }

        const timeCounter = setInterval(counter, 1000);

        let t = 16;

        function counter() {
            t -= 1;
            e.innerHTML = "ID sẽ được lấy ra sau " + t + " giây";

            if (t === 0) {
                clearInterval(timeCounter);
                document.getElementById(fileId).style.display = "";
            }
        }

    }
