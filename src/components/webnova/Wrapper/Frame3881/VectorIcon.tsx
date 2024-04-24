import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.553 1.1453C12.528 1.05016 12.4781 0.963387 12.4085 0.893825C12.339 0.824262 12.2522 0.774405 12.1571 0.749344C11.0177 0.453412 9.81792 0.485285 8.69587 0.841294C7.57382 1.1973 6.57513 1.86297 5.8148 2.76165L5.19555 3.49693L3.7488 3.14786C3.39707 3.02524 3.01286 3.03403 2.66711 3.1726C2.32136 3.31118 2.03743 3.57018 1.86775 3.90177L0.645733 6.06784C0.602915 6.14371 0.578547 6.22859 0.574598 6.31562C0.57065 6.40265 0.587232 6.48939 0.623005 6.56883C0.658777 6.64826 0.712736 6.71817 0.780521 6.7729C0.848306 6.82762 0.928015 6.86564 1.01321 6.88386L2.71986 7.24971C2.57529 7.68979 2.47206 8.14239 2.41151 8.60164C2.40054 8.68601 2.40908 8.77178 2.4365 8.85233C2.46391 8.93287 2.50945 9.00604 2.56962 9.0662L4.29147 10.7881C4.34302 10.8396 4.40423 10.8806 4.47161 10.9085C4.53899 10.9364 4.61121 10.9508 4.68415 10.9508C4.70015 10.9508 4.71615 10.95 4.73242 10.9486C5.20194 10.9064 5.66575 10.8152 6.11628 10.6765L6.47379 12.3445C6.49206 12.4296 6.5301 12.5093 6.58483 12.5771C6.63957 12.6448 6.70947 12.6988 6.7889 12.7346C6.86832 12.7703 6.95504 12.7869 7.04206 12.783C7.12908 12.7791 7.21395 12.7547 7.28983 12.712L9.45888 11.4886C9.76417 11.3031 10.0026 11.0254 10.1399 10.6956C10.2772 10.3658 10.3061 10.0009 10.2226 9.65363L9.85118 8.12124L10.5383 7.48945C11.4403 6.73124 12.1085 5.7325 12.4652 4.6094C12.8219 3.48631 12.8523 2.28502 12.553 1.1453V1.1453ZM1.9841 5.95584L2.84842 4.42302C2.9021 4.31896 2.99356 4.23938 3.10405 4.2006C3.21453 4.16182 3.33567 4.16678 3.44261 4.21447L4.39649 4.44563L4.03547 4.8743C3.6932 5.28451 3.39717 5.73119 3.15273 6.20625L1.9841 5.95584ZM8.91027 10.5226L7.40185 11.3733L7.1633 10.2599C7.64686 10.0187 8.09737 9.71634 8.50374 9.36018L8.91671 8.98046L9.14079 9.90502C9.16985 10.0192 9.16335 10.1395 9.12215 10.2499C9.08095 10.3602 9.00703 10.4554 8.91027 10.5226V10.5226ZM9.80685 6.65392L7.76038 8.53469C6.95034 9.23522 5.95118 9.6805 4.88865 9.81448L3.55326 8.47909C3.73262 7.41379 4.19294 6.41563 4.88675 5.58759L5.81893 4.48082C5.83446 4.46457 5.84895 4.44737 5.86232 4.4293L6.65931 3.48304C7.24859 2.78705 8.01202 2.25991 8.87166 1.95545C9.73129 1.65099 10.6563 1.58012 11.5523 1.75008C11.7264 2.64886 11.6562 3.57788 11.3493 4.44036C11.0423 5.30284 10.5096 6.06723 9.80685 6.65392V6.65392ZM9.2942 3.23046C9.12943 3.23046 8.96835 3.27932 8.83134 3.37087C8.69434 3.46241 8.58755 3.59253 8.5245 3.74476C8.46144 3.897 8.44494 4.06451 8.47709 4.22612C8.50923 4.38773 8.58858 4.53618 8.7051 4.6527C8.82161 4.76921 8.97006 4.84856 9.13167 4.8807C9.29328 4.91285 9.46079 4.89635 9.61303 4.8333C9.76526 4.77024 9.89538 4.66345 9.98692 4.52645C10.0785 4.38944 10.1273 4.22836 10.1273 4.06359C10.1273 3.95418 10.1058 3.84583 10.0639 3.74475C10.0221 3.64366 9.96069 3.55182 9.88332 3.47445C9.80595 3.39709 9.71411 3.33572 9.61302 3.29385C9.51194 3.25199 9.40359 3.23044 9.29418 3.23045L9.2942 3.23046Z'
      fill='#9F9FBC'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
