type IconProps = {
    width?: number | string;
    height?: number | string;
    className?: string;
};

export const Motoristas = ({ width = 24, height = 24, className }: IconProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M19 19H5V17C5 15.3431 6.34315 14 8 14H16C17.6569 14 19 15.3431 19 17V19Z" fill="white" />
        <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="white" />
    </svg>
);
