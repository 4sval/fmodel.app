import React from 'react';
import { Helmet } from 'react-helmet-async';

class Download extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Download - FModel</title>
                </Helmet>
            </div>
        );
    }
}

export default Download;