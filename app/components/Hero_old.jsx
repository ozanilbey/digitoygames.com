import React from 'react';
import Chaffle from 'chaffle';

const words = [
    {
        first: 'sosyal',
        last: 'mobil'
    },
    {
        first: 'lokal',
        last: 'global'
    },
    {
        first: 'kaliteli',
        last: 'ücretsiz'
    },
    {
        first: 'kolay',
        last: 'hızlı'
    },
    {
        first: 'keyifli',
        last: 'ödüllü'
    }
];

class ShufflingText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.shuffleText = this.shuffleText.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            index: nextProps.index
        });
    }
    componentDidUpdate() {
        this.shuffleText();
    }
    shuffleText() {
        const chaffle = new Chaffle(this.refs.target, {
            speed: 40,
            delay: 120
        });
        chaffle.init();
    }
    render() {
        return (
            <h1 data-chaffle="en" ref="target">{words[this.state.index][this.props.id]}</h1>
        );
    }
}

export default class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }
    componentDidMount() {
        let self = this;
        setInterval(function () {
            self.setState({
                index: (self.state.index + 1) % 5
            });
        }, 2500);
    }
    render() {
        let index = this.state.index;
        console.log(index)
        return (
            <header className="hero">
                <div className="container">
                    <ShufflingText id="first" index={index} />
                    <h1 className="plus">+</h1>
                    <ShufflingText id="last" index={index} />
                </div>
            </header>
        )
    }
}