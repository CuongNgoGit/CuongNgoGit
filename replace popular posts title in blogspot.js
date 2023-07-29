  function getData5sLink(x) {window.open(&quot;https://www.data5s.net/search?q=&quot; + x.innerHTML, &quot;_blank&quot;)}
  
    function showTopFileId(e, fileId) {

    const showButton = document.getElementsByClassName(&#39;showIdButton&#39;);
    for (let i = 0; i &lt; showButton.length; i++) {
      showButton[i].innerHTML = &#39;Get file ID&#39;;
      document.getElementById(&#39;id&#39; + (1 + i)).style.display = &#39;none&#39;;
    }

    const timeCounter = setInterval(counter, 1000);

    let t = 16;

    function counter() {
      t -= 1;
      e.innerHTML = &quot;ID sẽ được lấy ra sau &quot; + t + &quot; giây&quot;;

      if (t === 0) {
        clearInterval(timeCounter);
        document.getElementById(fileId).style.display = &quot;&quot;;
      }
    }

  }
