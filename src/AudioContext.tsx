import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

type Instrument = 'guitar' | 'piano' | 'bass' | 'synth';
type Tone = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B';
type Octave = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface IAudioCTX {
  playTone: (instrument: Instrument, tone: Tone, octave: Octave) => void;
}

const AudioCTX = createContext<IAudioCTX>({
  playTone: () => {},
});

const AudioContainer: FC<PropsWithChildren> = ({ children }) => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    const ctx = new AudioContext();
    setAudioContext(ctx);
  }, []);

  const playTone = (instrument: Instrument, tone: Tone, octave: Octave) => {
    if (!audioContext) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 2);
  };

  return <AudioCTX value={{ playTone }}>{children}</AudioCTX>;
};
export default AudioContext;
