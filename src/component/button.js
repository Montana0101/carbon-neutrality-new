import "./button.less"
import { useHistory } from 'react-router-dom'

export const NavigateButton = (props) => {
    const history = useHistory()

    return <div className="navigate_button" onClick={
        () => {
            // history.push(props.path)
            if (props.path != 'news0') { window.location.href = props.path } else {
                window.open('https://mp.weixin.qq.com/s/02SNGgy2hPyIGckaF6oz3g', '_blank')
            }
        }
    } style={{ color: props.color, border: `1px solid ${props.color}` }}>
        {props.content}
    </div>
}

// withRouter(NavigateButton)