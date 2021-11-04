import React from "react";
import Documentation from "../Documentation";
import LearningCard from "../../components/LearningCard";

class GettingStarted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Documentation>
                <h1 className='text-5xl font-black font-subtitle pb-2'>Getting Started</h1>
                <h6 className='text-2xl font-light text-gray-600'>Learn how to use FModel the way that best matches your learning style.</h6>

                <div className='mt-10 grid grid-cols-2 gap-8'>
                    <LearningCard gradient1='amber-400' gradient2='orange-500' title='Read The Docs' description='Learn how to get FModel setup for your needs.' href='/docs/installation' />
                    <LearningCard gradient1='purple-400' gradient2='fuchsia-500' title='Watch Videos' description='Learn everything about FModel without having to read a 50-page long book.' href='https://www.youtube.com/results?search_query=fmodel' />
                </div>
            </Documentation>
        );
    }
}

export default GettingStarted;