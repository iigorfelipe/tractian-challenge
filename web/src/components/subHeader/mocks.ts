export type ButtonLabel = 'energySensor' | 'critical' | null;

type ButtonsType = {
  title: 'Sensor de Energia' | 'Crítico';
  label: ButtonLabel;
  icon:  string;
};

export const buttons: ButtonsType[] = [
  {
    title: 'Sensor de Energia',
    label: 'energySensor',
    icon: '/lightning'
  },
  {
    title: 'Crítico',
    label: 'critical',
    icon: '/critic'
  }
];
