export const info = [
  {
    name: 'Calendar',
  },
  {
    name: 'Input',
  },
  {
    name: 'Typing',
  },
  {
    name: 'Hamburger',
  },
  {
    name: 'Spinner',
  },
  {
    name: 'Pricing',
  },
  {
    name: 'Searchbar',
  },
];

export const works = info.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  };
});
