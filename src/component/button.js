import "./button.scss"
import { useHistory } from 'react-router-dom'

export const NavigateButton = (props) => {
    const history = useHistory()

    return <div className="navigate_button" onClick={
        ()=>{
            history.push(props.path)
        }
    }>
        {props.content}
    </div>
}

// withRouter(NavigateButton)