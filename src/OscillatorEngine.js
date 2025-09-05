const oscillatorTypes = [ 'sine', 'triangle', 'sawtooth', 'square' ];

export default class OscillatorEngine {
	constructor(audioCtx) {
		this.gainNodes = [];
		this.oscillators = [];
		this.ctx = audioCtx;
		this.mode = 0;
		for(let i=0; i<oscillatorTypes.length; i++) {

			const gainNode = this.ctx.createGain();
			gainNode.gain.value = 0;
			this.gainNodes.push(gainNode);

			const osc = this.ctx.createOscillator();
			osc.type = oscillatorTypes[i];
			osc.frequency.value = 440;
			this.oscillators.push(osc);

		}
		this.gainNodes[this.mode].gain.value = 1;
	}

	connectChain(filter, masterGain) {
		for(let i=0; i<this.oscillators.length; i++) {
			this.oscillators[i].connect(this.gainNodes[i]);
			this.gainNodes[i].connect(filter);
			filter.connect(masterGain);
			masterGain.connect(this.ctx.destination);
		}
	}

	connectGain(masterGain) {
		for(let i=0; i<this.oscillators.length; i++) {
			this.oscillators[i].connect(this.gainNodes[i]);
			this.gainNodes[i].connect(masterGain);
			masterGain.connect(this.ctx.destination);
		}
	}

	startOscillators() {
		for(let i=0; i<this.oscillators.length; i++)
			this.oscillators[i].start();
	}

	muteAllOscillators() {
		for(const node of this.gainNodes)
			node.gain.value = 0;
	}

	changeFrequency(frequency) {
		this.oscillators[this.mode].frequency.value = frequency;
	}

	changeMode(mode) {
		this.mode = mode;
		this.muteAllOscillators();
		this.gainNodes[this.mode].gain.value = 1;
	}
}
