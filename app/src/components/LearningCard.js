import React from 'react';

class LearningCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { gradient1, gradient2, title, description, href } = this.props;
        return (
            <section className='flex'>
                <div className='w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg'>
                    <div className={`w-full flex flex-col bg-gradient-to-br from-${gradient1} to-${gradient2}`}>
                        <div className='p-5 grid grid-rows-2'>
                            <div>
                                <h4 className='text-xl font-subtitle font-bold'>{title}</h4>
                                <p className='font-light opacity-75 leading-5'>{description}</p>
                            </div>
                            <div className='mt-10'>
                                <a className='bg-gray-200 bg-opacity-25 hover:bg-opacity-50 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex' href={href}>Start</a>
                            </div>
                        </div>
                    </div>
                    <div className={`bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-${gradient1} hidden sm:block`} />
                </div>
            </section>
        )
    }
}

export default LearningCard;