import { createUseStyles } from "react-jss";
import { Theme } from "core/src/context/theme/colorTypes";

export default createUseStyles(
  ({
    primaryActive,
    primaryLight,
    primaryHover,
    onPrimaryLight,
    secondary,
  }: Theme) => ({
    button: {
      width: "100%",
      minHeight: 24,
      minWidth: 80,
      borderRadius: 4,
      backgroundColor: primaryLight,
      color: onPrimaryLight,
      justifyContent: "center",
      alignItems: "center",
      border: "none",
      outline: "none",
      boxShadow: "none",
      transition: "backgroundColor 250ms ease",
      display: "flex",
      overflow: "hidden",
      position: "relative",
      cursor: "pointer",
      margin: 0,
      padding: 12,
    },
    innerContaienr: {
      flex: 1,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    hover: {
      backgroundColor: primaryHover,
    },
    focus: {
      backgroundColor: primaryActive,
    },

    loading: {
      opacity: 0.3,
      cursor: "default !important",
    },
    primaryDisabled: {
      opacity: 0.3,
      cursor: "not-allowed !important",
    },
    secondaryDisabled: {
      cursor: "not-allowed !important",
      backgroundColor: secondary,
    },
  })
);
