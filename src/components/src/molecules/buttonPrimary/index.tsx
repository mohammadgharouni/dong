import classnames from "classnames";
import { useTheme } from "core/src";
import { Text } from "../../atoms/text";
import useStyles from "./style";
import { useInteractions } from "core/src/hooks";
import { CircleSpinner } from "../../atoms/circleSpinner";
import { View } from "../../atoms/view";
import { TextProps } from "antd/lib/typography/Text";

interface ButtonPrimaryProps {
  children: string | React.ReactNode;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  theme?: "medium" | "bold" | "regular" | "light";
  spinnerSize?: number;
  disableMode?: "primary" | "secondary";
  size?: number;
}

export const ButtonPrimary = ({
  children,
  isLoading,
  type = "button",
  className,
  disabled,
  style,
  onClick,
  theme = "medium",
  spinnerSize = 9,
  disableMode = "primary",
  size,
}: ButtonPrimaryProps) => {
  const { eventHandlers, isHovered, isActive } = useInteractions();
  const {
    colors: { onPrimaryLight, secondaryActive, onPrimary },
  } = useTheme();
  const classes = useStyles();

  return (
    <button
      {...eventHandlers()}
      className={classnames(
        classes.button,
        className,
        isHovered && !disabled && !isLoading && classes.hover,
        isActive && !disabled && !isLoading && classes.focus,
        isLoading && classes.loading,
        disabled &&
          (disableMode === "primary"
            ? classes.primaryDisabled
            : classes.secondaryDisabled)
      )}
      type={type}
      style={style}
      onClick={() => {
        if (!isLoading && !disabled && onClick) {
          onClick();
        }
      }}
    >
      <View className={classes.innerContaienr}>
        <CircleSpinner
          isLoading={isLoading}
          size={spinnerSize}
          color={onPrimary}
        >
          {typeof children === "string" ? (
            <Text
              color={
                !disabled
                  ? onPrimaryLight
                  : disableMode === "primary"
                  ? onPrimaryLight
                  : secondaryActive
              }
              size={size}
            >
              {children}
            </Text>
          ) : (
            children
          )}
        </CircleSpinner>
      </View>
    </button>
  );
};
