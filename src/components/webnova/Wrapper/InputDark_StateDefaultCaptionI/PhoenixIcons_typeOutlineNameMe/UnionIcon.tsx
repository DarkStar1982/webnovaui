import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.948305 0H17.0513C17.5733 0 18.0003 0.427 18.0003 0.949V1.051C18.0003 1.573 17.5733 2 17.0513 2H0.948305C0.426305 2 0.000305176 1.573 0.000305176 1.051V0.949C0.000305176 0.427 0.426305 0 0.948305 0ZM17.0513 5H0.948305C0.426305 5 0.000305176 5.427 0.000305176 5.949V6.051C0.000305176 6.573 0.426305 7 0.948305 7H17.0513C17.5733 7 18.0003 6.573 18.0003 6.051V5.949C18.0003 5.427 17.5733 5 17.0513 5ZM17.0513 10H0.948305C0.426305 10 0.000305176 10.427 0.000305176 10.949V11.051C0.000305176 11.573 0.426305 12 0.948305 12H17.0513C17.5733 12 18.0003 11.573 18.0003 11.051V10.949C18.0003 10.427 17.5733 10 17.0513 10Z'
      fill='#31374A'
    />
  </svg>
);

const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
