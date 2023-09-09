import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <svg
        fill="#000000"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 23.008v-17.984q0-1.024 0.48-1.888t1.28-1.44q1.024-0.672 2.24-0.672 0.736 0 1.472 0.256l10.016 4q0.064 0.032 0.512 0.32 0.448-0.288 0.512-0.32l10.016-4q0.736-0.256 1.472-0.256 1.248 0 2.24 0.672 0.832 0.576 1.312 1.44t0.448 1.888v17.984q0 1.248-0.672 2.24t-1.856 1.472l-9.984 4q-0.736 0.288-1.472 0.288-1.024 0-2.016-0.576-0.992 0.576-1.984 0.576-0.768 0-1.504-0.288l-9.984-4q-1.152-0.448-1.824-1.472t-0.704-2.24zM4 23.008l10.016 4v-17.984l-10.016-4v17.984zM6.016 21.824v-2.016l5.984 2.4v2.016zM6.016 17.824v-2.016l5.984 2.4v2.016zM6.016 13.824v-2.016l5.984 2.4v2.016zM6.016 9.824v-2.016l5.984 2.4v2.016zM18.016 27.008l9.984-4v-17.984l-9.984 4v17.984zM20 24.224v-2.016l6.016-2.4v2.016zM20 20.224v-2.016l6.016-2.4v2.016zM20 16.224v-2.016l6.016-2.4v2.016zM20 12.224v-2.016l6.016-2.4v2.016z"></path>
      </svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
