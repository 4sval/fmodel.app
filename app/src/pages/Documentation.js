import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Documentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Documentation - FModel</title>
                </Helmet>

                <Navbar />
                <Layout>
                    {/* <div className='flex'>
                        <div className='w-60'>
                            <nav>
                                <ul>
                                    <li><a href='/'>Documentation</a></li>
                                </ul>
                            </nav>
                        </div> */}
                        <div className='w-full p-10 flex flex-col gap-10 text-gray-800'>
                            {this.props.children}
                        </div>
                    {/* </div> */}
                </Layout>
                <Footer />
            </>
        );
    }
}

export default Documentation;