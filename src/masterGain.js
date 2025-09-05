import getAudioCtx from './audioCtx.js';

const audioCtx = getAudioCtx();
const masterGain = audioCtx.createGain();
masterGain.gain.value = 0;

const getMasterGain = () => {
	return masterGain;
}
export default getMasterGain;

