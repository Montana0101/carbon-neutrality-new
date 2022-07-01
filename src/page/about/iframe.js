import React, { useEffect,useRef} from 'react'
import { screen_scale } from "../../util/rem"
import { IframeUrl } from "../../lib/const"
import $ from 'jquery'

const ifr = require('../../static/联盟架构/jiagou.html')
const AboutLeague = () => {
    const ifr = useRef(null)
    useEffect(() => {
        // document.getElementsByTagName("html")[0].style.overflowY = "hidden"
        document.getElementsByTagName("html")[0].style.overflowX = "hidden"
        // window.onresize = function () {
        //     screen_scale()
        // }

        // var test = document.getElementById('about').contentWindow.document
        // console.log('对你撒娇看到那时尽快',test);
        // // test.style.display = "none";

    }, [])

    const handleIframe = () => {
        // const iframeItem = ifr.current;
        // const anchors = iframeItem.contentWindow.getElementsByTagName("a");
        // console.log("不但是大家看到就卡死",anchors)
    }


    return (
        <div className="screen_1" style={{
            height: "100vh",
            width: '100%'
            // padding:'0 0.6rem 0 0.3rem !important'
        }}>
            <iframe
                onLoad={handleIframe}
                ref={ifr}
                id='iframe'
                title="定位导航"
                style={{
                    margin: '0rem !important',
                    position: "relative",
                    top: "-0.2rem",
                    left: "-0.5rem",
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