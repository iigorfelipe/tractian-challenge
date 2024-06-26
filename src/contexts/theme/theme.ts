export const communColors = {
  success: '#52C41A',
  error: '#ED3833',

  extra1: '#17192D',
  extra2: '#023B78',
  extra3: '#2188FF',
  extra4: '#24292F',
}

export const Light = {
  title: 'ligth',

  colors: {
    bg: '#EAEAEA',
    txt: communColors.extra4,
    border: '#D8DFE6',

    ...communColors,
  },
};

export const Dark = {
  title: 'dark',

  colors: {
    bg: '#444',
    txt: '#FFF',
    border: '#585454',

    ...communColors,
  },
};

export type SelectedTheme = typeof Light | typeof Dark;
