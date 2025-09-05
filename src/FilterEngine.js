import getAudioCtx from './audioCtx.js';

const audioCtx = getAudioCtx();
const filter = audioCtx.createBiquadFilter();

class FilterEngine {

	constructor() {
		this.filter = filter;
		this.filter.type = 'lowpass';
		this,filter.frequency.value = 440;
		this.filter.Q.value = 1;
	}

	getFilter() {
		return this.filter;
	}

	setLevel(level) {
		this.filter.frequency.value = level;
	}

	setResonance(resonance) {
		this.filter.Q.value = resonance;
	}

	setMode(mode) {
		this.filter.type = parseInt(mode) === 0 ? 'lowpass' : 'highpass';
		console.log(mode);
	}

	connectGain(gainNode) {
		this.filter.connect(gainNode).connect(audioCtx.destination);
	}

}

let filterEngine;

const getFilterEngine = () => {
	if(!filterEngine)
		filterEngine = new FilterEngine();

	return filterEngine;
}
export default getFilterEngine;
