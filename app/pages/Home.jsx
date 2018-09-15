import React from 'react';
import {Link} from 'react-router-dom';

import Main from '~/components/Main';
import Showcase from '~/pages/home/Showcase';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <Main id="home" data-page="home">
                <Showcase />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
            </Main>
        )
    }
}