import { type CSSProperties } from "react";
import * as feather from "feather-icons";

type FeatherIconProps = {
  icon: string | feather.FeatherIconNames;
  fIconColor?: string;
  iconFillColor?: string;
  iconStrokeColor?: string;
  iconStrokeWidth?: number;
  iconWidth?: number;
  iconHeight?: number;
  iconStyle?: string;
  className?: string;
  parentClass?: string;
  parentStyles?: CSSProperties;
};

const FeatherIcon = ({
  icon = "",
  fIconColor,
  iconFillColor = "none",
  iconStrokeColor = "currentColor",
  iconStrokeWidth = 2,
  iconWidth = 24,
  iconHeight = 24,
  iconStyle = "",
  className = "",
  parentClass = "",
  parentStyles = {},
}: FeatherIconProps) => {
  switch (icon) {
    case "menu-dots":
      return (
        <div className={parentClass} style={parentStyles}>
          <svg
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.506 17.75a1.217 1.217 0 1 0 1.721-1.722 1.217 1.217 0 0 0-1.721 1.721m5.74 5.74a1.22 1.22 0 0 0 1.985-.396 1.217 1.217 0 1 0-1.986.395m-11.48-11.48a1.216 1.216 0 1 0 1.72-1.72 1.216 1.216 0 0 0-1.72 1.72m0 11.478a1.218 1.218 0 1 0 1.722-1.722 1.218 1.218 0 0 0-1.721 1.722m5.74 5.74a1.218 1.218 0 1 0 1.722-1.722 1.218 1.218 0 0 0-1.722 1.722m-11.48-11.48a1.217 1.217 0 1 0 1.722-1.721 1.217 1.217 0 0 0-1.721 1.721m.002 11.479a1.218 1.218 0 1 0 1.722-1.722 1.218 1.218 0 0 0-1.722 1.722m5.74 5.74a1.217 1.217 0 1 0 1.721-1.722 1.217 1.217 0 0 0-1.721 1.722m-11.48-11.48a1.217 1.217 0 1 0 1.721-1.722 1.217 1.217 0 0 0-1.721 1.722"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );

    case "customer-icon":
      return (
        <div className={parentClass} style={parentStyles}>
          <svg
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 4a7 7 0 0 1 .384 13.99L22 18a7 7 0 0 1-.384-13.99zM8 38a2 2 0 0 0 2 2h12.733c1.276 0 2.103-1.409 1.746-2.634-.227-.776-.906-1.366-1.715-1.366H14a2 2 0 0 1-2-2v-1.2l.01-.388C12.203 28.815 15.06 26 18.5 26h7l.366.01c.65.039 1.307-.165 1.774-.619l.055-.052c1.08-1.037 1.034-2.934-.441-3.189Q26.398 22 25.5 22h-7l-.433.009C12.47 22.242 8 26.984 8 32.8zm11-27a3 3 0 1 1 6 0 3 3 0 0 1-6 0m12.238 26.413c-.413 1.73 1.47 3.098 2.988 2.17l.732-.446a2 2 0 0 1 2.084 0l.732.447c1.518.927 3.401-.44 2.988-2.171l-.199-.834a2 2 0 0 1 .645-1.983l.65-.558c1.352-1.157.633-3.37-1.14-3.512l-.855-.069a2 2 0 0 1-1.687-1.226l-.33-.791c-.682-1.643-3.01-1.643-3.693 0l-.329.791a2 2 0 0 1-1.687 1.226l-.854.069c-1.774.142-2.493 2.355-1.142 3.512l.652.558a2 2 0 0 1 .644 1.983z"
              fill="var(--color-blue-gray)"
            />
          </svg>
        </div>
      );

    case "calendar-icon":
      return (
        <div className={parentClass} style={parentStyles}>
          <svg
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.45 34.55Q24 33.1 24 31t1.45-3.55T29 26t3.55 1.45T34 31t-1.45 3.55T29 36t-3.55-1.45M10 44q-1.65 0-2.824-1.174Q6.002 41.651 6 40V12q0-1.65 1.176-2.824T10 8h2V6q0-.85.576-1.424Q13.152 4.001 14 4a1.93 1.93 0 0 1 1.426.576Q16.004 5.154 16 6v2h16V6q0-.85.576-1.424Q33.152 4.001 34 4a1.93 1.93 0 0 1 1.426.576Q36.004 5.154 36 6v2h2q1.65 0 2.826 1.176T42 12v28q0 1.65-1.174 2.826Q39.651 44.002 38 44zm0-4h28V20H10zm0-24h28v-4H10z"
              fill="var(--color-blue-gray)"
            />
          </svg>
        </div>
      );

    case "star-badge":
      return (
        <div className={parentClass} style={parentStyles}>
          <svg
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.306 18.306a14.307 14.307 0 1 1-28.614 0 14.307 14.307 0 0 1 28.614 0Z"
              stroke="var(--color-blue-gray)"
              strokeWidth="3"
            />
            <path
              d="M11.8 25.78 5.34 36.968l7.432-1.97 2.01 7.42 5.888-10.196M36.2 25.78l6.46 11.188L35.228 35l-2.01 7.42-5.888-10.2m-3.426-21.346 2.534 4.342 4.34 1.086-2.894 3.256.724 5.066-4.704-2.17-4.704 2.168.724-5.066L17.03 16.3l4.34-1.086z"
              stroke="var(--color-blue-gray)"
              strokeWidth="3"
            />
          </svg>
        </div>
      );

    case "trending-up":
      return (
        <div className={parentClass} style={parentStyles}>
          <svg
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45 28.653c0 1.25-.486 2.421-1.371 3.302L32.714 42.83A7.4 7.4 0 0 1 27.459 45H16.5v-3h10.959a4.4 4.4 0 0 0 3.135-1.297l10.919-10.876A1.64 1.64 0 0 0 42 28.653a1.653 1.653 0 0 0-2.82-1.174l-8.823 8.79c-.776.769-2.03 1.23-3.357 1.23h-1.488l-.015.001H19.5l-.003-3h6.01a1.5 1.5 0 0 0-.01-3h-10.5a4.505 4.505 0 0 0-4.5 4.5v2.001L5.4 44.79 3 42.987l4.497-5.988V36c0-4.135 3.364-7.5 7.5-7.5h10.5a4.49 4.49 0 0 1 4.445 3.947l7.12-7.096a4.665 4.665 0 0 1 6.57 0A4.65 4.65 0 0 1 45 28.655zm-.2-12.933a1.5 1.5 0 0 1-1.3.753H33a1.5 1.5 0 0 1-1.296-2.256l5.25-9c.54-.921 2.053-.921 2.592 0l5.25 9a1.5 1.5 0 0 1 .005 1.503m-3.91-2.247L38.25 8.95l-2.639 4.523zM13.5 3v10.5H3V3zm-3 3H6v4.5h4.5zm18 13.5c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6 6 2.691 6 6m-3 0c0-1.653-1.346-3-3-3s-3 1.347-3 3 1.347 3 3 3 3-1.346 3-3"
              fill="var(--color-blue-gray)"
            />
          </svg>
        </div>
      );

    case "arrow-left":
      return (
        <div className={parentClass} style={parentStyles}>
          <svg
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.848 15.058a1.333 1.333 0 0 0 0 1.885l7.543 7.542a1.33 1.33 0 0 0 1.902.017 1.33 1.33 0 0 0-.017-1.902L9.01 17.333h17.658a1.333 1.333 0 1 0 0-2.666H9.009L14.276 9.4a1.333 1.333 0 0 0-1.885-1.885z"
              fill={fIconColor || "#466378"}
            />
          </svg>
        </div>
      );

    case "arrow-right":
      return (
        <div className={parentClass} style={parentStyles}>
          <svg
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.152 15.058a1.334 1.334 0 0 1 0 1.885l-7.543 7.542a1.33 1.33 0 0 1-1.902.017 1.336 1.336 0 0 1 .017-1.902l5.267-5.267H5.333a1.333 1.333 0 1 1 0-2.666h17.658L17.724 9.4a1.333 1.333 0 0 1 1.885-1.885z"
              fill={fIconColor || "#466378"}
            />
          </svg>
        </div>
      );

    case "theme-loader":
      return (
        <div className={parentClass} style={parentStyles}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={iconWidth}
            height={iconHeight}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            style={{ margin: "auto", display: "block" }}
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke={iconStrokeColor}
              strokeWidth="10"
              r="35"
              strokeDasharray="164.93361431346415 56.97787143782138"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              />
            </circle>
          </svg>
        </div>
      );

    default:
      {
        const featherIcon = feather.icons[icon as feather.FeatherIconNames];
        if (!featherIcon) return null;

        return (
          <span
            className={`inline-block ${parentClass}`}
            style={parentStyles}
            dangerouslySetInnerHTML={{
              __html: featherIcon.toSvg({
                class: className,
                color: fIconColor || "white",
                width: iconWidth,
                height: iconHeight,
                stroke: iconStrokeColor,
                fill: iconFillColor,
                style: iconStyle,
                strokeWidth: iconStrokeWidth,
              }),
            }}
          />
        );
      }
  }
};

export default FeatherIcon;
