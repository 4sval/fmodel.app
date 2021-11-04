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
                        <div className='p-5 flex justify-evenly items-center'>
                            <div className='flex-1 text-left'>
                                <h4 className='text-xl font-subtitle font-bold'>{title}</h4>
                                <p className='font-light opacity-75 leading-5'>{description}</p>
                            </div>
                            <div className='flex-shrink-0'>
                                <a className='bg-gray-200 bg-opacity-25 hover:bg-opacity-50 transition-colors duration-200 rounded-xl font-semibold p-2 inline-flex' href={href}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        {
                                            href.includes('youtube.com') ?
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /> :
                                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        }
                                    </svg>
                                </a>
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