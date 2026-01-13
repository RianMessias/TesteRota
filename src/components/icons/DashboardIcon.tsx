type IconProps = {
    width?: number | string;
    height?: number | string;
    size?: number | string;
    className?: string;
};

export const DashboardIcon = ({ width = 19, height = 19, size, className }: IconProps) => (
    <svg
        width={size || width}
        height={size || height}
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g clipPath="url(#clip0_7594_10264)">
            <path
                d="M18.2083 17.4167H3.95833C3.32844 17.4167 2.72435 17.1664 2.27895 16.721C1.83356 16.2756 1.58333 15.6716 1.58333 15.0417V0.791667C1.58333 0.581704 1.49993 0.38034 1.35146 0.231874C1.20299 0.0834075 1.00163 0 0.791667 0C0.581704 0 0.38034 0.0834075 0.231874 0.231874C0.0834075 0.38034 0 0.581704 0 0.791667L0 15.0417C0.00125705 16.0911 0.418698 17.0972 1.16076 17.8392C1.90282 18.5813 2.9089 18.9987 3.95833 19H18.2083C18.4183 19 18.6197 18.9166 18.7681 18.7681C18.9166 18.6197 19 18.4183 19 18.2083C19 17.9984 18.9166 17.797 18.7681 17.6485C18.6197 17.5001 18.4183 17.4167 18.2083 17.4167Z"
                fill="currentColor"
            />
            <path d="M4.7526 15.8359V9.5026" stroke="currentColor" strokeWidth="1.6" />
            <path d="M7.91406 7.91667V15.0417" stroke="currentColor" strokeWidth="1.6" />
            <path d="M11.875 10.2917V15.0417" stroke="currentColor" strokeWidth="1.6" />
            <path d="M15.8359 7.1276V15.0443" stroke="currentColor" strokeWidth="1.6" />
        </g>
        <defs>
            <clipPath id="clip0_7594_10264">
                <rect width="19" height="19" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
