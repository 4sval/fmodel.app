import React from "react";
import { Button, Pane, CommentIcon, DownloadIcon } from 'evergreen-ui'
import Lottie from "lottie-react";
import Navbar from "../components/Navbar";
import game from '../assets/lotties/game.json';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <div className='bg-blue-100'>
                    <div className='py-5 px-20'>
                        <Navbar />
                        <Pane className='mt-5' display="flex" alignItems="center" justifyContent="center">
                            <div className='mr-20 font-sans'>
                                <h1 className='mb-5 text-7xl text-gray-800 font-sans font-black'>Software for exploring<br />Unreal Engine 4-5 games</h1>
                                <p className='mb-5 text-base text-blue-900 font-sans'>Ever wanted to explore game files created by Unreal Engine? We've got you covered.</p>
                                <Pane display="flex" alignItems="center">
                                    <Button appearance="primary" size="large" marginRight={16} iconBefore={DownloadIcon}>
                                        <a href="/download">Download Now</a>
                                    </Button>
                                    <Button size="large" marginRight={16} iconBefore={CommentIcon}>
                                        <a href="/discord">Join Our Discord</a>
                                    </Button>
                                </Pane>
                            </div>
                            <Lottie className='w-auto max-w-2xl' loop autoplay animationData={game} />
                        </Pane>
                    </div>
                </div>
                <div className='bg-blue-50'>
                    <div className='p-20'>
                        <h1 className=''>FModel Team</h1>
                        <p className=''>Ever wanted to explore game files created by Unreal Engine? We've got you covered.</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;