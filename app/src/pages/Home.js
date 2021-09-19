import React from 'react';
import Lottie from 'lottie-react';
import Marquee from 'react-fast-marquee';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SpCard from '../components/SpCard';
import AbilityCard from '../components/AbilityCard';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import { formatBytes } from '../helpers/Helper';
import { UnrealEngineUrl } from '../Constants';
import { ReactComponent as List } from '../assets/svgs/list.svg';
import { ReactComponent as Visual } from '../assets/svgs/visual.svg';
import { ReactComponent as Cubes } from '../assets/svgs/cubes.svg';
import { ReactComponent as FModel } from '../assets/svgs/fmodel.svg';
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
        fetch('https://api.github.com/repos/iAmAsval/FModel', { cache: "force-cache" })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    starCount: data.stargazers_count,
                    forkCount: data.forks_count,
                    createdAt: data.created_at,
                });

                fetch(data.releases_url.replace('{/id}', ''), { cache: "force-cache" })
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
                <div className='bg-c-bg-blue-h'>
                    <Navbar />
                    <Layout>
                        <div className='my-5 flex flex-col-reverse lg:flex-row justify-between lg:justify-center items-center'>
                            <div className='grid font-sans gap-5'>
                                <h1 className='text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-center lg:text-left text-gray-800 font-black tracking-tighter'>Software for exploring<br />Unreal Engine games</h1>
                                <p className='text-sm lg:text-base text-center lg:text-left text-gray-700'>
                                    Ever wanted to explore game files created by <a className='hover:underline' href={UnrealEngineUrl}>Unreal Engine</a>? We've got you covered.
                                </p>
                                <div className='flex flex-wrap justify-center lg:justify-start items-center gap-2 whitespace-nowrap text-xs lg:text-base'>
                                    <a className='py-2.5 px-6 shadow-inner rounded-full font-medium text-white bg-gradient-to-r from-c-blue to-c-purple transform hover:-rotate-1 focus:ring-2' href='/download'>
                                        <div className='flex items-center gap-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                                            </svg>
                                            <span>Download Now</span>
                                        </div>
                                    </a>
                                    <a className='py-2.5 px-6 shadow-inner rounded-full font-medium text-gray-800 bg-gradient-to-r from-white via-white to-c-white transform hover:rotate-1 focus:ring-2' href='/discord' target="_blank">
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
                <div className='bg-c-bg-blue-s'>
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
                                <h1 className='text-gray-800 text-4xl sm:text-5xl font-extrabold tracking-tighter'>Built for ease-of-use,<br />here's what you can do</h1>
                            </div>
                            <p className='text-gray-600 text-sm text-justify lg:text-left leading-5 sm:leading-6'>FModel is a beginner-friendly and open-source software for data-mining games made with Unreal Engine. Its interface was carefully created to be easy to understand, but complete in the features it offers. The ability to create a cosmetic icon is one of the key points that made it popular.</p>
                        </div>
                        <div className='pt-10 md:pt-20 grid grid-flow-row md:grid-flow-col gap-2.5 md:gap-10 lg:gap-20 xl:gap-36 2xl:gap-48 font-sans'>
                            <AbilityCard title='Loading modes, next-gen data isolation, two clicks away from your eyes' description="Because it's all about what you can see, being able to load files in different modes is mandatory. FModel has the ability to compare two states of the same game, hence can show new/modified files detected for this new state.">
                                <List className='flex-shrink-0 w-10 h-10 md:w-24 md:h-24' />
                            </AbilityCard>
                            <AbilityCard title='Tens of supported asset type for you to extract, export, save' description="From a simple .uasset to a more complex .bin file, FModel is able to parse more than 30 types of assets. While a lot of other software skips those assets, FModel will show you a clear view of all the properties contained in it.">
                                <Visual className='flex-shrink-0 w-10 h-10 md:w-24 md:h-24' />
                            </AbilityCard>
                            <AbilityCard title='Model viewer, animation viewer, map viewer, sound player' description="A lot of data viewers right? Well, better than not enough. You can preview static/skeletal meshes, their animations, play audio files while watching a satisfying real-time sound spectrum, and more.">
                                <Cubes className='flex-shrink-0 w-10 h-10 md:w-24 md:h-24' />
                            </AbilityCard>
                        </div>
                    </div>
                </Layout>
                <div className='bg-c-bg-blue-s'>
                    <Layout>
                        <div className='py-20 flex flex-col gap-14'>
                            <div className='flex flex-col justify-center gap-0 lg:gap-2'>
                                <h2 className='text-blue-500 text-center text-sm sm:text-base font-subtitle font-semibold uppercase tracking-widest whitespace-nowrap'>CONSTANTLY EVOLVING</h2>
                                <h1 className='text-gray-800 text-center text-4xl sm:text-5xl font-extrabold tracking-tighter'>Datamine games without limits</h1>
                            </div>
                            <div className='grid lg:grid-cols-5 justify-center items-center px-5 md:px-10 lg:px-0'>
                                <FModel className='blob-mask hidden lg:block transform lg:-translate-x-1/3 xl:-translate-x-96 2xl:-translate-x-56' />
                                <div className='z-0 col-start-4 col-end-6 flex flex-col gap-9 lg:gap-16'>
                                    <FeatureCard title='Unique navigation feature.'>
                                        <p>Ever felt the pain it was to navigate between assets?</p>
                                        <p>With FModel, it's not harder than a simple right-click on a <strong className='text-c-pale-red'>colored path</strong>. It will extract the selected asset in a new tab, and jump to the export defined by the parent asset. Truly game-changing, right?</p>
                                    </FeatureCard>
                                    <FeatureCard title='Full access to all possible settings.'>
                                        <p>Getting limited by the software is extremely frustrating, we get that. The settings window on FModel allows you to customize every little user option, from the game you want to use, to pre-defined keybindings. You can even overwrite game-defined UE Console Variables used by FModel to parse assets.</p>
                                    </FeatureCard>
                                    <FeatureCard title='Open for suggestions.'>
                                        <p>Do you have a feature in mind that is not yet implemented in FModel?</p>
                                        <p>Something does not work properly?</p>
                                        <p><strong>Please reach out to us on Discord or GitHub</strong> and we will consider it. We encourage open collaboration made by the community, if you are a developer, feel free to contribute.</p>
                                    </FeatureCard>
                                </div>
                            </div>
                        </div>
                    </Layout>
                </div>
                <div className='bg-blue-500'>
                    <Layout>
                        <div className='px-5 md:px-20 py-10 lg:py-20 text-white flex flex-col md:flex-row justify-between items-center gap-10'>
                            <div className='space-y-5'>
                                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black'>Are you ready<br />for becoming a data-miner</h1>
                                <p className='font-light text-sm sm:text-base'>It's your time to shine, download FModel now, and explore the world of game assets.</p>
                            </div>
                            <a className='px-6 py-3 lg:px-8 lg:py-5 bg-white hover:bg-c-white text-gray-800 text-xl lg:text-2xl font-black font-subtitle focus:ring-2 focus:ring-inset' href='/download'>
                                <div className='flex items-center gap-4 whitespace-nowrap'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                                    </svg>
                                    <span>Download Now</span>
                                </div>
                            </a>
                        </div>
                    </Layout>
                </div>
                <Footer />
            </>
        );
    }
}

export default Home;