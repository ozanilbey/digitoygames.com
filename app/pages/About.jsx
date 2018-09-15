import React from 'react';

import Main from '~/components/Main';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let params = this.props.params;
        return (
            <Main id="about" data-page="about">
                <div className="container">
                    About
                </div>
            </Main>
        )
    }
}