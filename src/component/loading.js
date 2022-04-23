import { Spin } from 'antd';

const Loading = () => {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // background: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // opacity:"0.5",
            // filter:"alpha(opacity=50)"zo
        }}>
            <Spin size="large" />
        </div>
    )
}

export default Loading