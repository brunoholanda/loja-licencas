declare module 'react-payment-icons' {
    import * as React from 'react';
  
    interface PaymentIconProps {
      id: string;
      className?: string;
    }
  
    export const ICON_TYPES: { [key: string]: string };
  
    export const PaymentIcon: React.FC<PaymentIconProps>;
  }
  