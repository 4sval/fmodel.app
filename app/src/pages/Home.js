import React from 'react';
import Lottie from 'lottie-react';
import Marquee from 'react-fast-marquee';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SpCard from '../components/SpCard';
import AbilityCard from '../components/AbilityCard';
import { formatBytes } from '../helpers/formatBytes';
import { ReactComponent as List } from '../assets/svgs/list.svg';
import { ReactComponent as Visual } from '../assets/svgs/visual.svg';
import { ReactComponent as Cubes } from '../assets/svgs/cubes.svg';
import scan from '../assets/lotties/scan.json';
import star from '../assets/lotties/star.json';
import download from '../assets/lotties/download.json';
import folder from '../assets/lotties/folder.json';
import creation from '../assets/lotties/creation.json';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 0,
            forkCount: 0,
            downloadCount: 0,
            createdAt: undefined,
            latest: {
                version: undefined,
                downloadCount: undefined,
                zipSize: undefined,
                updatedAt: undefined
            }
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/iAmAsval/FModel')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    starCount: data.stargazers_count,
                    forkCount: data.forks_count,
                    createdAt: data.created_at,
                });

                fetch(data.releases_url.replace('{/id}', ''))
                    .then(res => res.json())
                    .then(releases => {
                        releases.forEach(release => {
                            const asset = release.assets.find(a => a.name === 'FModel.zip' && a.state === 'uploaded');
                            if (!asset) return;

                            this.setState((prevState) => ({
                                downloadCount: prevState.downloadCount + asset.download_count,
                                latest: {
                                    version: prevState.latest.version ?? release.tag_name,
                                    downloadCount: prevState.latest.downloadCount ?? asset.download_count,
                                    zipSize: prevState.latest.zipSize ?? asset.size,
                                    updatedAt: prevState.latest.updatedAt ?? asset.updated_at
                                }
                            }));
                        });
                    });
            });
    }

    render() {
        const { starCount, forkCount, downloadCount, createdAt, latest } = this.state;
        return (
            <>
                <div className='bg-blue-100 py-5'>
                    <Layout>
                        <Navbar />
                        <div className='mt-5 flex flex-col-reverse lg:flex-row justify-between lg:justify-center items-center'>
                            <div className='grid font-sans gap-5'>
                                <h1 className='text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-center lg:text-left text-gray-800 font-black tracking-tighter'>Software for exploring<br />Unreal Engine games</h1>
                                <p className='text-sm lg:text-base text-center lg:text-left text-blue-900'>
                                    Ever wanted to explore game files created by Unreal Engine? We've got you covered.
                                </p>
                                <div className='flex justify-center lg:justify-start items-center gap-4 whitespace-nowrap text-xs lg:text-base'>
                                    <a className='py-2 px-4 rounded border font-medium text-white bg-blue-500 border-blue-300 hover:bg-blue-600 focus:ring-1' href='/download'>
                                        <div className='flex items-center gap-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                                            </svg>
                                            <span>Download Now</span>
                                        </div>
                                    </a>
                                    <a className='py-2 px-4 rounded border font-medium text-gray-800 bg-gray-100 border-gray-50 hover:bg-gray-200 focus:ring-2' href='/discord'>
                                        <div className='flex items-center gap-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                            </svg>
                                            <span>Join Our Discord</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <Lottie className='w-auto max-w-sm lg:max-w-2xl' loop autoplay animationData={scan} />
                        </div>
                    </Layout>
                </div>
                <div className='bg-blue-50'>
                    <Marquee speed={50} gradient={false}>
                        <div className='py-5 px-7 sm:px-12 md:px-40'>
                            <div className='py-10 lg:py-14 flex gap-12 sm:gap-28 lg:gap-48'>
                                <div className='transform -rotate-1 hover:rotate-0'>
                                    <SpCard title='STARS & FORKS' bgColor='#fffaed' lottieData={star}>
                                        <p className='text-xs text-gray-800 font-sans'>{starCount}</p>
                                        <p className='text-xs text-gray-800 font-sans'>{forkCount}</p>
                                    </SpCard>
                                </div>
                                <div className='transform rotate-3 hover:rotate-0'>
                                    <SpCard size='w-80 h-24' title='DOWNLOADS' bgColor='#ffeded' lottieData={download}>
                                        <p className='text-xs text-gray-800 font-sans'>x{downloadCount.toLocaleString()} Total</p>
                                        <p className='text-xs text-gray-800 font-sans'>x{latest?.downloadCount?.toLocaleString() ?? 0} Latest ({latest.version})</p>
                                    </SpCard>
                                </div>
                                <div className='transform rotate-1 hover:rotate-0'>
                                    <SpCard title={`VERSION ${latest.version}`} bgColor='#f7edff' lottieData={folder}>
                                        <p className='text-xs text-gray-800 font-sans'>{formatBytes(latest?.zipSize ?? 0)}</p>
                                        <p className='text-xs text-gray-800 font-sans'>{new Date(latest.updatedAt).toDateString()}</p>
                                    </SpCard>
                                </div>
                                <div className='transform -rotate-3 hover:rotate-0'>
                                    <SpCard size='w-44 h-16' title='CREATION' bgColor='#edf3ff' lottieData={creation}>
                                        <p className='text-xs text-gray-800 font-sans'>{new Date(createdAt).toDateString()}</p>
                                    </SpCard>
                                </div>
                            </div>
                        </div>
                    </Marquee>
                </div>
                <Layout>
                    <div className='py-20'>
                        <div className='grid grid-flow-row lg:grid-flow-col items-center gap-5 lg:gap-20 xl:gap-40 2xl:gap-60 font-sans'>
                            <div className='flex flex-col gap-0 lg:gap-3'>
                                <h2 className='text-blue-500 text-sm sm:text-base font-subtitle font-semibold uppercase tracking-widest whitespace-nowrap'>FREE AND OPEN-SOURCE</h2>
                                <h1 className='text-gray-800 text-4xl sm:text-5xl font-extrabold tracking-tighter'>Built for easy-of-use,<br />here's what you can do</h1>
                            </div>
                            <p className='text-gray-600 text-sm text-justify lg:text-left leading-5 sm:leading-6'>FModel is an open-source and beginner-friendly software to datamine games made with Unreal Engine. Its interface was carefully created to be easy to understand, but complete in the features it offers. The ability to create cosmetics icon is one of the key points that made it popular.</p>
                        </div>
                        <div className='pt-10 sm:pt-20 grid grid-flow-row sm:grid-flow-col gap-2.5 lg:gap-10 xl:gap-20 2xl:gap-30 font-sans'>
                            <AbilityCard title='Loading modes, next-gen data isolation, two clicks away from your eyes' description="Because it's all about what you can see, being able to load files in different modes is mandatory. FModel has the ability to compare two states of the same game, hence can show new/modified files detected for this new state.">
                                <List className='flex-shrink-0 w-10 h-10 sm:w-24 sm:h-24' />
                            </AbilityCard>
                            <AbilityCard title='Tens of supported asset type for you to extract, export, save' description="Hello World!">
                                <Visual className='flex-shrink-0 w-10 h-10 sm:w-24 sm:h-24' />
                            </AbilityCard>
                            <AbilityCard title='Model viewer, animation viewer, map viewer, sound player' description="Hello World!">
                                <Cubes className='flex-shrink-0 w-10 h-10 sm:w-24 sm:h-24' />
                            </AbilityCard>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}

export default Home;