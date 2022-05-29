export const info = [
    {
      name: 'Calendar',
    },
    {
      name: 'Input',
    },
  ]
  
  export const works = info.map((info, idx) => {
    return {
      ...info,
      no: `${idx + 1}`.padStart(3, '0'),
    }
  })