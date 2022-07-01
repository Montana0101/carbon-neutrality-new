import React, { useEffect } from 'react'
import { screen_scale } from "../../util/rem"
import { IframeUrl } from "../../lib/const"

const IframeStruct = () => {
    useEffect(() => {
        // document.getElementsByTagName("html")[0].style.overflowY = "hidden"
        document.getElementsByTagName("html")[0].style.overflowX = "hidden"
    }, [])


    return (
        <div style={{height:"auto",width:"100%",border:"1px solid red"}}>
             <iframe
                // ref={contentIFrameRef}
                title="定位导航"
                style={{
                    border: "2px solid green",
                    // margin:"0 auto",
                    width: "100%",
                    height: `700px`,
                    overflowX: "hidden",
                    transform: `scale(${screen_scale()[0]})`,
                    transformOrigin: "50% 50%"
                }}
                src={`${IframeUrl}/struct/jiagou.html`}
            />
        </div>
    )
}

export default IframeStruct