import React from 'react';
import '../assets/Popup.css';

class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    //on clicking on closing icon, the call back that is given in props for handing closing of popup will triggred
    //the content of popup that is given in props will be shown
    render() {
        return (
            <>
                <div className="popup-box">
                    <div className="box">
                        <span className="close-icon" onClick={this.props.handleClose}>x</span>
                        <div className="error-message">
                            <h2>OOPS!</h2>
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Popup;
