import React from 'react';
import Lottie from 'lottie-react';

class SpCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { size, title, bgColor, lottieData } = this.props;
        return (
            <div className={`bg-white rounded-lg shadow-lg p-3 ${size ?? 'w-72 h-20'}`}>
                <div className='w-full h-full flex flex-row gap-3'>
                    <div className='rounded-lg' style={{ backgroundColor: bgColor }}>
                        <Lottie className='h-full w-auto' loop autoplay animationData={lottieData} />
                    </div>
                    <div>
                        <h1 className='uppercase text-sm text-gray-400 font-sans font-semibold'>{title}</h1>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default SpCard;