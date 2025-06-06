export type NoteName = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B';
export type Accidental = 'bb' | 'b' | '' | '#' | '##';

export type Note = `${NoteName}${Accidental}`;

type ScaleDegree = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

type IntervalQuality = 'dim' | 'm' | 'M' | 'P' | 'aug';

type Interval = `${IntervalQuality}${ScaleDegree}`;

export type Root = Extract<
  Note,
  'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B' | 'C#' | 'D#' | 'F#' | 'G#' | 'A#'
>;

export const NOTE_ORDER: Root[] = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];

export const CYCLE_OF_FIFTHS: Root[] = [
  'C',
  'G',
  'D',
  'A',
  'E',
  'B',
  'F#',
  'C#',
  'G#',
  'D#',
  'A#',
  'F',
];

export const ENHARMONIC_EQUIVALENTS: Record<Note, string> = {
  C: 'C',
  'C#': 'Db',
  'C##': 'D',
  Dbb: 'C',
  Db: 'C#',
  D: 'D',
  'D#': 'Eb',
  'D##': 'E',
  Ebb: 'D',
  Eb: 'D#',
  E: 'E',
  F: 'F',
  'F#': 'Gb',
  'F##': 'G',
  Gb: 'F#',
  Gbb: 'F',
  G: 'G',
  'G#': 'Ab',
  Ab: 'G#',
  Abb: 'G',
  A: 'A',
  'A#': 'Bb',
  Bbb: 'A',
  Bb: 'A#',
  B: 'B',
  Cbb: 'Bb',
  Cb: 'B',
  'B#': 'C',
  'B##': 'C#',
  'E#': 'F',
  'E##': 'F#',
  Fb: 'E',
  Fbb: 'D#',
  'G##': 'A',
  'A##': 'B',
};

export const SCALES = [
  'chromatic',
  'major',
  'minor',
  'harmonicMinor',
  'melodicMinor',
  'majorPentatonic',
  'minorPentatonic',
  'blues',
  'diminished',
  'wholeTone',
  'wholeHalf',
  'bebop',
  'ionian',
  'dorian',
  'phrygian',
  'lydian',
  'mixolydian',
  'aeolian',
  'locrian',
  'hungarianMinor',
  'neapolitanMajor',
  'neapolitanMinor',
  'enigmatic',
  'doubleHarmonic',
  'persian',
  'arabian',
] as const;

export type SCALE = (typeof SCALES)[number];

export function scaleNameToTitleCase(scaleName: SCALE): string {
  // First, handle special case of 'bebop' which should just be capitalized
  if (scaleName === 'bebop') return 'Bebop';

  // Split the camelCase string into words and capitalize first letter of each
  return (
    scaleName
      // Insert space before capital letters
      .replace(/([A-Z])/g, ' $1')
      // Handle the first character
      .replace(/^./, (str) => str.toUpperCase())
      // Trim any extra spaces
      .trim()
  );
}

export const SCALE_INTERVALS: Record<SCALE, Interval[]> = {
  chromatic: [
    'P1',
    'm2',
    'M2',
    'm3',
    'M3',
    'P4',
    'aug4',
    'P5',
    'm6',
    'M6',
    'm7',
    'M7',
  ],
  major: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'],
  minor: ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'm7'],
  harmonicMinor: ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'M7'],
  melodicMinor: ['P1', 'M2', 'm3', 'P4', 'P5', 'M6', 'M7'],
  majorPentatonic: ['P1', 'M2', 'M3', 'P5', 'M6'],
  minorPentatonic: ['P1', 'm3', 'P4', 'P5', 'm7'],
  blues: ['P1', 'm3', 'P4', 'aug4', 'P5', 'm7'],
  diminished: ['P1', 'M2', 'm3', 'P4', 'aug4', 'aug5', 'M6', 'M7'],
  wholeTone: ['P1', 'M2', 'M3', 'aug4', 'aug5', 'm7'],
  wholeHalf: ['P1', 'M2', 'm3', 'P4', 'aug4', 'P5', 'M6', 'm7'],
  bebop: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'm7', 'M7'],
  ionian: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'],
  dorian: ['P1', 'M2', 'm3', 'P4', 'P5', 'M6', 'm7'],
  phrygian: ['P1', 'm2', 'm3', 'P4', 'P5', 'm6', 'm7'],
  lydian: ['P1', 'M2', 'M3', 'aug4', 'P5', 'M6', 'M7'],
  mixolydian: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'm7'],
  aeolian: ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'm7'],
  locrian: ['P1', 'm2', 'm3', 'P4', 'dim5', 'm6', 'm7'],
  hungarianMinor: ['P1', 'M2', 'm3', 'aug4', 'P5', 'm6', 'M7'],
  neapolitanMajor: ['P1', 'm2', 'm3', 'P4', 'P5', 'M6', 'M7'],
  neapolitanMinor: ['P1', 'm2', 'm3', 'P4', 'P5', 'm6', 'M7'],
  enigmatic: ['P1', 'm2', 'M3', 'aug4', 'aug5', 'm7', 'M7'],
  doubleHarmonic: ['P1', 'm2', 'M3', 'P4', 'P5', 'm6', 'M7'],
  persian: ['P1', 'm2', 'M3', 'P4', 'aug4', 'm6', 'M7'],
  arabian: ['P1', 'M2', 'M3', 'P4', 'P5', 'm6', 'm7'],
} as const;

export const DIATONIC_CHORD_SCALES: Record<DiatonicChordScale, string[]> = {
  major: ['M', 'm', 'm', 'M', 'M', 'm', 'dim'],
  minor: ['m', 'dim', 'M', 'm', 'm', 'M', 'M'],
  dorian: ['m', 'm', 'M', 'M', 'm', 'dim', 'M'],
  phrygian: ['m', 'M', 'M', 'M', 'm', 'M', 'dim'],
  mixolydian: ['M', 'm', 'dim', 'M', 'M', 'm', 'M'],
  aeolian: ['m', 'dim', 'M', 'm', 'm', 'M', 'M'],
  locrian: ['dim', 'M', 'm', 'm', 'M', 'M', 'm'],
  ionian: ['M', 'm', 'm', 'M', 'M', 'm', 'dim'],
  lydian: ['M', 'M', 'm', 'dim', 'M', 'm', 'm'],
} as const;

export type DiatonicChordScale = Extract<
  SCALE,
  | 'major'
  | 'minor'
  | 'dorian'
  | 'phrygian'
  | 'mixolydian'
  | 'aeolian'
  | 'locrian'
  | 'ionian'
  | 'lydian'
>;

export function isDiatonicChordScale(
  scale: SCALE
): scale is DiatonicChordScale {
  return Object.keys(DIATONIC_CHORD_SCALES).includes(scale);
}

const CHORD_INTERVALS: Record<string, Interval[]> = {
  maj: ['P1', 'M3', 'P5'],
  min: ['P1', 'm3', 'P5'],
  dominant7: ['P1', 'M3', 'P5', 'm7'],
  major7: ['P1', 'M3', 'P5', 'M7'],
  minor7: ['P1', 'm3', 'P5', 'm7'],
  diminished7: ['P1', 'm3', 'dim5', 'dim7'],
  halfDiminished: ['P1', 'm3', 'dim5', 'm7'],
  augmented: ['P1', 'M3', 'aug5'],
  diminished: ['P1', 'm3', 'dim5'],
  suspended: ['P1', 'P4', 'P5'],
  dominant9: ['P1', 'M3', 'P5', 'm7', 'M9'],
  major9: ['P1', 'M3', 'P5', 'M7', 'M9'],
  minor9: ['P1', 'm3', 'P5', 'm7', 'M9'],
  dominant11: ['P1', 'M3', 'P5', 'm7', 'M9', 'P11'],
  major11: ['P1', 'M3', 'P5', 'M7', 'M9', 'P11'],
  minor11: ['P1', 'm3', 'P5', 'm7', 'M9', 'P11'],
  dominant13: ['P1', 'M3', 'P5', 'm7', 'M9', 'P11', 'M13'],
  major13: ['P1', 'M3', 'P5', 'M7', 'M9', 'P11', 'M13'],
  minor13: ['P1', 'm3', 'P5', 'm7', 'M9', 'P11', 'M13'],
  add9: ['P1', 'M3', 'P5', 'M9'],
  add11: ['P1', 'M3', 'P5', 'P11'],
  add13: ['P1', 'M3', 'P5', 'M13'],
  slash: ['P1', 'M3', 'P5', 'P8'],
};

function getNoteIndex(note: Root): number {
  return NOTE_ORDER.indexOf(note.replace(/b/g, '#') as Root);
}

function transpose(note: Root, semitones: number): Root {
  const index = getNoteIndex(note);
  return NOTE_ORDER[(index + semitones + 12) % 12];
}

export function adjustEnharmonic(note: Root): Root {
  return ENHARMONIC_EQUIVALENTS[note] as Root;
}

function getSemitones(interval: Interval): number {
  const baseSemitones: { [key: number]: number } = {
    1: 0,
    2: 2,
    3: 4,
    4: 5,
    5: 7,
    6: 9,
    7: 11,
    8: 12,
    9: 14,
    10: 16,
    11: 17,
    12: 19,
    13: 21,
  };
  const qualityModifiers = { dim: -1, m: -1, M: 0, P: 0, aug: 1 };
  const [quality, degree] = interval.match(/(dim|m|M|P|aug)(\d+)/)!.slice(1);
  return (
    baseSemitones[parseInt(degree as string, 10)] +
    qualityModifiers[quality as IntervalQuality]
  );
}

export function computeScale(
  root: Root,
  scaleType: keyof typeof SCALE_INTERVALS
): Root[] {
  const intervals = SCALE_INTERVALS[scaleType];
  return intervals.map((interval) => transpose(root, getSemitones(interval)));
}

export function identifyChord(notes: Root[]): string {
  const sortedNotes = notes.sort(
    (a, b) => NOTE_ORDER.indexOf(a) - NOTE_ORDER.indexOf(b)
  );
  const intervals = sortedNotes.map((note, index, arr) => {
    if (index === 0) return 'P1';
    const prevIndex = NOTE_ORDER.indexOf(arr[0]);
    const currentIndex = NOTE_ORDER.indexOf(note);
    const intervalSize = (currentIndex - prevIndex + 12) % 12;
    return (
      Object.keys(SCALE_INTERVALS.chromatic).find(
        (key) =>
          SCALE_INTERVALS.chromatic[
            key as keyof typeof SCALE_INTERVALS.chromatic
          ] === intervalSize
      ) || ''
    );
  });

  for (const [chord, chordIntervals] of Object.entries(CHORD_INTERVALS)) {
    if (chordIntervals.every((interval) => intervals.includes(interval))) {
      return chord;
    }
  }
  return 'Unknown Chord';
}

const CHORD_SHORTHAND: Record<string, { classical: string; jazz: string }> = {
  maj: { classical: 'M', jazz: 'maj' },
  min: { classical: 'm', jazz: 'min' },
  dominant7: { classical: '7', jazz: 'dom7' },
  major7: { classical: 'M7', jazz: 'maj7' },
  minor7: { classical: 'm7', jazz: 'min7' },
  diminished7: { classical: 'dim7', jazz: '°7' },
  halfDiminished: { classical: 'm7b5', jazz: 'ø7' },
  augmented: { classical: 'aug', jazz: '+' },
  diminished: { classical: 'dim', jazz: '°' },
  suspended: { classical: 'sus', jazz: 'sus' },
  dominant9: { classical: '9', jazz: 'dom9' },
  major9: { classical: 'M9', jazz: 'maj9' },
  minor9: { classical: 'm9', jazz: 'min9' },
  dominant11: { classical: '11', jazz: 'dom11' },
  major11: { classical: 'M11', jazz: 'maj11' },
  minor11: { classical: 'm11', jazz: 'min11' },
  dominant13: { classical: '13', jazz: 'dom13' },
  major13: { classical: 'M13', jazz: 'maj13' },
  minor13: { classical: 'm13', jazz: 'min13' },
};

export function getChordShorthand(
  chord: string,
  style: 'classical' | 'jazz' = 'classical'
): string {
  return CHORD_SHORTHAND[chord]?.[style] || chord;
}

export function romanize(num: number): string {
  if (isNaN(num)) return ``;
  const digits = String(+num).split('');
  const key = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ];
  let roman = '';
  let i = 3;
  while (i--) roman = (key[+digits.pop()! + i * 10] || '') + roman;
  return Array(+digits.join('') + 1).join('M') + roman;
}
