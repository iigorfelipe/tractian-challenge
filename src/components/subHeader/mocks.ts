export type ButtonLabel = 'sensor' | 'status' | null;

type ButtonsType = {
  title: 'Sensor de Energia' | 'Crítico';
  label: ButtonLabel;
  icon:  string;
};

export const buttons: ButtonsType[] = [
  {
    title: 'Sensor de Energia',
    label: 'sensor',
    icon: '/lightning'
  },
  {
    title: 'Crítico',
    label: 'status',
    icon: '/critic'
  }
];
