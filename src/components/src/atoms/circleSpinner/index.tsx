import { ReactNode } from "react";
import { useTheme } from "core/src";
import "./style";
import { useStyles } from "./style";
import { View } from "../view";

interface CircleSpinnerProps {
  color?: string;
  size?: number;
  isLoading?: boolean;
  strokeWidth?: number;
  children?: ReactNode;
}

export const CircleSpinner = ({
  color,
  isLoading,
  size = 40,
  strokeWidth = 4,
  children,
}: CircleSpinnerProps) => {
  const { colors } = useTheme();
  const classes = useStyles({
    color: color || colors.onBackgroundDark,
    size,
  } as any);
  return isLoading ? (
    <View className={classes.loader}>
      <svg className={classes.circular} viewBox="25 25 50 50">
        <circle
          className={classes.path}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth={strokeWidth}
          strokeMiterlimit="10"
        />
      </svg>
    </View>
  ) : (
    (children as JSX.Element) || null
  );
};
