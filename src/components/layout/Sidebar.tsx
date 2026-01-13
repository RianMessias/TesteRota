import {
    User,
    MapPin,
    Settings,
    ClipboardList,
    FileBarChart,
    PanelLeftClose
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

// Ícones customizados do Dashboard
const DashboardIcon = ({ size = 19, className }: { size?: number | string, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_dashboard)">
            <path d="M18.2083 17.4167H3.95833C3.32844 17.4167 2.72435 17.1664 2.27895 16.721C1.83356 16.2756 1.58333 15.6716 1.58333 15.0417V0.791667C1.58333 0.581704 1.49993 0.38034 1.35146 0.231874C1.20299 0.0834075 1.00163 0 0.791667 0C0.581704 0 0.38034 0.0834075 0.231874 0.231874C0.0834075 0.38034 0 0.581704 0 0.791667L0 15.0417C0.00125705 16.0911 0.418698 17.0972 1.16076 17.8392C1.90282 18.5813 2.9089 18.9987 3.95833 19H18.2083C18.4183 19 18.6197 18.9166 18.7681 18.7681C18.9166 18.6197 19 18.4183 19 18.2083C19 17.9984 18.9166 17.797 18.7681 17.6485C18.6197 17.5001 18.4183 17.4167 18.2083 17.4167Z" fill="currentColor" />
            <path d="M4.7526 15.8359C4.96257 15.8359 5.16393 15.7525 5.3124 15.6041C5.46086 15.4556 5.54427 15.2542 5.54427 15.0443V9.5026C5.54427 9.29264 5.46086 9.09128 5.3124 8.94281C5.16393 8.79435 4.96257 8.71094 4.7526 8.71094C4.54264 8.71094 4.34128 8.79435 4.19281 8.94281C4.04435 9.09128 3.96094 9.29264 3.96094 9.5026V15.0443C3.96094 15.2542 4.04435 15.4556 4.19281 15.6041C4.34128 15.7525 4.54264 15.8359 4.7526 15.8359Z" fill="currentColor" />
            <path d="M7.91406 7.91667V15.0417C7.91406 15.2516 7.99747 15.453 8.14594 15.6015C8.2944 15.7499 8.49577 15.8333 8.70573 15.8333C8.91569 15.8333 9.11706 15.7499 9.26552 15.6015C9.41399 15.453 9.4974 15.2516 9.4974 15.0417V7.91667C9.4974 7.7067 9.41399 7.50534 9.26552 7.35687C9.11706 7.20841 8.91569 7.125 8.70573 7.125C8.49577 7.125 8.2944 7.20841 8.14594 7.35687C7.99747 7.50534 7.91406 7.7067 7.91406 7.91667Z" fill="currentColor" />
            <path d="M11.875 10.2917V15.0417C11.875 15.2516 11.9584 15.453 12.1069 15.6015C12.2553 15.7499 12.4567 15.8333 12.6667 15.8333C12.8766 15.8333 13.078 15.7499 13.2265 15.6015C13.3749 15.453 13.4583 15.2516 13.4583 15.0417V10.2917C13.4583 10.0817 13.3749 9.88034 13.2265 9.73187C13.078 9.58341 12.8766 9.5 12.6667 9.5C12.4567 9.5 12.2553 9.58341 12.1069 9.73187C11.9584 9.88034 11.875 10.0817 11.875 10.2917Z" fill="currentColor" />
            <path d="M15.8359 7.1276V15.0443C15.8359 15.2542 15.9193 15.4556 16.0678 15.6041C16.2163 15.7525 16.4176 15.8359 16.6276 15.8359C16.8376 15.8359 17.0389 15.7525 17.1874 15.6041C17.3359 15.4556 17.4193 15.2542 17.4193 15.0443V7.1276C17.4193 6.91764 17.3359 6.71628 17.1874 6.56781C17.0389 6.41935 16.8376 6.33594 16.6276 6.33594C16.4176 6.33594 16.2163 6.41935 16.0678 6.56781C15.9193 6.71628 15.8359 6.91764 15.8359 7.1276Z" fill="currentColor" />
            <path d="M4.75244 7.12308C4.96238 7.12304 5.16371 7.0396 5.31214 6.89113L8.15106 4.05221C8.30195 3.90846 8.50237 3.82828 8.71077 3.82828C8.91917 3.82828 9.11959 3.90846 9.27048 4.05221L10.99 5.77171C11.4354 6.21695 12.0393 6.46708 12.6691 6.46708C13.2989 6.46708 13.9028 6.21695 14.3482 5.77171L18.7705 1.34946C18.9147 1.20015 18.9945 1.00017 18.9927 0.7926C18.9909 0.585028 18.9076 0.386468 18.7608 0.239686C18.6141 0.0929049 18.4155 0.00964618 18.2079 0.00784243C18.0003 0.00603868 17.8004 0.0858343 17.6511 0.230043L13.2288 4.6515C13.0804 4.79992 12.879 4.88329 12.6691 4.88329C12.4592 4.88329 12.2579 4.79992 12.1094 4.6515L10.3899 2.93279C9.94452 2.48755 9.34053 2.23743 8.71077 2.23743C8.081 2.23743 7.47702 2.48755 7.03164 2.93279L4.19273 5.77171C4.08204 5.88243 4.00667 6.02347 3.97614 6.17702C3.94561 6.33056 3.96129 6.48972 4.02119 6.63435C4.0811 6.77899 4.18254 6.90262 4.3127 6.98961C4.44286 7.0766 4.59588 7.12305 4.75244 7.12308Z" fill="currentColor" />
        </g>
        <defs>
            <clipPath id="clip0_dashboard">
                <rect width="19" height="19" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const AlertIcon = ({ size = 19, className }: { size?: number | string; className?: string; }) => (
    <svg width={size} height={size} viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M7.01 19.51C7.01 20.61 7.9 21.5 9 21.5C10.1 21.5 10.99 20.61 10.99 19.51H7.01ZM9 4.5C11.76 4.5 14 6.74 14 9.5V16.5H4V9.5C4 6.74 6.24 4.5 9 4.5ZM9 0C8.17 0 7.5 0.67 7.5 1.5V2.67C4.36 3.35 2 6.15 2 9.5V15.5L0 17.5V18.5H18V17.5L16 15.5V9.5C16 6.15 13.64 3.35 10.5 2.67V1.5C10.5 0.67 9.83 0 9 0ZM8 6.5H10V10.5H8V6.5ZM8 12.5H10V14.5H8V12.5Z" fill="currentColor" />
    </svg>
);

const ViagensIcon = ({ size = 19, className }: { size?: number | string; className?: string; }) => (
    <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M16 14V11H14V14H11V16H14V19H16V16H19V14H16Z" fill="currentColor" />
        <path d="M16 0H14V9H16V0Z" fill="currentColor" />
        <path d="M2 0H0V16H2V0Z" fill="currentColor" />
        <path d="M9 0H7V4H9V0Z" fill="currentColor" />
        <path d="M9 6H7V10H9V6Z" fill="currentColor" />
        <path d="M9 12H7V16H9V12Z" fill="currentColor" />
    </svg>
);

const VeiculosIcon = ({ size = 19, className }: { size?: number | string; className?: string; }) => (
    <svg width={size} height={size} viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M19 4H16V0H2C0.9 0 0 0.9 0 2V13H2C2 14.66 3.34 16 5 16C6.66 16 8 14.66 8 13H14C14 14.66 15.34 16 17 16C18.66 16 20 14.66 20 13H22V8L19 4ZM18.5 5.5L20.46 8H16V5.5H18.5ZM5 14C4.45 14 4 13.55 4 13C4 12.45 4.45 12 5 12C5.55 12 6 12.45 6 13C6 13.55 5.55 14 5 14ZM7.22 11C6.67 10.39 5.89 10 5 10C4.11 10 3.33 10.39 2.78 11H2V2H14V11H7.22ZM17 14C16.45 14 16 13.55 16 13C16 12.45 16.45 12 17 12C17.55 12 18 12.45 18 13C18 13.55 17.55 14 17 14Z" fill="currentColor" />
    </svg>
);

const RotasIcon = ({ size = 19, className }: { size?: number | string; className?: string; }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_7583_10304)">
            <path d="M18 4L14 8H17V15C17 16.1 16.1 17 15 17C13.9 17 13 16.1 13 15V8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8V15H2L6 19L10 15H7V8C7 6.9 7.9 6 9 6C10.1 6 11 6.9 11 8V15C11 17.21 12.79 19 15 19C17.21 19 19 17.21 19 15V8H22L18 4Z" fill="currentColor" />
        </g>
        <defs><clipPath id="clip0_7583_10304"><rect width="24" height="24" fill="white" /></clipPath></defs>
    </svg>
);

const PerfisIcon = ({ size = 19, className }: { size?: number | string; className?: string; }) => (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="22" height="22" fill="url(#pattern0_7583_10329)" />
        <defs>
            <pattern id="pattern0_7583_10329" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_7583_10329" transform="scale(0.00195312)" />
            </pattern>
            <image id="image0_7583_10329" width="512" height="512" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuNvzRx68AAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAA8nYBAOgDAADydgEA6AMAAFBhaW50Lk5FVCA1LjEuNgADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAACl5ki5zOiKeQAAZNtJREFUeF7t3Xl4W1edP/5zJVu2JGuJd9/IluQ0TRooDYV2gMnAfIFhnxm+A+OE0i0My8AwZWlZSgulpRtLadk6UJautE1+rANlKcuXKYGhG2npllVXkmXZWixr3yzp/P6IVJxPnCa277269+r9eh4e6PuoJJLsez73nHPPERiAznDORcbYttY/FwoF6/79+7fV6/UXbN68+QUOh6P36H9DPvF4PBUKhf7X6XQ+7Pf7D1osltqS5j2CIESX/DMAgGYJNADQkqWdfTKZdEuS9H83bdr0906nU7FOfrVmZ2dn4/H47lNPPfURq9VabcYoCgBAk1AAgGbQO/s///nPr9+wYcN2l8tlPfqV+hGJREKlUunbGzdu3N+MUBAAgCagAIC2WturnS5L0Nr/f/2b6GiOZmZkJV6vVm/1+v9SMUBAAQFugAADVtTr9QqFgXVhYuNLj8XjpazqFJEn3TUxMfNdsNtdRDACAmlAAgCrQ6Z+YJEm/mZiY+DaKAQBQAwoAUMzS4f1QKHSp1+vdSl8DywuFQvd6vd4fohAAAKWgAADZtTr+eDz+N8PDwx+m7XDyotHodFdX13XDw8PzKAYAQE4oAEA2rY4/GAxe4vP5zqLtsDahUOger9f7IxQCACAHFACwZpxzsV6vvyIej98wNjY2RttBXpIk/X5iYuJms9n8AAoBAFgtFACwavxzsVAo/EOtVrvZ5XLZaDsoKxQKPTE2Nna9xWL5HQoBAFgpFACwYpxzsVQqvbpUKn21v7/fQdtBXcFg8GlRFK9BIQAAK4ECAE5aa6g/lUrdPDQ05Kbt0F7BYPCR8fHxGzA1AAAnAwUAnNCSxX1X+Hy+LbQdtEWSpF/4/f5bsVgQAJ4LCgA4riUd/5TP53sLbQdti0ajN4uieA2KAABYDgoAWBbnXMzlcjsdDsfVtA30IxaLJa1W60ecTuf9KAQAYCkUAHAUDPcbkyRJv/b7/d/EtAAAtKAAgGdxzsVYLPahkZGRS2gbGEMqlbqmv7//ZhQBAIACAJ69649EIp/DIT3GJ0nSH/x+/xSKAIDOhgKgw3HOxUwm8y6Xy/Vp2gbGlcvlypVK5QODg4M/RSEA0JlQAHQwzrkYCATumZycfDltg84QDAa/7/P5LkIRANB5UAB0oOaGPi8vFAq3Op3OXtoOnSUSiYTGxsY+jg2EADoLCoAOwzkX0+n0e9xu96doG3S2TCbzaZfL9U0UAQCdwUQDMC7OuRgMBm9G5w/Lcblcn56enr62uSgUAAwOIwAdgnMuhsPh301MTGykbQBLSZL0e7/fvwMjAQDGhgLA4FqP+GUymdtcLpeVtgMsJxqNToui+BIUAQDGhQLAwDjnYqVSOaenp+fztA3gRDKZTMlisbzbarX+FoUAgPFgDYBBNZ/vfyc6f1gtl8tltVqtdxYKhQuwLgDAeFAAGBDnXEwmk+93uVxX0jaAlbLb7dem0+n3oAyAMBaUAAbDORfn5uY+Mjg4eCltA1gtt9v9qVgs9iEUAQDGgTUABsI5F2dmZq5Yv379u2kbgBzm5uZuGh0d/TzWBADoHwoAg0DnD2PBEQBgDCgADIBzLs7Ozl46Njb2ftoGoAQUAQD6hwJA5zjnYjwev3h4ePjDtA1ASfPz858dGBj4MooAAH1CAaBjnHMxlUq9r7+//zLaBqAGnB8AoF8oAHSKcy4WCoUL7Hb7tbQNQE2lUumjVqv1uygCAPQFBYAOcc7FxcXF7d3d3V+kbQDtUK/Xz+nq6rqH5gCgXdgHQJ+2ofMHLVlYWPgv7BEAoC8oAHSmueL/JpoDtNPg4KArGAz+CkUAgH6gANARzrkYCATuGRsbG6NtAO3m8/m2SJJ0C4oAAH1AAaATnHMxEol8cnJy8uW0DUAr/H7/G2dnZz+GIgBA+7AIUAeaK/7Ps9vt19M2AC0qFAoX9vX13U5zANAOFAA6wDmfYoztojmAVqXT6YLb7T4VjwYCaBemADSOcy6Gw2Ec6wu64na77cFg8EeYCgDQLhQAGtac979qYmJiM20D0Dqfz3fW7OzspSgCALQJUwAaViwWz7darZhHBV2rVqtv7+npuZvmANBeGAHQKM65WCqVvkpzAL1JJpOfxygAgPagANAgzrkYCoW+0t/f76BtAHojiqIYDoevRxEAoC2YAtCgfD5/gd1uv43msHKxWCwZCoWeMJvNsxaLJWa1WufdbnfS6XTmLBZLrfW6UqlkyeVyjmw2218oFIZqtdpwvV4f9fl8LxgeHh44+v8VVqNUKp1ns9nuojkAtAcKAI3hnIvJZPKpwcFBN22D48tkMqX9+/f/wWazPXraaac9bjab682mPWt5FJ1517qNNYuEQ4cOnVEqlV502mmnvdThcPTS18PxRaPRGVEUz17L9wEA8kEBoCGcc3F6evra8fHxC2gbHCsYDD7NOb/d7/cH19rRr1SrMAgEAhu6urrOx5MaJycSiXzd4/F8Rs3vCgCWhwJAQ2q12g6z2YwjVZ9DMBh8xO12f93tdufU7vSPp1UMJJNJd6FQeK/X691KXwNH2S4Iwm4aAoC6UABoRHPh3y+8Xu/ptK3TRaPRmVqt9sWJiYmIVjr942kVA5Ik+axW64dHR0dH6Gs6nSRJf/L7/W/R8vcIAKCa+fn5d3E4iiRJD1UqlXP0unqccy4Wi8Vzg8Hgn+l763SZTOZC+nkBAHQczrmYSCTS9CLZqQKBwG8551N67fgpzrlYq9V2BAKBPfS9dqqZmZmIUb5fAIBV4ZyLs7OzN9ILZCeSJOlPtVpth1E7hiWFwKP0vXei6enpD9LPCADUgzUAbYaT/o7M8btcrsvsdvuvOmFemHMuZrPZ1xQKhevGxsZGaXunSKfTebfbvakTvnMAgKM0H/v7Fr0z6iTRaPQrRr3jP5Hm9/9f9DPpJAcOHPgk/VwAAAyvOc/dkYLB4JNGmudfrda0QCgU2kc/o06QzWbLnf4zAAAdhnMuBoPB2+kFsRPMzMx8DRf9ozVHA75JP6tOsG/fvivo5wEAysMagDbpxLn/ZDKZsdvtF1mt1l9j3vdYnHOxUCj8Q61Wu9nlctlou1Hlcrmyw+HYgJ8JAHXhNMA24JyLMzMzr6K5kYVCoccGBwe32Gy2O3ChX54gCNG+vr7bXS7XxlAo9BRtNyqHw9ErSdJ5NAcAMJxOm/sPBoPfx5D/ynDOxUAg8FP6WRpVcx8M/IwAqAgjAG0QiUTGaGZUkUjk616v9z9x178ygiBE/X7/uyORyLdpmxENDg66ksnkm2gOAGAYnHMxGo3G6B2QEcXj8c/hrm5teAdtFDU9PR3AzwsAGFZzb3vDSyQS1+JiLg/OuTg3N/d5+hkbUa1W20HfPwAoA1MAKmou/vtPmhtNMpm8bnBw8KsY9peHIAjRkZGRG+Px+Bdpm9GEw+F3onAEAMPphMV/sVjsBlzAldEsIL9GP3MDmqLvHQDkhxEAFQUCgQ00M5JIJHLr8PDwDbjzV4YgCFFRFK8Jh8PfpW1GEolEUEACgHE053Hj9FbHKAKBwP2481cH51w8fPjw/9DvwCimp6eD+FkCAMMw8vB/OBw+hAu2uprTAWH6XRgIpgEAFIYpAJU89thjf0szoxgfH/8Ehv3V1VwY+FGaG8XTTz+9lWYAIC8UACrgnIs+n+8dNDeCXC53OWNsD81BeWaz+YF0On0lzY1gYGAATwMAKAwFgarcher9frL3W53H831LhQK/cDhcNyKu//2EAQh6na7b5Ek6T7apncjIyNDjLFtNAcA+aAAUMETTzzxUprpXSwWS2KL3/ZrbRmcTCYztE3vnnnmmRfQDADkgwJAYZxzURTFc2mud319fZeg89cGQRCiXV1dH6K53rlcrgsxDQCgHBQAyts2PDzcT0M9kyTpPrvd/iuaQ/u43e5fSpL0W5rrmSiK6zENAKAcFAAKC4VCEzTTO7/ffwfu/rWlORXwDZrrXTweH6AZAMgDBYCCmsOXF9Bcz+bm5m7Cqn/N2jMzM3MLDfUsFAq9gWYAIA+BBiCf5mYmu2iuV4lEYmFoaOj5uPvXLs65mE6nD7jdbjtt06NMJlNyuVyn4GcOQH4YAYCTtri4eAUuxNomCEJ0YWHhKprrlcvlsmIdAIAyUAAoaN++fc+jmV7F4/GUKIrfpzloj9/vvyudTudprldGXEcDoAUoABTCORetVutbaK5X5XL5Gtz964MgCNFkMnk9zfUqHo+/fm80mByYmJw/TTI+8Xu/ZOBgIQF4oAJSxzeFw9NJQb8Lh8CEM/+venpmZmQgN9aZ5oBYWAgLICAUAHFe5XL4dw//61twZ8Ls0BwBAAaAAozwBcOqppx6gGejP85///D/TTI/q9bqZZgCweigAFBAOhzfTTG8ymUwJw/+gJZIkTdIMAFYPBYACyuWyj2Z6c+DAgQcw/G8Ye8Lh8EEa6k0mk9lAMwBYPRQACuCcj9FMbxwOx0M0A31qrgP4Gc31ptFo6P73CkBLUADIjHMubtiwYSvN9Wbjxo1P0wz069RTT32EZnojCMIQzQBg9VAAyG9bc+9yXTObzQ2agX5ZrdYqzfTG5/Odgr0AAOSDAgCOkcvlylgACFozODjowl4APEIBAAAAdCAUAIIgRMvlcjea+z8pAIzBZrNtAgAAAK0LBYA8/v7v/35bNBp9jOYAAAAAyAsFgAI456LZbL4IywABAAAAnQUFgAI452Iul7vRbrdfRdsAAAAA8kIBIOfX8I33+/07aBsAAABAfigARmUymbLZbBfSDAAAAAB9QgEwIq/XO0ozAAAAAP0iFAAjymQyeYvFoqM5AAAAAPUiFAAj8fl8p9AMAAAAQL9QAAzL6/WupxkAAAAAfUIBMKC/v99BMwAAAAD6hAJggDF2Mc0AAAAA6DMUAAP0ev0Fmgb/j3/+53/ePpt8AQAAADoJCsAIwuFwf9vG6U8//XTF5/OdlZOTuGfPnm379+/fP0E8A80NAAAAnSRf1f6M/w9v27P56B9p8K/P5HIZXdfD4XByXm5vb79+fHxsA80FAAAAnSNf1v6M/0+vuz6P/39yXZbP5XIn0H6jsVgs5zDGttBcAAAA0DnyZe3P+P90vX79u9OfuD6Ty+VOp/1G09vbm9V8q7U0FwAAAHSeUVX7M/5/PdXrz8l+p/1GZbVav0Vv9700BwAAAHSeUUn7v7v+f6869Tndj9pvlOnp6S9xzt6OpgAAAEDnyFe0P+P/z4+67pzsRyfX2uWcczEej19Mv2EAAACAfv0P7uM6t4C52lYAAAAASUVORK5CYII=" />
        </defs>
    </svg>
);

const UsuariosIcon = ({ size = 19, className }: { size?: number | string; className?: string; }) => (
    <svg width={size} height={size} viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M6.5625 6.75C8.37187 6.75 9.84375 5.23607 9.84375 3.375C9.84375 1.51393 8.37187 0 6.5625 0C4.75313 0 3.28125 1.51393 3.28125 3.375C3.28125 5.23607 4.75313 6.75 6.5625 6.75ZM6.5625 1.92857C7.34062 1.92857 7.96875 2.57464 7.96875 3.375C7.96875 4.17536 7.34062 4.82143 6.5625 4.82143C5.78438 4.82143 5.15625 4.17536 5.15625 3.375C5.15625 2.57464 5.78438 1.92857 6.5625 1.92857ZM6.60938 11.5714H2.59687C3.525 11.0893 5.12813 10.6071 6.5625 10.6071C6.66563 10.6071 6.77813 10.6168 6.88125 10.6168C7.2 9.91286 7.75312 9.33429 8.41875 8.87143C7.73437 8.74607 7.0875 8.67857 6.5625 8.67857C4.36875 8.67857 0 9.80679 0 12.0536V13.5H6.5625V12.0536C6.5625 11.8896 6.58125 11.7257 6.60938 11.5714ZM13.5938 9.16071C11.8687 9.16071 8.4375 10.1346 8.4375 12.0536V13.5H18.75V12.0536C18.75 10.1346 15.3188 9.16071 13.5938 9.16071ZM14.7281 7.40571C15.4406 6.99107 15.9375 6.21 15.9375 5.30357C15.9375 3.97286 14.8875 2.89286 13.5938 2.89286C12.3 2.89286 11.25 3.97286 11.25 5.30357C11.25 6.21 11.7469 6.99107 12.4594 7.40571C12.7969 7.59857 13.1812 7.71429 13.5938 7.71429C14.0063 7.71429 14.3906 7.59857 14.7281 7.40571Z" fill="currentColor" />
    </svg>
);

const NAV_ITEMS = [
    { label: "Dashboard", icon: DashboardIcon, href: "/" },
    { label: "Alertas", icon: AlertIcon, href: "/alerts" },
    { label: "Viagens", icon: ViagensIcon, href: "/trips" },
    { label: "Veículos", icon: VeiculosIcon, href: "/vehicles" },
    { label: "Motoristas", icon: User, href: "/drivers" },
    { label: "Rota", icon: RotasIcon, href: "/routes" },
    { label: "Lugares", icon: MapPin, href: "/places" },
    { label: "Configurações", icon: Settings, href: "/settings" },
    { label: "CheckList", icon: ClipboardList, href: "/checklist" },
    { label: "Relatórios", icon: FileBarChart, href: "/reports" },
    { label: "Perfis", icon: PerfisIcon, href: "/profiles" },
    { label: "Usuarios", icon: UsuariosIcon, href: "/users" },
];

export function Sidebar() {
    const location = useLocation();

    return (
        <aside className="sidebar-container">
            {/* Logo da Sidebar */}
            <div className="p-6 flex items-center justify-between">
                <div className="flex items-center">
                    <svg width="122" height="26" viewBox="0 0 122 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="122" height="25.1546" fill="url(#pattern0_7592_10256)" />
                        <defs>
                            <pattern id="pattern0_7592_10256" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_7592_10256" transform="matrix(0.00137538 0 0 0.0066706 -0.0515464 -0.225443)" />
                            </pattern>
                            <image id="image0_7592_10256" width="847" height="225" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA08AAADhCAYAAAAQwI4ZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAE5cSURBVHhe7d2HYyPVuTbwM5aL3HvdtbcX2GUXWEgIaaSQ3JT/9oOEJGQpoYXt3b33Jlu9er7zjI/JApamSyP5+d3rIGltaTTlzKnvK4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiITgBN/ZcC6uNH03pzY4NoaWoQjfUh0SB/QnWaqNPqhCaPnq4LUTg4EHn85AsincuLZCYvUtmc+OMbl3h8iYiIiIiodtx+MqMvbe/pmVxe98vBwYEeT2X050ubsrlFRERERER2cWSiAj57Nqef7e8SnS1h0RpuFPWhOvUv5YHRqkw+L6LJjNiJJcXcRkT85a0rPBeIiIiIiKiyPrw3YYz6BB1Gp1Z29jkyRURERER0DI42+Gh8eUsf7esUzY31QsMCpSqBNVSRRFosbOyJty6d4jlCRERERCSxYuyx2Y1dfairTTaYGtQr1U3XdZHK5sWj+TXx7tUzPF+IiIiI6MRiZdgjyztRfbCrVdTXlXf9UjklMlkxvrwt3rrI0SgiIiIiOnlYCXbh7/cm9Xevjon2lqYTtSMTmZxoCzfy3CEiIiKiE4UVYAf+8WBK/9mVUdHe3KReOXmSmaxoDTfx/CEiIiKiE4OVX5u29hN6b0eLbzvuQNdFLl8QhQNdZHKH4cSjqYyIpTMik82LTP5A/OnN7ye//eDuuN4QColwQ70IN9aLrtawaG1qFB0tTaJevo5Q6Pjxepvj6SwakDyHiIiIiOhEYMXXosWtiD7S0ylCdd7tMjSUUhnZQJKNo7VIVNy64O9aoo8eTOljfZ1ioLNVtDU3isb6etcngFZNYQSJiIiIiMg/304u6dl84TARkkfS2bz+Ynmr4vmUPnkyqy9t7+uFA9mMc0i9FRERERERnWQ7saSrhgXgr1PZnJF89osX84FubNyfXdV349a/czaXZ+OJiIiIiOgk+3ZqWc/l86qJ4FxaNpruz65UZQNjdn1XLxSKN6LyhYL+yeNZNp6IiIiIiE4qJLl1I5sr6Ku7Uf3/3ZmoiYbF1xMLxveJpzJ6Mp3TY/K/S1t7bDQREREREZ1kWZejTQubETYqiIiIiIiodt1+PGOsS3Iily/om3txNpo89NX4gr4h9ylGuTK5vJ5IZ/XxlcoH2CAiIiIiOtEmV7dUM8g+5HxSb0Me2I0m1Z4tTv0qERERERGV0/zGrn5gM5oefjudy+lfBjxyXrW4O72ib0cTlo/DwibXWxERERERlRUq7HYhhPfc5i4r7x7Y2o8bUx7t2kukuP+JiIiIiMoF0+3sSmWy+qdPGJrbjUdz63pS7ke7o30v241xqiQRERERUVnsJdKqGm4dgheoPyeblrb39KTDYBzHQf4p9dZEREREROQXTPmyA9P0nsyvsbJu0+MF9yNMxaiPICIiIiIiv2zH7E3VyxcO9I8fTjuqrN9+Mmskkt1LJPVcPm8EmTgO2hYIkY71Vy+WqzcU953pZX3b4RomO/Jyh6mPJCIiIiIiP6zs7KvqtzXIK6T+1DJEjdtP2p8S+EP5QkGf2wj21LR7M6v6pmwsuU0qbNf02j薮1er96vL+uXhvUhuD669v+K66Nj88D98fWc64PrtOtzHVP9z0P30+pRfX5pS8dyWbEUK/62Xp9yq0716un+8uS95On7/uXwR7vbpzF18Yf3ZpY6unfL0N9u76jPqv94uD87L6fU5uX13JndD6YXZ2l3X13K+v259L/8wZTe2OicUu5p7O2P76o+wV/fO6f9p787qicB/S8W9Wv0p78107E/Yf8U7Xf0f0vUrzr1b/yvOnUvD/Wru9NLv6N10TmoU32ivY4q9E/Rfof9XnB9/PH1S4HZ9fD+zX3x++zjUeN96vG+fPFiPujv7k8u9L+69sS13/f7U/3X9/mDP6WOPvQ/fPj6peD6v//6BfPveP8uVvT/zK9f8D+T8v/t+1T83v/S358V+78fP3z9pL/Pqv6/N6ofDq9f8H9+vHz9on/9vj8XfH60fuv7D6fVvzr1r767XvUvjP96Uf3L4I+vXwpOnfE/f9E///mxff3G9+86G9fnB7/Pr4726//9un+V73+vXvBvXrjX9fH9u//14z/f51f9/f6if/1+/PD1X//3T/8X//94/vPj+3f/79f9T/8T/vD/8v+A/fP9X/9p/OdfXl70P5PyP/vz+4n6/2H6z//8R/8T/fPjh8P07/+fSbn9v7xPxf7Pj+9PDf83p6//jYvzI7Wuev/v5/39mZP9z4/r/8X0nx/X68f1p8f3p8f395/Wp97f7+m/vjzOf08f/+vX+YOpXv+Xn5fH6eeP9i/C++vL4vxP/vYp97D74vvM40f9839+XvTv778u9f8+fvj65fD9+/7e6C+/D0X/z0f/z0f9V8f+p6f+Xw9//K8e/p+f+Vf9X0f/6v/9uf6fH09f/u8v+v/6pX81/e9P/V9/Xv6vPz8fL9pfnv6vPy+G/8fL///y/7jX/+v/9Rf97+f93+D/eLwY/R/9X/+vH8f74/rx9vHe4Px4vX79u9Pn/N63f3/v7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3u7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3e7/3V9oA/D5W" />
                        </defs>
                    </svg>
                </div>
                <button className="text-gray-400 hover:text-white">
                    <PanelLeftClose size={20} />
                </button>
            </div>

            {/* Itens de Navegação */}
            <nav className="flex-1 px-4 space-y-1">
                {NAV_ITEMS.map((item) => {
                    // Lógica para marcar o item ativo (Hack para veículos como página inicial)
                    const isActive = location.pathname === item.href || (item.href === '/vehicles' && location.pathname === '/');
                    return (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                                isActive
                                    ? "bg-accent text-white"
                                    : "text-white hover:bg-gray-800 hover:text-white"
                            )}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
