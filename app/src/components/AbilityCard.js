import React from 'react';
import Collapse from '@kunukn/react-collapse';

class AbilityCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        const { isOpen } = this.state;
        const { title, description } = this.props;
        return (
            <>
                <div className='hidden md:flex flex-row sm:flex-col items-center sm:items-start gap-5'>
                    {this.props.children}
                    <div className='md:space-y-3'>
                        <h2 className='text-gray-700 text-base md:text-xl lg:text-2xl font-subtitle font-medium tracking-tight capitalize'>{title}</h2>
                        <p className='text-gray-600 text-xs lg:text-sm font-sans text-justify leading-4 lg:leading-5'>{description}</p>
                    </div>
                </div>
                <div className='md:hidden rounded shadow-md p-3 max-h-20' onClick={this.toggle.bind(this)}>
                    <div className='w-full h-full flex flex-row justify-between items-center gap-3'>
                        <div className='flex flex-1 items-center gap-4'>
                            {this.props.children}
                            <h2 className='text-gray-700 text-base md:text-xl lg:text-2xl font-sans font-bold tracking-tight capitalize max-h-12 overflow-hidden'>{title}</h2>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </div>
                </div>
                <Collapse className='md:hidden collapse-css-transition' isOpen={isOpen}>
                    <p className='text-gray-600 text-xs font-sans text-justify leading-4'>{description}</p>
                </Collapse>
            </>
        )
    }
}

export default AbilityCard;