type IconProps = {
    width?: number | string;
    height?: number | string;
    className?: string;
};

export const Viagens = ({ width = 24, height = 24, className }: IconProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
    >
<path d="M16 14V11H14V14H11V16H14V19H16V16H19V14H16Z" fill="white"/>
<path d="M16 0H14V9H16V0Z" fill="white"/>
<path d="M2 0H0V16H2V0Z" fill="white"/>
<path d="M9 0H7V4H9V0Z" fill="white"/>
<path d="M9 6H7V10H9V6Z" fill="white"/>
<path d="M9 12H7V16H9V12Z" fill="white"/>
</svg>
);