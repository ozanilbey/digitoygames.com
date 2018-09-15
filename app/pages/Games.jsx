import React from 'react';

import Main from '~/components/Main';

export default class Games extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let params = this.props.params;
        return (
            <Main id="games" data-page="games">
                <div className="container">
                    Games
                </div>
            </Main>
        )
    }
}