import React from 'react';

class AbilityCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // expander if sm:
    render() {
        const { title, description } = this.props;
        return (
            <div className='flex flex-row sm:flex-col items-center sm:items-start gap-5'>
                {this.props.children}
                <div className='md:space-y-3'>
                    <h2 className='text-gray-700 text-base md:text-xl lg:text-2xl font-subtitle font-medium tracking-tight capitalize'>{title}</h2>
                    <p className='text-gray-600 text-xs lg:text-sm font-sans text-justify leading-4 lg:leading-5'>{description}</p>
                </div>
            </div>
        )
    }
}

export default AbilityCard;