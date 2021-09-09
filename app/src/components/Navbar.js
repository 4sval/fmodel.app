import React from "react";
import { Button, Pane, DownloadIcon } from 'evergreen-ui'
import { ReactComponent as Logo } from "../assets/svgs/logo_shape.svg";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Pane display="flex">
                <Pane flex={1} alignItems="center" display="flex">
                    <a href="/">
                        <Logo className='w-9 h-9' fill='#1f2937' />
                    </a>
                </Pane>
                <Pane display="flex" alignItems="center">
                    <Button appearance="minimal" marginLeft={16}>
                        <a href="/docs">Documentation</a>
                    </Button>
                    <Button appearance="minimal" marginLeft={16}>
                        <a href="/github">Source Code</a>
                    </Button>
                    <Button appearance="minimal" marginLeft={16}>
                        <a href="/discord">Discord</a>
                    </Button>
                    <Button appearance="minimal" marginLeft={16}>
                        <a href="/donate">Donate</a>
                    </Button>
                    <Button appearance="primary" marginLeft={16} iconBefore={DownloadIcon}>
                        <a href="/download">Download Now</a>
                    </Button>
                </Pane>
            </Pane>
        )
    }
}

export default Navbar;