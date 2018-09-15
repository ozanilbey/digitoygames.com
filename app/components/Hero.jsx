import React from 'react';
import Chaffle from 'chaffle';

const words = [
    {
        first: 'sosyal',
        last: 'mobil'
    },
    {
        first: 'kaliteli',
        last: 'ücretsiz'
    },
    {
        first: 'kolay',
        last: 'cazip'
    },
    {
        first: 'keyifli',
        last: 'ödüllü'
    },
    {
        first: 'lokal',
        last: 'global'
    }
];

class ShufflingText extends React.Component {
    constructor(props) {
        super(props);
        this.shuffleText = this.shuffleText.bind(this);
    }
    componentDidMount() {
        this.setState({
            text: this.props.text
        });
        this.shuffleText();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: nextProps.text
        });
    }
    componentDidUpdate() {
        this.shuffleText();
    }
    shuffleText() {
        let self = this;
        let time = this.props.time;
        let text = this.props.text;
        let length = text.length;
        let characters = text.split('');
        let securedCharacters = [];
        if(self.props.direction === 'rtl') {
            securedCharacters[length - 1] = characters[length - 1];
        } else {
            securedCharacters[0] = characters[0];
        }
        securedCharacters.length = length;
        for(let [index, value] of characters.entries()) {
            setTimeout(function() {
                let interval = setInterval(function() {
                    if(self.props.direction === 'rtl') {
                        securedCharacters[length - index - 1] = characters[length - index - 1];
                    } else {
                        securedCharacters[index] = characters[index];
                    }
                    let randomText = Math.random().toString(36).substring(2, 2 + length);
                    let changedText;
                    if(self.props.direction === 'rtl') {
                        changedText = self.replaceCharacter(randomText, length - index - 1, securedCharacters.join(''))
                    } else {
                        changedText = self.replaceCharacter(randomText, 0, securedCharacters.join(''))
                    }
                    self.refs.target.innerHTML = '<span>' + changedText[0] + '</span><span>' + changedText[1] + '</span>';
                }, time);
                setTimeout(function() {
                    clearInterval(interval);
                }, time * 4);
            }, (index + 1) * time * 4);
        }
    }
    replaceCharacter(text, index, replacement) {
        if(this.props.direction === 'rtl') {
            return [text.substr(0, index), replacement + text.substr(index + replacement.length)];
        } else {
            return [text.substr(0, index) + replacement, text.substr(index + replacement.length)];
        }
    }
    render() {
        return (
            <h1 ref="target" className={this.props.direction || 'ltr'}>{this.props.text.charAt(0) + Math.random().toString(36).substring(2, 2 + this.props.text.length - 1)}</h1>
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
        this.shuffle = setInterval(function () {
            self.setState({
                index: (self.state.index + 1) % 5
            });
        }, 3000);
    }
    componentWillUnmount() {
        clearInterval(this.shuffle);
    }
    render() {
        let index = this.state.index;
        return (
            <header className="hero">
                <div className="container">
                    <ShufflingText direction="rtl" time={30} text={words[index].first} />
                    <h1 className="plus">+</h1>
                    <ShufflingText direction="ltr" time={30} text={words[index].last} />
                    <h1>oyunlar</h1>
                </div>
            </header>
        )
    }
}