import React from 'react';
import Layout from '../components/Layout';
import { Items, STYLES } from '../utils/NavbarItems';
import { ReactComponent as Logo } from '../assets/svgs/logo_shape.svg';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div className='fixed md:relative z-10 bg-c-bg-blue-h'>
                <div className='py-3.5'>
                    <Layout>
                        <nav className='flex flex-row justify-evenly items-center gap-4 text-gray-800 whitespace-nowrap'>
                            <div className='hidden lg:block flex-shrink-0'>
                                <a href='/'>
                                    <Logo className='w-9 h-9' fill='currentColor' />
                                </a>
                            </div>
                            <button className='md:hidden z-20 flex-shrink-0 p-1 shadow-md bg-gradient-to-r from-c-blue to-c-purple text-white rounded-full' onClick={this.toggle.bind(this)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? `M6 18L18 6M6 6l12 12` : `M4 6h16M4 12h16M4 18h7`} />
                                </svg>
                            </button>

                            <div className='hidden flex-1 md:flex flex-row justify-evenly lg:justify-end items-center gap-4 text-xs'>
                                {
                                    Items.map((item, index) => {
                                        if (item.style === STYLES.DOWNLOAD) {
                                            return (
                                                <a className='flex-1 lg:flex-none py-2 px-4 rounded-full border text-center text-white font-medium bg-blue-500 border-blue-300 hover:bg-blue-600 focus:ring-1' key={index} href={item.url} target={item.newTab ? '_blank' : '_self'} rel='noreferrer'>
                                                    <div className='flex justify-center items-center gap-3'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                                                        </svg>
                                                        <span>{item.label}</span>
                                                    </div>
                                                </a>
                                            )
                                        }
                                        else {
                                            return (
                                                <a className={`flex-1 lg:flex-none py-1 px-4 rounded text-center font-medium ${item.active ? '' : 'hover:'}bg-gray-50 focus:ring-2 focus:ring-gray-100`} key={index} href={item.url} target={item.newTab ? '_blank' : '_self'} rel='noreferrer'>{item.label}</a>
                                            )
                                        }
                                    })
                                }
                            </div>
                            {
                                isOpen &&
                                <div className='md:hidden z-10 absolute left-0 top-0 w-screen py-3.5 shadow-lg bg-gray-800'>
                                    <div className='flex flex-col items-center gap-2 text-sm text-center text-white'>
                                        {
                                            Items.map((item, index) => {
                                                if (item.style === STYLES.DOWNLOAD) {
                                                    return (
                                                        <a className='py-1.5 w-1/2 rounded-sm font-medium text-white bg-blue-500' key={index} href={item.url} target={item.newTab ? '_blank' : '_self'} rel='noreferrer'>
                                                            <div className='flex justify-center items-center gap-3'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                                                                </svg>
                                                                <span>{item.label}</span>
                                                            </div>
                                                        </a>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <a className={`py-1.5 w-1/2 rounded-sm font-medium ${item.active ? '' : 'focus:'}bg-white ${item.active ? '' : 'focus:'}text-gray-800`} key={index} href={item.url} target={item.newTab ? '_blank' : '_self'} rel='noreferrer'>{item.label}</a>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            }
                        </nav>
                    </Layout>
                </div>
            </div>
        )
    }
}

export default Navbar;