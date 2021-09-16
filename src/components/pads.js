import {
  heaterOne,
  heaterTwo,
  heaterThree,
  heaterFour,
  clap,
  openHH,
  kickAndHat,
  kick,
  closedHH,
} from './audioImports';

const pads = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater 1',
    audio: heaterOne,
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater 2',
    audio: heaterTwo,
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater 3',
    audio: heaterThree,
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater 4',
    audio: heaterFour,
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    audio: clap,
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open HH',
    audio: openHH,
  },
  {
    keyCode: 89,
    keyTrigger: 'Y',
    id: "Kick n'Hat",
    audio: kickAndHat,
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    audio: kick,
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed HH',
    audio: closedHH,
  },
];

export default pads;
