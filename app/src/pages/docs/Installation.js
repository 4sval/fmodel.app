import React from "react";
import Documentation from "../Documentation";

class Installation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Documentation>
                <h1 className='text-5xl font-black font-subtitle pb-2'>Installation</h1>
            </Documentation>
        );
    }
}

export default Installation;