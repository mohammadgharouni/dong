import { Children, CSSProperties, forwardRef } from "react";
import { View, ViewProps } from "../view";

interface SpaceProps {
  children?: React.ReactNode;
  direction?: "horizontal" | "vertical";
  size?: number;
  style?: CSSProperties;
  className?: string;
}

export const Space = ({
  children,
  size = 8,
  direction = "horizontal",
  style,
  className,
}: SpaceProps) => {
  return (
    <View
      style={{
        ...style,
        flexDirection: direction === "horizontal" ? "row" : "column",
      }}
      className={className}
    >
      {Children.map(children, (child, index) => (
        <View
          style={{
            flex: 1,
            ...(direction === "horizontal"
              ? { marginInline: Math.round(size / 2) }
              : { marginBlock: Math.round(size / 2) }),
            ...(direction === "horizontal"
              ? { marginInlineStart: index === 0 ? 0 : Math.round(size / 2) }
              : { marginBlockStart: index === 0 ? 0 : Math.round(size / 2) }),
            ...(direction === "horizontal"
              ? {
                  marginInlineEnd:
                    index === Children.count(children) - 1
                      ? 0
                      : Math.round(size / 2),
                }
              : {
                  marginBlockEnd:
                    index === Children.count(children) - 1
                      ? 0
                      : Math.round(size / 2),
                }),
          }}
        >
          {child}
        </View>
      ))}
    </View>
  );
};

interface SpaceViewProps extends ViewProps {
  children?: React.ReactNode;
  spaceStyle?: CSSProperties;
  spaceClassName?: string;
  spaceAround?: boolean;
}

export const SpaceView = forwardRef(
  (
    {
      children,
      spaceStyle,
      spaceClassName,
      spaceAround,
      ...rest
    }: SpaceViewProps,
    ref: any
  ) => {
    const getSpace = (key?: string | number) => (
      <View key={key} style={spaceStyle} className={spaceClassName} />
    );

    return (
      <View ref={ref} {...rest}>
        {spaceAround && getSpace()}
        {Children.map(children, (child) => child)?.flatMap((child, index) => [
          child,
          (spaceAround || index !== Children.count(children) - 1) &&
            getSpace(index),
        ])}
      </View>
    );
  }
);
