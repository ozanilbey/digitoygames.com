import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color : '217, 58, 73',
            alpha: 0,
            open: false,
            scrollTop: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.handleAlphaChannel = this.handleAlphaChannel.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        let currentScrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        this.handleVisibility(currentScrollTop);
        this.handleAlphaChannel(currentScrollTop);
    }
    handleVisibility(currentScrollTop) {
        let navigation = document.getElementById('navigation');
        let navigationHeight = navigation.offsetHeight;
        if(this.state.scrollTop > navigationHeight) {
            if(this.state.scrollTop > currentScrollTop) {
                navigation.classList.remove('up');
            } else if(this.state.scrollTop < currentScrollTop) {
                navigation.classList.add('up');
                this.state.open && this.setState({
                    open: false
                });
            }
        }
        this.setState({
            scrollTop: currentScrollTop
        });
    }
    handleAlphaChannel(scrollTop) {
        if(scrollTop <= 0) {
            this.setState({
                alpha: 0
            });
        } else if (0 < scrollTop && scrollTop <= 100) {
            this.setState({
                alpha: scrollTop / 100
            })
        }
        else {
            this.setState({
                alpha: 1
            });
        }
    }
    handleToggle(event) {
        if(event && event.target.id == 'toggle') {
            event.preventDefault();
            this.setState({
                open: !this.state.open
            });
        } else {
            this.setState({
                open: false
            });
        }
    }
    render() {
        let color = this.state.color;
        let alpha = this.state.alpha
        let style = {
            backgroundColor: 'rgba(' + color + ', ' + 1 + ')',
            borderBottom: '.2em solid rgba(0, 0, 0, ' + alpha / 16 + ')',
            boxShadow: '0 0 0.75em 0 rgba(0, 0, 0, ' + alpha / 4 + ')'
        }
        return (
            <nav id="navigation" className={'scroll' + (this.state.open ? ' open' : '')} style={style}>
                <div className="container">
                    <a id="toggle" onClick={this.handleToggle}>
                        <svg className="open" fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="106.925 6.163 41.27 32.386" xmlSpace="preserve">
                            <path d="M145.248,6.163h-35.375c-1.628,0-2.948,1.319-2.948,2.948c0,1.628,1.32,2.947,2.948,2.947h35.375 c1.628,0,2.947-1.319,2.947-2.947C148.195,7.483,146.875,6.163,145.248,6.163z"/>
                            <path d="M145.248,19.408h-35.375c-1.628,0-2.948,1.319-2.948,2.948c0,1.628,1.32,2.947,2.948,2.947h35.375 c1.628,0,2.947-1.319,2.947-2.947C148.195,20.728,146.875,19.408,145.248,19.408z"/>
                            <path d="M148.195,35.601c0-1.628-1.319-2.947-2.947-2.947h-35.375c-1.628,0-2.948,1.319-2.948,2.947 c0,1.629,1.32,2.948,2.948,2.948h35.375C146.875,38.549,148.195,37.23,148.195,35.601z"/>
                        </svg>
                        <svg className="close" fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 595.28 467.72" xmlSpace="preserve">
                            <path d="M498.265,374.175L357.953,233.863L498.275,93.541L518.316,73.5c16.605-16.604,16.604-43.51,0-60.115 s-43.531-16.604-60.125-0.011L438.15,33.415L297.828,173.738L157.504,33.415l-20.041-20.041c-16.604-16.605-43.51-16.604-60.115,0 s-16.604,43.531-0.011,60.125L97.379,93.54l140.323,140.323L97.39,374.175l-20.04,20.041c-16.605,16.605-16.616,43.521-0.001,60.137 c16.604,16.604,43.521,16.594,60.126-0.012l20.041-20.039l140.312-140.312L438.14,434.3l20.041,20.041 c16.604,16.605,43.521,16.615,60.136,0c16.604-16.604,16.595-43.52-0.011-60.125L498.265,374.175z"/>
                        </svg>
                    </a>
                    <ul id="menu">
                        <li>
                            <NavLink className="about" to="/about" activeClassName="active" onClick={this.handleToggle}>
                                Biz Kimiz?
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="games" to="/games" activeClassName="active" onClick={this.handleToggle}>
                                Oyunlar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="home identity" exact to="/" activeClassName="active" onClick={this.handleToggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 272">
                                    <path fill="white" d="M238.55,208.16H226.43v26.37C226.43,255.22,180.12,272,123,272S19.57,255.22,19.57,234.53V208.16H7.45A7.45,7.45,0,0,1,0,200.76V141.55a7.45,7.45,0,0,1,7.45-7.4H19.57V99.92a27.94,27.94,0,0,1,28-27.76h68.92a70.55,70.55,0,0,1,13.1-31.49A24.78,24.78,0,0,1,124,25a25.13,25.13,0,1,1,25.13,25,25.46,25.46,0,0,1-8-1.28,55.61,55.61,0,0,0-10.89,23.48h68.23a27.94,27.94,0,0,1,28,27.76v34.23h12.12a7.45,7.45,0,0,1,7.45,7.4v59.21A7.45,7.45,0,0,1,238.55,208.16Zm-73-93.77c-13.78-4.27-28.45-4.46-42.4-4.23-14.36-.23-28.44-.06-42.55,4.23-25.42,11.5-33.5,41.73-31.91,66.49,1.5,7.72.71,21.77,12.64,19.67,17.51-3.13,27-23,45-26.26a91.35,91.35,0,0,1,16.82-1.67,88.44,88.44,0,0,1,16.69,1.67c18,3.25,27.37,23.13,44.87,26.26,11.94,2.1,11.18-12,12.68-19.67C198.94,156.12,190.82,125.89,165.51,114.39Zm-9.9,50.29a13.88,13.88,0,1,1,14-13.88A13.92,13.92,0,0,1,155.61,164.68ZM96,167.46H84.8V158.2H75.48V147.1H84.8v-9.25H96v9.25h9.32v11.1H96Z"/>
                                </svg>
                                <span>Anasayfa</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="jobs" to="/jobs" activeClassName="active" onClick={this.handleToggle}>
                                Kariyer
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="contact" to="/contact" activeClassName="active" onClick={this.handleToggle}>
                                İletişim
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}