import React from 'react';

import Main from '~/components/Main';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let params = this.props.params;
        return (
            <Main id="contact" data-page="contact">
                <div className="container">
                    Contact
                </div>
            </Main>
        )
    }
}