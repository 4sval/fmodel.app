import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='flex flex-wrap flex-row justify-center'>
                <div className='mx-5 sm:mx-10 w-full max-w-screen-2xl'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;