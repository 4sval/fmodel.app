import React from "react";

class Paginer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { leftLabel, rightLabel, leftHref, rightHref } = this.props;
        return (
            <div className='mt-14 w-full flex justify-between font-bold font-subtitle'>
                <a href={leftHref} className={`${!leftLabel ? 'invisible' : ''} cursor-pointer`}>
                    <div className='flex items-center gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span>{leftLabel}</span>
                    </div>
                </a>
                <a href={rightHref} className={`${!rightLabel ? 'invisible' : ''} cursor-pointer`}>
                    <div className='flex items-center gap-4'>
                        <span>{rightLabel}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </a>
            </div>
        )
    }
}

export default Paginer;