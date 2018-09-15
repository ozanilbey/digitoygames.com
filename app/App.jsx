import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import Error from './pages/Error';

import Navigation from './components/Navigation';
import Hero from './components/Hero';

import './styles/common.less';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        //WARNING: Document not loaded. Do not use "document" here.
        var canUseDOM = !!(
    		typeof window !== 'undefined' &&
    		window.document &&
    		window.document.createElement
    	);
        canUseDOM && console.log('can use dom');
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentWillUpdate() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Route path="/:page?/:subpage?" render={(props) =>
                    <Navigation />
                }/>
                <Route exact path="/" render={(props) =>
                    <Hero />
                }/>
                <Switch>
                    <Route exact path="/" render={(props) =>
                        <Home />
                    }/>
                    <Route path="/about/:subpage?" render={(props) =>
                        <About params={props.match.params} />
                    }/>
                    <Route path="/games/:subpage?" render={(props) =>
                        <Games params={props.match.params} />
                    }/>
                    <Route path="/jobs/:subpage?" render={(props) =>
                        <Jobs params={props.match.params} />
                    }/>
                    <Route path="/contact" render={(props) =>
                        <Contact params={props.match.params} />
                    }/>
                    <Route render={(props) =>
                        <Error />
                    }/>
                </Switch>
            </div>
        )
    }
}
