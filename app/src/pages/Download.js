import React from 'react';
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';
import { GitHubPermanentDownloadUrl } from '../Constants';
import Layout from '../components/Layout';
import checkmark from '../assets/lotties/checkmark.json';

class Download extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        fetch(GitHubPermanentDownloadUrl)
            .then(res => res.blob())
            .then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = 'FModel.zip';
                a.click();
            });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Download - FModel</title>
                </Helmet>

                <Layout>
                    <div className='flex flex-col justify-center items-center gap-5 h-screen m-auto'>
                        <p className='text-4xl sm:text-7xl font-black whitespace-nowrap uppercase'>THANK YOU!</p>
                        <Lottie className='w-28 h-28 sm:h-44 sm:w-44' loop autoplay animationData={checkmark} />
                        <p className='text-center text-sm sm:text-base font-sans max-w-4xl mb-7'>Thank you very much for downloading FModel.<br />If you have never used it before, <strong>we strongly advise you to go ahead and discover the software on your own</strong>.</p>
                        <div className='grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 text-center sm:text-left gap-5 sm:gap-40'>
                            <a href="/docs" className="text-sm sm:text-base font-subtitle underline capitalize" style={{ color: '#1aba56' }}>Read our documentation</a>
                            <a href="/donate" className="text-sm sm:text-base font-subtitle underline capitalize" style={{ color: '#1199d5' }}>Support our work</a>
                        </div>
                        <a href="/" className="text-sm sm:text-base font-subtitle underline capitalize">Homepage</a>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Download;