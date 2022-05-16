import classNames from "classnames";
import React, { createElement, CSSProperties, forwardRef } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    WebkitBoxAlign: "stretch",
    WebkitBoxDirection: "normal",
    WebkitBoxOrient: "vertical",
    alignItems: "stretch",
    border: "0px solid black",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0,
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: "relative",
    zIndex: 0,
    marginBlockEnd: 0,
    marginBlockStart: 0,
    marginInlineEnd: 0,
    marginInlineStart: 0,
  },
  pressable: {
    cursor: "pointer",
    userSelect: "none",
  },
});

type Style = 0 | false | undefined | CSSProperties | Style[];

export type Variant =
  | "div"
  | "a"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "article"
  | "p"
  | "main"
  | "section";

interface ViewProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className" | "style"> {
  className?: Parameters<typeof classNames>[0];
  style?: Style;
  href?: string;
  variant?: Variant;
  onPress?: (e: any) => void;
}

/**
 * Inspired from react-native View
 *
 * ```js
 * import { View } from "../view";
 *
 * function MyComponent() {
 *   return (
 *     <View style={{ alignItems: "center" }}>
 *       <View
 *         variant="a"
 *         href="/"
 *         onPress={() => {
 *           history.push("/");
 *         }}
 *         style={{ width: 300, height: 50 }}
 *       >
 *         <Text>Hello World</Text>
 *       </View>
 *     </View>
 *   );
 * }
 * ```
 */
const View = forwardRef<HTMLElement, ViewProps>(
  ({ className, onPress, onClick, style, href, variant, ...rest }, ref) => {
    variant = variant || (href ? "a" : "div");
    const classes = useStyles();

    const handleClick = React.useCallback(
      (e: any) => {
        if (onClick) {
          onClick(e);
        }
        if (onPress) {
          e.stopPropagation();
          onPress(e);
        }
      },
      [onClick, onPress]
    );

    const Element = createElement(variant, {
      href,
      ref,
      className: classNames(
        classes.container,
        onPress && classes.pressable,
        className
      ),
      style: flattenStyle(style),
      onClick: onClick || onPress ? handleClick : undefined,
      ...rest,
    });

    return Element;
  }
);

function flattenStyle(style?: ViewProps["style"]): CSSProperties | undefined {
  if (!style) {
    return undefined;
  }

  if (!Array.isArray(style)) {
    return style;
  }

  return style.reduce(
    (prev: CSSProperties, curr) => ({
      ...(prev || {}),
      ...(flattenStyle(curr) || {}),
    }),
    {} as CSSProperties
  ) as CSSProperties;
}

export { View, flattenStyle };
export type { ViewProps };
