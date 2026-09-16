export interface CardProps {
  src: string;
  name: string;
  description: string;
  price: number;
  time: string;
  user: string;
  userName: string;
}

export type CardContentProps = {
  id: number;
  src: string;
  name: string;
  description: string;
  price: number;
  time: string;
  user: string;
  userName: string;
};
