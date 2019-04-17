import React from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";

class Welcome extends React.Component {
    render () {
        return <h1>Hello!</h1>;
    }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
