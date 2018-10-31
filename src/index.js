import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
        this.playClip = this.playClip.bind(this);
        this.setDrumInactive = this.setDrumInactive.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    //add event listener after the drum-pad is mounted.
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    playClip(){
        const clip = document.getElementById(this.props.text);
        const display = document.getElementById('display');
        display.innerHTML = this.props.name;
        this.setState({
            active: true,
        });
        setTimeout(() => this.setDrumInactive(), 100);
        clip.currentTime = 0;
        clip.play();
    }

    setDrumInactive(){
        this.setState({
            active: false,
        });
    }

    handleKeyPress(event) {
        if (event.keyCode === this.props.keyCode) {
            this.playClip();
        }
    }

    render() {
        return (
            <div className={this.state.active ? 'drum-pad drum-pad-pressed' : 'drum-pad'} 
                id={'drum_' + this.props.text}
                onClick={this.playClip}>
                {this.props.text}
                <audio className='clip' id={this.props.text} src={this.props.src}>
                    <source src={this.props.src} type="audio/mpeg"></source>
                </audio>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drumPads: [
                {text: 'Q', keyCode: 81, name: 'sms-alert-1', src: 'https://farajdaoud.com/subsite/drum-machine/audio/sms-alert-1.mp3'},
                {text: 'W', keyCode: 87, name: 'sms-alert-2', src: 'https://farajdaoud.com/subsite/drum-machine/audio/sms-alert-2.mp3'},
                {text: 'E', keyCode: 69, name: 'sms-alert-3', src: 'https://farajdaoud.com/subsite/drum-machine/audio/sms-alert-3.mp3'},
                {text: 'A', keyCode: 65, name: 'sms-alert-4', src: 'https://farajdaoud.com/subsite/drum-machine/audio/sms-alert-4.mp3'},
                {text: 'S', keyCode: 83, name: 'sms-alert-5', src: 'https://farajdaoud.com/subsite/drum-machine/audio/sms-alert-5.mp3'},
                {text: 'D', keyCode: 68, name: 'air-horn', src: 'https://farajdaoud.com/subsite/drum-machine/audio/air-horn.mp3'},
                {text: 'Z', keyCode: 90, name: 'bike-horn', src: 'https://farajdaoud.com/subsite/drum-machine/audio/bike-horn.mp3'},
                {text: 'X', keyCode: 88, name: 'door-chime', src: 'https://farajdaoud.com/subsite/drum-machine/audio/door-chime.mp3'},
                {text: 'C', keyCode: 67, name: 'error-alert', src: 'https://farajdaoud.com/subsite/drum-machine/audio/error-alert.mp3'},
            ]
        };
    }

    addDrumButtons(){
        let drumPads = [];
        drumPads = this.state.drumPads.map((x) => 
            <DrumPad key={'drum_' + x.text} text={x.text} src={x.src} name={x.name} keyCode={x.keyCode}/>);
        return drumPads;
    }

    render() {
        return(
            <div id="app-wrapper">
                <div id="drum-machine">
                    <div id="display"></div>
                    <div id="drum-button-container">
                        {this.addDrumButtons()}
                    </div>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));