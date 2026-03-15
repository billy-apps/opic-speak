export const C = {
  w: '#FFFFFF',
  bg: '#F5F7F3',
  bg2: '#EDF0EA',
  bg3: '#E2E6DE',
  ink: '#1A1F16',
  ink2: '#3A4035',
  ink3: '#6B7466',
  ink4: '#A8B0A2',
  ink5: '#CDD3C8',
  em: '#1A7A4A',
  em2: '#158A52',
  ems: 'rgba(26,122,74,0.09)',
  gold: '#B87A1A',
  golds: 'rgba(184,122,26,0.10)',
  rose: '#C0404A',
  roses: 'rgba(192,64,74,0.09)',
  sky: '#2472A0',
  skys: 'rgba(36,114,160,0.09)',
  line: 'rgba(26,31,22,0.07)',
  line2: 'rgba(26,31,22,0.13)',
} as const;

export const LV_COLORS = {
  im: { text: C.sky, bg: C.skys, border: C.sky },
  ih: { text: C.em,  bg: C.ems,  border: C.em  },
  al: { text: C.gold, bg: C.golds, border: C.gold },
} as const;

export type Level = 'im' | 'ih' | 'al';
