import React from 'react';

const animations = {
    'apps-on-phone': {
        background: {
            source: 'phone-in-hand.png'
        },
        staticItems: [],
        animatedItems: [
            {
                source: 'app-icon-okeyextra.png',
                width: 2.725,
                start: {
                    top: 2.0625,
                    left: 8.2
                },
                stop: {
                    top: 7.0625,
                    left: 8.2
                }
            },
            {
                source: 'app-icon-101extra.png',
                width: 2.725,
                start: {
                    top: 2.0625,
                    left: 10.6125
                },
                stop: {
                    top: 5.6875,
                    left: 10.6125
                }
            },
            {
                source: 'app-icon-pokerextra.png',
                width: 2.725,
                start: {
                    top: 2.0625,
                    left: 13.0125
                },
                stop: {
                    top: 4.3,
                    left: 13.0125
                }
            },
            {
                source: 'app-icon-tekelokey.png',
                width: 2.725,
                start: {
                    top: 2.0625,
                    left: 10.6125
                },
                stop: {
                    top: 8.4625,
                    left: 10.6125
                }
            },
            {
                source: 'app-icon-rakkip.png',
                width: 2.725,
                start: {
                    top: 2.0625,
                    left: 13.025
                },
                stop: {
                    top: 7.075,
                    left: 13.025
                }
            },
            {
                source: 'app-icon-canokey.png',
                width: 2.725,
                start: {
                    top: 2.0625,
                    left: 15.425
                },
                stop: {
                    top: 5.6875,
                    left: 15.425
                }
            }
        ]
    },
    'game-materials-on-table': {
        background: {
            source: 'game-table.png'
        },
        staticItems: [],
        animatedItems: [
            {
                source: 'blue-poker-chip.png',
                order: 5,
                width: 4.45,
                start: {
                    top: -0.3,
                    left: 13.775
                },
                stop: {
                    top: 4.7,
                    left: 13.775
                }
            },
            {
                source: 'blue-poker-chip.png',
                order: 6,
                width: 4.45,
                start: {
                    top: -0.925,
                    left: 13.9
                },
                stop: {
                    top: 4.075,
                    left: 13.9
                }
            },
            {
                source: 'blue-poker-chip.png',
                order: 7,
                width: 4.45,
                start: {
                    top: -1.425,
                    left: 13.775
                },
                stop: {
                    top: 3.575,
                    left: 13.775
                }
            },
            {
                source: 'green-poker-chip.png',
                order: 8,
                width: 4.45,
                start: {
                    top: -2.025,
                    left: 13.9
                },
                stop: {
                    top: 2.975,
                    left: 13.9
                }
            },
            {
                source: 'green-poker-chip.png',
                order: 9,
                width: 4.45,
                start: {
                    top: -2.65,
                    left: 13.775
                },
                stop: {
                    top: 2.35,
                    left: 13.775
                }
            },
            {
                source: 'rummy-tile-1.png',
                order: 2,
                width: 2.8,
                start: {
                    top: -2.3,
                    left: 9.575
                },
                stop: {
                    top: 2.7,
                    left: 9.575
                }
            },
            {
                source: 'rummy-tile-2.png',
                order: 3,
                width: 3.625,
                start: {
                    top: -3.225,
                    left: 5.975
                },
                stop: {
                    top: 1.775,
                    left: 5.975
                }
            },
            {
                source: 'rummy-tile-3.png',
                order: 4,
                width: 5.2,
                start: {
                    top: 1.125,
                    left: 5.775
                },
                stop: {
                    top: 6.125,
                    left: 5.775
                }
            },
            {
                source: 'coin.png',
                order: 10,
                width: 3.4,
                start: {
                    top: 3.25,
                    left: 11.1
                },
                stop: {
                    top: 8.25,
                    left: 11.1
                }
            },
            {
                source: 'coin.png',
                order: 11,
                width: 3.4,
                start: {
                    top: 2.625,
                    left: 11.225
                },
                stop: {
                    top: 7.625,
                    left: 11.225
                }
            },
            {
                source: 'coin.png',
                order: 12,
                width: 3.4,
                start: {
                    top: 2.025,
                    left: 11.225
                },
                stop: {
                    top: 7.025,
                    left: 11.225
                }
            },
            {
                source: 'coin.png',
                order: 13,
                width: 3.4,
                start: {
                    top: 1.4,
                    left: 10.975
                },
                stop: {
                    top: 6.4,
                    left: 10.975
                }
            },
            {
                source: 'dice.png',
                order: 1,
                width: 3.175,
                start: {
                    top: -4.075,
                    left: 11.2
                },
                stop: {
                    top: 0.925,
                    left: 11.2
                }
            }
        ]
    },
    'work-in-office': {
        staticItems: [
            {
                source: 'desk-on-platform.png',
                order: 4,
                width: 20,
                position: {
                    top: 0.45,
                    left: 2.4
                }
            }
        ],
        animatedItems: [
            {
                source: 'design-tile.png',
                order: 1,
                width: 5.575,
                start: {
                    top: 14.275,
                    left: 2.375
                },
                stop: {
                    top: 9.275,
                    left: 2.375
                }
            },
            {
                source: 'coding-tile.png',
                order: 3,
                width: 5.575,
                start: {
                    top: 17.025,
                    left: 7.2
                },
                stop: {
                    top: 12.025,
                    left: 7.2
                }
            },
            {
                source: 'business-tile.png',
                order: 2,
                width: 5.575,
                start: {
                    top: 16.55,
                    left: 12.05
                },
                stop: {
                    top: 11.55,
                    left: 12.05
                }
            },
            {
                source: 'organization-tile.png',
                order: 1,
                width: 5.575,
                start: {
                    top: 13.775,
                    left: 16.825
                },
                stop: {
                    top: 8.775,
                    left: 16.825
                }
            }
        ]
    },
    'career-levels': {
        staticItems: [
            {
                source: 'coleagues.png',
                order: 3,
                width: 6.625,
                position: {
                    top: 3.4,
                    left: 9.05
                }
            }
        ],
        animatedItems: [
            {
                source: 'block-1.png',
                order: 5,
                width: 9.275,
                start: {
                    top: 21.075,
                    left: 7.7
                },
                stop: {
                    top: 16.075,
                    left: 7.7
                }
            },
            {
                source: 'block-2.png',
                order: 4,
                width: 8.975,
                start: {
                    top: 18.225,
                    left: 1.5
                },
                stop: {
                    top: 13.225,
                    left: 1.5
                }
            },
            {
                source: 'block-3.png',
                order: 3,
                width: 7.375,
                start: {
                    top: 12.875,
                    left: 0.575
                },
                stop: {
                    top: 7.875,
                    left: 0.575
                }
            },
            {
                source: 'block-4.png',
                order: 2,
                width: 9.25,
                start: {
                    top: 7.75,
                    left: 1.55
                },
                stop: {
                    top: 2.75,
                    left: 1.55
                }
            },
            {
                source: 'block-5.png',
                order: 1,
                width: 8.875,
                start: {
                    top: 5.875,
                    left: 8.2
                },
                stop: {
                    top: 0.875,
                    left: 8.2
                }
            },
            {
                source: 'block-6.png',
                order: 2,
                width: 9.125,
                start: {
                    top: 5,
                    left: 14.3
                },
                stop: {
                    top: 0,
                    left: 14.3
                }
            }
        ]
    }
}


export default class Animation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratio: 0,
            topLimit: this.props.topLimit,
            bottomLimit: this.props.bottomLimit
        }
        this.setRatio = this.setRatio.bind(this);
        this.calculateFactor = this.calculateFactor.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.setRatio);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.setRatio);
    }
    setRatio() {
        let topLimit = this.state.topLimit || window.innerHeight / 4;
        let bottomLimit = this.state.bottomLimit || window.innerHeight * 3 / 4;
        let containerTop = this.refs.animation.getBoundingClientRect().top;
        if(containerTop >= bottomLimit) {
            this.setState({
                ratio: 0
            });
        } else if (containerTop < bottomLimit && containerTop > topLimit) {
            this.setState({
                ratio: (bottomLimit - containerTop) / (bottomLimit - topLimit)
            });
        } else if (containerTop <= topLimit) {
            this.setState({
                ratio: 1
            });
        }
    }
    calculateFactor(index, total) {
        let ratio = this.state.ratio;
        if(ratio <= index / total) {
            return 0;
        } else if (ratio > index / total && ratio < (index + 1) / total) {
            return (ratio - index / total) * total;
        } else if (ratio >= (index + 1) / total) {
            return 1;
        }
    }
    render() {
        let id = this.props.id;
        let background = animations[id].background;
        let staticItems = animations[id].staticItems;
        let animatedItems = animations[id].animatedItems;
        return (
            <div
                ref="animation"
                className="animation"
                style={background ? {backgroundImage: 'url("/app/images/illustrations/' + id + '/' + background.source + '")'} : {}}
            >
                {animatedItems.map((item, index) =>
                <img
                    key={index}
                    src={'/app/images/illustrations' + '/' + id + '/' + item.source}
                    style={{
                        zIndex: item.order || 1,
                        width: item.width + 'em',
                        opacity: this.calculateFactor(index, animatedItems.length),
                        top: (item.start.top + (item.stop.top - item.start.top) * this.calculateFactor(index, animatedItems.length)) + 'em',
                        left: (item.start.left + (item.stop.left - item.start.left) * this.calculateFactor(index, animatedItems.length)) + 'em'
                    }}
                />
                )}
                {staticItems.map((item, index) =>
                <img
                    key={index}
                    src={'/app/images/illustrations' + '/' + id + '/' + item.source}
                    style={{
                        zIndex: item.order || 1,
                        width: item.width + 'em',
                        top: item.position.top + 'em',
                        left: item.position.left + 'em'
                    }}
                />
                )}
            </div>
        )
    }
}