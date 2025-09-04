let audioCtx;

const getAudioCtx = () => {
	if(!audioCtx)
		audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	return audioCtx;
}
export default getAudioCtx;
