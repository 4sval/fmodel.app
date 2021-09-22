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
                    <p>Hello World!</p>
                </Layout>
                <Footer />
            </>
        );
    }
}

export default Documentation;