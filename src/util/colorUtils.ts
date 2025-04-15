import { Root } from './scaleUtils';

const NOTE_COLORS: Record<Root, string> = {
  C: '#93278F',
  'C#': '#d0a134',
  D: '#5f0a96',
  'D#': '#106362',
  E: '#bb3946',
  F: '#804fbc',
  'F#': '#6b9817',
  G: '#a44835',
  'G#': '#ac5496',
  A: '#772849',
  'A#': '#7aaac5',
  B: '#d0566e',
} as const;

export const getNoteColor = (note: Root) => {
  return NOTE_COLORS[note];
};

// #fcba04, #a50104, #50c5b7, #0075c4, #006d77
