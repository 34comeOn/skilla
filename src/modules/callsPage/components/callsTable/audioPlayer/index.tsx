import ReactAudioPlayer from 'react-audio-player';

export const Player = () => (
    <ReactAudioPlayer
    src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
    autoPlay={false}
    controls
    className='audio'
    style={{width: '352px', height: '48px'}}
  />
);