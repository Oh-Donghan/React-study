import { BadgeProps } from '../components/Badge';

export interface DataItem {
  login: string;
  title: string;
  description: string;
}

export interface Data {
  data: DataItem[];
}

export type List = Partial<DataItem> & { name: string };

export enum STATE {
  OPEN = 'open',
  CLOSE = 'close',
}

export interface ListItem {
  id: string;
  labels: BadgeProps[];
  state: STATE;
  created_at: string;
  closed_at: string;
  title: string;
  number: number;
  user: {login: string}
}