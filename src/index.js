import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drumPads: [
                {text: 'Q', id: 'whistle', src: '/audio/sms-alert-1.mp3'},
                {text: 'W', id: 'whistle', src: ''},
                {text: 'E', id: 'whistle', src: ''},
                {text: 'A', id: 'whistle', src: ''},
                {text: 'S', id: 'whistle', src: ''},
                {text: 'D', id: 'whistle', src: ''},
                {text: 'Z', id: 'whistle', src: ''},
                {text: 'X', id: 'whistle', src: ''},
                {text: 'C', id: 'whistle', src: ''},
            ]
        };
    }

    addDrumButtons(){
        let drumPads = [];
        drumPads = this.state.drumPads.map((x) => 
            <div className="drum-pad" 
                key={'drum_' + x.text} 
                id={'drum_' + x.id} 
                onClick={() => console.log('Hello Wolrd')}>
                {x.text}
                <audio controls className='clip' id={x.text}>
                    <source src={x.src} type="audio/ogg" />
                    <source src={x.src} type="audio/mpeg" />
                </audio>
            </div>);
        return drumPads;
    }

    playAudioClip(id){

    }

    render() {
        return(
            <div id="app-wrapper">
                <div id="drum-button-container">
                    {this.addDrumButtons()}
                </div>
                <div id="drum-machine">
                    <div id="display"></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));