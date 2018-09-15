import React from 'react';

import Main from '~/components/Main';

export default class Jobs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let params = this.props.params;
        return (
            <Main id="jobs" data-page="jobs">
                <div className="container">
                    Jobs
                </div>
            </Main>
        )
    }
}