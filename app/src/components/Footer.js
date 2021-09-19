import React from 'react';
import Layout from '../components/Layout';
import { ReactComponent as Logo } from '../assets/svgs/logo_shape.svg';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='py-5 bg-c-bg-blue-s text-gray-800'>
                <Layout>
                    <div className='flex flex-row justify-evenly items-center gap-4'>
                        <p className='flex-1 text-xs'>Not affiliated with Epic Games<br />© 2021, FModel. All rights reserved.<span className='hidden sm:inline'> Unreal Engine and its logo are Epic’s trademarks or registered trademarks in the US and elsewhere.</span></p>
                        <div className='flex-shrink-0'>
                            <a href='/'>
                                <Logo className='w-9 h-9' fill='currentColor' />
                            </a>
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Footer;