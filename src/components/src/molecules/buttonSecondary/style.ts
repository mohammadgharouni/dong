import { createUseStyles } from "react-jss";
import { Theme } from "core/src/context/theme/colorTypes";

export default createUseStyles(
  ({ secondaryActive, secondary, onSecondary, hoverActive }: Theme) => ({
    button: {
      backgroundColor: secondary,
      color: onSecondary,
      height: 30,
      minWidth: 80,
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
      border: "none",
      outline: "none",
      boxShadow: "none",
      transition: "all 250ms ease",
      display: "flex",
      overflow: "hidden",
      position: "relative",
      cursor: "pointer",
      margin: 0,
      padding: 12,
    },
    hover: {
      backgroundColor: hoverActive,
    },
    focus: {
      backgroundColor: secondaryActive,
    },

    loading: {
      opacity: 0.3,
      cursor: "default !important",
    },
    disabled: {
      opacity: 0.3,
      cursor: "not-allowed !important",
    },
  })
);
