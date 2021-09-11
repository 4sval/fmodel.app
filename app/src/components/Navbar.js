import React from 'react';
import { ReactComponent as Logo } from '../assets/svgs/logo_shape.svg';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='flex flex-row justify-evenly items-center gap-4 whitespace-nowrap'>
                <div className='flex-shrink-0'>
                    <a href='/'>
                        <Logo className='w-9 h-9' fill='#1f2937' />
                    </a>
                </div>
                <div className='hidden flex-1 lg:flex flex-row justify-end items-center gap-4 text-gray-800 text-xs'>
                    <a className='h-1/2 py-1 px-4 rounded font-medium hover:bg-gray-50 focus:ring-2 focus:ring-gray-100' href='/docs'>Documentation</a>
                    <a className='h-1/2 py-1 px-4 rounded font-medium hover:bg-gray-50 focus:ring-2 focus:ring-gray-100' href='/github'>Source Code</a>
                    <a className='h-1/2 py-1 px-4 rounded font-medium hover:bg-gray-50 focus:ring-2 focus:ring-gray-100' href='/discord'>Discord</a>
                    <a className='h-1/2 py-1 px-4 rounded font-medium hover:bg-gray-50 focus:ring-2 focus:ring-gray-100' href='/donate'>Donate</a>
                    <a className='py-2 px-4 rounded border font-medium text-white bg-blue-500 border-blue-300 hover:bg-blue-600 focus:ring-1' href='/download'>
                        <div className='flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                            </svg>
                            <span>Download Now</span>
                        </div>
                    </a>
                </div>
                <div className='lg:hidden flex-1 flex flex-row justify-end'>
                    <button className='py-2 px-4 rounded-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}

export default Navbar;