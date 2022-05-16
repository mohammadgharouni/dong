import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { createUseStyles } from "react-jss";
import { Theme } from "core/src/context/theme/colorTypes";
import { Typography } from "antd";
import { ParagraphProps } from "antd/lib/typography/Paragraph";
import { useTheme } from "core/src";

type IText = ParagraphProps & { size?: number; color?: string };

const Text = ({ size, children, color, className, style, ...rest }: IText) => {
  const styles = useStyles();
  const { colors } = useTheme();
  return (
    <Typography.Paragraph
      style={{
        ...style,
        fontSize: size,
        color: color ? color : colors.onBackground,
      }}
      className={classNames(!color && styles.container, className)}
      {...rest}
    >
      {children}
    </Typography.Paragraph>
  );
};

const useStyles = createUseStyles(({ onBackground }: Theme) => ({
  container: {
    color: onBackground,
  },
}));

export { Text };
