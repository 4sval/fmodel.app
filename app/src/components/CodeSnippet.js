import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable as highlighter } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class CodeSnippet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { code, language, source } = this.props;
        return (
            <div className='mt-1 mb-6'>
                <SyntaxHighlighter className='rounded-lg text-sm' language={language} showLineNumbers={true} style={highlighter}>
                    {code}
                </SyntaxHighlighter>
                <a className='block text-white text-xs text-right' href={source} target='_blank' rel='noreferrer' style={{ marginTop: '-1.5em', marginRight: '0.5em' }}>source</a>
            </div>
        );
    }
}

export default CodeSnippet;