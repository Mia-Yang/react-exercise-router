import React from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends React.Component {
    render() {
        return (
            <div className="text">
                <div>
                    Company: ThoughtWorks Local<br/>
                    Location: Xi'an<br/>
                </div>
                <span>
                    For more information, please<br/>
                    view our <Link to='/' className="homelink">website</Link>.
                </span>
            </div>

        );
    }
}

export default AboutUs;