import React from 'react';
import { Helmet } from 'react-helmet-async';
import Lottie from 'lottie-react';
import error from '../assets/lotties/error.json';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='mx-12 flex flex-col md:flex-row h-screen'>
                <Helmet>
                    <title>Page not found - FModel</title>
                </Helmet>

                <div className='mt-auto md:mb-auto mr-auto md:mr-4 ml-auto'>
                    <Lottie className='w-auto max-w-sm' loop autoplay animationData={error} />
                </div>
                <div className='md:mt-auto mb-auto md:mr-auto'>
                    <h1 className='text-yellow-400 text-4xl font-black font-sans mb-2 text-center md:text-left'>Page not found</h1>
                    <p className='text-gray-800 md:max-w-xl text-center md:text-left'>We’re sorry but it appears that we can’t find the page you were looking for. Usually this occurs because of a page that previously existed was removed or you’ve mistyped the address.</p>
                </div>
            </div>
        );
    }
}

export default NotFound;