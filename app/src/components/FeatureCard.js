import React from 'react';

class FeatureCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { title } = this.props;
        return (
            <div className='space-y-4'>
                <div className='flex flex-row items-center text-blue-500 gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <h2 className='flex-1 text-gray-800 text-2xl font-subtitle font-extrabold tracking-tighter'>{title}</h2>
                </div>
                <div className='text-gray-800 text-sm sm:text-base font-sans'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default FeatureCard;