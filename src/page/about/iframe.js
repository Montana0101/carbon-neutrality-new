import React, { useEffect } from 'react'
import { screen_scale } from "../../util/rem"
import { IframeUrl } from "../../lib/const"

const AboutLeague = () => {
    useEffect(() => {
        // document.getElementsByTagName("html")[0].style.overflowY = "hidden"
        document.getElementsByTagName("html")[0].style.overflowX = "hidden"
        // window.onresize = function () {
        //     screen_scale()
        // }
    }, [])


    return (
        <div className="screen_1" style={{
            height: "100vh",
            width: '100%'
            // padding:'0 0.6rem 0 0.3rem !important'
        }}>
            <iframe
                title="定位导航"
                style={{
                    margin: '0rem !important',
                    position:"relative",
                    top:"-0.2rem",
                    left:"-0.5rem",
                    border: "0px",
                    width: "1320px",
                    height: `${100 * screen_scale()[1]}%`,
                    overflowX: "hidden",
                    transform: `scale(${screen_scale()[0]})`,
                    transformOrigin: "0 0"
                }}
                src={`${IframeUrl}/about/jiagou.html`}
            />
        </div>
    )
}

export default AboutLeague