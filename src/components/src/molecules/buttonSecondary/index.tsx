import classnames from "classnames";
import { CSSProperties, ReactNode } from "react";
import { useTheme } from "core/src";
// import { IconNames } from "../../atoms/icon/types";
import { Text } from "../../atoms/text";
import useStyles from "./style";
import { useInteractions } from "core/src/hooks";
import { CircleSpinner } from "../../atoms/circleSpinner";
import { View } from "../../atoms/view";

interface SecondaryButtonProps {
  children: string | ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  size?: number;
  style?: CSSProperties;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  textColor?: "onSecondary" | "primary";
  name?: string;
  // name?: IconNames;
  theme?: "medium" | "bold" | "regular" | "light";
  spinnerSize?: number;
  href?: string;
}

export const SecondaryButton = ({
  children,
  isLoading,
  onClick,
  className,
  disabled,
  size = 14,
  style,
  prefix = null,
  suffix = null,
  textColor = "onSecondary",
  theme = "medium",
  spinnerSize = 9,
  href,
}: SecondaryButtonProps) => {
  const { eventHandlers, isHovered, isActive } = useInteractions();
  const {
    colors: { onSecondary, primary },
  } = useTheme();
  const classes = useStyles();
  return (
    <View
      {...eventHandlers()}
      className={classnames(
        classes.button,
        className,
        isHovered && !disabled && !isLoading && classes.hover,
        isActive && !disabled && !isLoading && classes.focus,
        isLoading && classes.loading,
        disabled && classes.disabled
      )}
      onClick={() => {
        if (!disabled && !isLoading && onClick) {
          onClick();
        }
      }}
      style={style}
      href={href}
    >
      <CircleSpinner isLoading={isLoading} size={spinnerSize}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingInline: 4,
          }}
        >
          {prefix ? prefix : null}
          {typeof children === "string" ? (
            <Text
              style={{
                justifyContent: "center",
                marginInlineStart: !!prefix ? 8 : undefined,
                marginInlineEnd: !!suffix ? 8 : undefined,
                lineHeight: "16px",
              }}
              color={textColor === "primary" ? primary : onSecondary}
              size={size}
            >
              {children}
            </Text>
          ) : (
            children
          )}
          {suffix ? suffix : null}
        </View>
      </CircleSpinner>
    </View>
  );
};
