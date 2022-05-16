import { createUseStyles } from "react-jss";
import { Theme } from "core/src/context/theme/colorTypes";

export default createUseStyles(
  ({
    light,
    primaryActive,
    error,
    background,
    onBackground,
    negative,
  }: Theme) => ({
    input: {
      border: "none",
      outline: "none",
      boxShadow: "none !important",
      width: "100%",
      height: "100%",
      paddingBlock: 0,
      paddingLeft: 8,
      paddingRight: 8,
      backgroundColor: background,
      color: onBackground,
    },
    resizeChars: {
      fontSize: 14,
    },
    hasClear: {
      paddingInlineEnd: 30,
    },
    forcedLtr: {
      textAlign: "left !important",
      flip: false,
    },
    labelWrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    requiredMark: {
      position: "absolute",
      top: 0,
      right: 0,
    },
    required: {
      paddingRight: 10,
    },

    container: {
      width: "100%",
      height: 48,
      border: [1, "solid", light],
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
      transition: "all 200ms ease-in-out",
    },

    hovered: {
      borderColor: `${primaryActive} !important`,
    },

    hasError: {
      borderColor: `${negative} !important`,
    },
    stringSuffix: {
      marginLeft: 8,
    },
    clear: {
      position: "absolute",
      width: "fit-content",
      alignItems: "center",
    },
    forceClear: {
      width: "fit-content",
    },
    prefix: {
      position: "absolute",
      width: "fit-content",
      alignItems: "center",
    },
    suffix: {
      position: "absolute",
      width: "fit-content",
      alignItems: "center",
    },
    prefixLtr: {
      left: 0,
      flip: false,
      width: "fit-content",
    },
    suffixLtr: {
      right: 0,
      flip: false,
      width: "fit-content",
    },
    prevent: {
      cursor: "pointer",
    },
  })
);
