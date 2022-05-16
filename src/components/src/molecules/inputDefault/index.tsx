import classnames from "classnames";
import { CSSProperties, forwardRef, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "core/src";
// import { MaterialCommunityIcon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import useStyles from "./style";
import { View } from "../../atoms/view";
import { useInteractions } from "core/src/hooks";
import { Input, InputProps } from "antd";

export interface InputDefaultProps extends Omit<InputProps, "prefix"> {
  label?: string | ReactNode;
  onClear?: () => void;
  hasError?: boolean;
  inputClassName?: string;
  onlyNumber?: boolean;
  isLtr?: boolean;
  name?: string;
  required?: boolean;
  suffix?: ReactNode;
  prefix?: ReactNode;
  innerWrapperClassName?: string;
  wrapperStyle?: CSSProperties;
}

export const InputDefault = forwardRef<HTMLInputElement, InputDefaultProps>(
  ({
    label,
    className,
    value,
    onClear,
    hasError = false,
    style,
    inputClassName,
    required,
    suffix,
    prefix,
    lang,
    innerWrapperClassName,
    wrapperStyle,
    onChange,
    ...rest
  }: InputDefaultProps) => {
    const { eventHandlers, isHovered } = useInteractions();

    const {
      colors: { onBackground },
    } = useTheme();
    const { i18n } = useTranslation();
    const classes = useStyles();

    return (
      <View className={className} style={style}>
        {label && (
          <View
            className={classnames(
              classes.labelWrapper,
              required && classes.required
            )}
          >
            {typeof label === "string" ? (
              <Text color={onBackground} size={14}>
                {label}
              </Text>
            ) : (
              <View style={{ maxWidth: 500, width: "100%" }}>{label}</View>
            )}
            {/* {required && typeof label === "string" && (
              <MaterialCommunityIcon
                name="asterisk"
                size={8}
                color={error}
                className={classes.requiredMark}
              />
            )} */}
          </View>
        )}
        <View
          {...eventHandlers()}
          className={classnames(
            classes.container,
            innerWrapperClassName,
            (isHovered || value) && !hasError && classes.hovered,
            hasError && classes.hasError
          )}
          style={wrapperStyle}
        >
          <Input
            {...rest}
            className={classnames(classes.input, inputClassName)}
            value={value}
          />
        </View>
      </View>
    );
  }
);
