import styled from "styled-components";
import React, { useState } from "react";

export function Custom(){
    const [result, setResult] = useState("");

    //   const iframeElement = document.getElementById("browserboard");
    //   function sendBrowserboardMessage(message) {
    //     iframeElement.contentWindow.postMessage(message, "https://browserboard.com");
    //   }

    return(<>
        <Cover id="browserboard" src="https://browserboard.com/whiteboard/8JU2aujSPEPVhJMfAKdHZP?key=HdhMiwDGmWoUoFjz6DyxzW">
        </Cover>
        {/* <button onClick={sendBrowserboardMessage({ "action": "downloadImage" })}>버으튼!</button> */}
        </>
    )
}

const Cover = styled.iframe`
  width: 50%;
  height: 600px
`;