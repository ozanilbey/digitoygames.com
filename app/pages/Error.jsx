import React from 'react';
import {Link} from 'react-router-dom';

export default class Error extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main id="error" data-page="error">
                <section>
                    <div className="container">
                        <h1>Four-oh-four</h1>
                        <p role="message">The page you requested doesn't exist.</p>
                        <Link className="button" to="/">Go to home page</Link>
                    </div>
                </section>
            </main>
        )
    }
}