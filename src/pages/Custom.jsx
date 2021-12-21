import styled from "styled-components";
import React, { useState ,useRef} from "react";

export function Custom(){
    const [result, setResult] = useState("");
    const img = useRef();

    //   const iframeElement = document.getElementById("browserboard");
    
      const iFrameElement = img && img.current;
      function sendBrowserboardMessage(message) {        
        console.log("act");
        iFrameElement.contentWindow.postMessage(message, "https://browserboard.com");
      }
      window.addEventListener("message", (e) => {
        switch (e.data.action) {
          case "updateDownloadImageProgress":
            console.log(e.data);
            break; /* handle the action */
            case "downloadImageComplete":
            console.log(e.data);
            break; /* handle the action */
          /* the rest of this file will explain what actions exist and how to handle them. */
        }
      });

    return(<>
        <Cover ref={img} src="https://browserboard.com/whiteboard/8JU2aujSPEPVhJMfAKdHZP?key=HdhMiwDGmWoUoFjz6DyxzW">
        </Cover>
        <button onClick={sendBrowserboardMessage({ "action": "downloadImage" })}>버으튼!</button>
        </>
    )
}

const Cover = styled.iframe`
  width: 100%;
  height: 500px
`;