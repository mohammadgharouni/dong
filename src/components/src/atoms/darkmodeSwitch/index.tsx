import { useTheme } from "core/src";
import { useStyle } from "./style";

const Sun = () => {
  return (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 2H13.5V5H10.5V2ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM5.98948 3.86891L3.86816 5.99023L5.98948 8.11155L8.1108 5.99023L5.98948 3.86891ZM2 13.5V10.5H5V13.5H2ZM3.86794 18.0095L5.98926 20.1309L8.11058 18.0095L5.98926 15.8882L3.86794 18.0095ZM13.5 19V22H10.5V19H13.5ZM18.01 15.8884L15.8887 18.0098L18.01 20.1311L20.1313 18.0098L18.01 15.8884ZM19 10.5H22V13.5H19V10.5ZM15.8894 5.99001L18.0107 8.11133L20.1321 5.99001L18.0107 3.86869L15.8894 5.99001Z"
      fill="currentColor"
    ></path>
  );
};

const Moon = () => {
  return (
    <path
      d="M20.9677 12.7676C19.84 13.5449 18.4732 13.9999 17 13.9999C13.134 13.9999 10 10.8659 10 6.99994C10 5.52678 10.4551 4.15991 11.2323 3.03223C6.62108 3.42175 3 7.28797 3 11.9999C3 16.9705 7.02944 20.9999 12 20.9999C16.712 20.9999 20.5782 17.3789 20.9677 12.7676Z"
      fill="currentColor"
    ></path>
  );
};

export const DarkModeSwitch = () => {
  const { isDark, toggleTheme } = useTheme();
  const classes = useStyle();

  return (
    <svg
      viewBox="0 0 24 24"
      className={classes.darkmode}
      onClick={() => toggleTheme()}
    >
      {isDark ? <Sun /> : <Moon />}
    </svg>
  );
};
