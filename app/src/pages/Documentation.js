import React from 'react';
import { Helmet } from 'react-helmet';

class Documentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Documentation - FModel</title>
                </Helmet>
            </div>
        );
    }
}

export default Documentation;