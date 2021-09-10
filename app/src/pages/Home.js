import React from 'react';
import Lottie from 'lottie-react';
import { Button, Pane, CommentIcon, DownloadIcon } from 'evergreen-ui'
import Navbar from '../components/Navbar';
import { formatBytes } from '../helpers/formatBytes';
import scan from '../assets/lotties/scan.json';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 0,
            forkCount: 0,
            downloadCount: 0,
            latest: {
                version: '',
                downloadCount: 0,
                zipSize: 0
            }
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/iAmAsval/FModel')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    starCount: data.stargazers_count,
                    forkCount: data.forks_count
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
                                    version: prevState.latest.version === '' ? release.tag_name : prevState.latest.version,
                                    downloadCount: prevState.latest.downloadCount === 0 ? asset.download_count : prevState.latest.downloadCount,
                                    zipSize: prevState.latest.zipSize === 0 ? asset.size : prevState.latest.zipSize
                                }
                            }));
                        });
                    });
            });
    }

    render() {
        const { starCount, forkCount, downloadCount, latest } = this.state;
        return (
            <>
                <div className='bg-blue-100'>
                    <div className='py-5 px-20'>
                        <Navbar />
                        <Pane className='mt-5' display='flex' alignItems='center' justifyContent='center'>
                            <div className='mr-20 font-sans'>
                                <h1 className='mb-5 text-7xl text-gray-800 font-sans font-black'>Software for exploring<br />Unreal Engine 4-5 games</h1>
                                <p className='mb-5 text-base text-blue-900 font-sans'>
                                    Ever wanted to explore game files created by Unreal Engine? We've got you covered.
                                </p>
                                <Pane display='flex' alignItems='center'>
                                    <Button appearance='primary' size='large' marginRight={16} iconBefore={DownloadIcon}>
                                        <a href='/download'>Download Now</a>
                                    </Button>
                                    <Button size='large' marginRight={16} iconBefore={CommentIcon}>
                                        <a href='/discord'>Join Our Discord</a>
                                    </Button>
                                </Pane>
                            </div>
                            <Lottie className='w-auto max-w-2xl' loop autoplay animationData={scan} />
                        </Pane>
                    </div>
                </div>
                <div className='bg-blue-50'>
                    <div className='p-20'>
                        <h1 className='text-center text-lg font-semibold uppercase'>Social Proof</h1>
                        <p className='text-center'>
                            FModel was downloaded {downloadCount.toLocaleString()} times (x{latest.downloadCount.toLocaleString()} for v{latest.version}),
                            has {starCount} stars, {forkCount} forks and is in a {formatBytes(latest.zipSize)} zip file
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;