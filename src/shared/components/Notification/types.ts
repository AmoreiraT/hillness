export interface NotificationStylesProps {
  marginTop?: '0.8rem' | '1.6rem' | '3.2rem';
}

export interface NotificationProps extends NotificationStylesProps {
  message: string;
}
