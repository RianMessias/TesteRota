type IconProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

export const LogoRota = ({ width = 122, height = 26, className }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 122 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
  >
    <rect width="122" height="25.1546" fill="url(#pattern0_7594_10256)" />
    <defs>
      <pattern
        id="pattern0_7594_10256"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_7594_10256"
          transform="matrix(0.00137538 0 0 0.0066706 -0.0515464 -0.225443)"
        />
      </pattern>
      <image
        id="image0_7594_10256"
        width="847"
        height="225"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA08AAADhCAYAAAAQwI4ZAAAA..."
      />
    </defs>
  </svg>
);
