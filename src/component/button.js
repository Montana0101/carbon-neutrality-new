import "./button.less"
import { useHistory } from 'react-router-dom'

export const NavigateButton = (props) => {
    const history = useHistory()

    return <div className="navigate_button" onClick={
        ()=>{
            history.push(props.path)
        }
    } style={{color:props.color,border:`1px solid ${props.color}`}}>
        {props.content}
    </div>
}

// withRouter(NavigateButton)