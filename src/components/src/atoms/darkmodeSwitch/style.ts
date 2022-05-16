import { createUseStyles } from "react-jss";
import { Theme } from "core/src/context/theme/colorTypes";
export const useStyle = createUseStyles(
  ({ onBackground, primaryActive }: Theme) => ({
    darkmode: {
      width: 16,
      height: 16,
      fontSize: 16,
      cursor: "pointer",
      color: onBackground,
      "&:hover": {
        color: primaryActive,
      },
    },
  })
);
