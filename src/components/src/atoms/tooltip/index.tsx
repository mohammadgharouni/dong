import { Tooltip } from "antd";
import { TooltipPropsWithTitle } from "antd/lib/tooltip";
import { useTheme } from "core/src";

export type TooltipViewProps = TooltipPropsWithTitle;

const TooltipView = ({ children, color, ...rest }: TooltipViewProps) => {
  const { colors } = useTheme();

  return (
    <Tooltip color={color ? color : colors.constantSurface} {...rest}>
      {children}
    </Tooltip>
  );
};

export { TooltipView };
