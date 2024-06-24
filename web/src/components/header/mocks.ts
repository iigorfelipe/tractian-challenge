type ButtonLabel = 'apexUnit' | 'tobiasUnit' | 'jaguarUnit' | null;

type ButtonsType = {
  title: 'Apex Unit' | 'Tobias Unit' | "Jaguar Unit";
  label: ButtonLabel;
};

export const buttons: ButtonsType[] = [
  {
    title: 'Apex Unit',
    label: 'apexUnit',
  },
  {
    title: 'Tobias Unit',
    label: 'tobiasUnit',
  },
  {
    title: 'Jaguar Unit',
    label: 'jaguarUnit',
  }
];