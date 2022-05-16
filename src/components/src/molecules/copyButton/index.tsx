import { notification, Space, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import { useTheme } from "core/src";
import { Text } from "../../atoms/text";
import { View } from "../../atoms/view";
import { useInteractions } from "core/src/hooks";
import { createUseStyles } from "react-jss";

export interface CopyButtonProps {
  textToCopy: string;
  successType?: "notification" | "tooltip";
  size?: number;
  isText?: boolean;
}

const CopyButton = ({
  textToCopy,
  successType = "notification",
  size = 20,
  isText,
}: CopyButtonProps) => {
  const { t } = useTranslation();
  const { eventHandlers, isHovered } = useInteractions();
  const [isTooltip, setisTooltip] = useState(false);
  const {
    colors: { onBackground, primaryLight, positive, primary },
  } = useTheme();
  const { cursorPointer } = useStyle();
  useEffect(() => {
    isTooltip &&
      setTimeout(() => {
        setisTooltip(false);
      }, 1000);
  }, [isTooltip]);
  return (
    <CopyToClipboard
      text={textToCopy}
      onCopy={(text, result) => {
        result && successType === "notification"
          ? notification.open({
              message: (
                <Space size={4} direction="horizontal" align="center">
                  {/* <MaterialCommunityIcon name="check-circle" color={positive} /> */}
                  <Text size={12}>{t("copySuccessfull")}</Text>
                </Space>
              ),

              closeIcon: <React.Fragment />,
              duration: 2,
              style: { padding: 16 },
            })
          : setisTooltip(true);
      }}
      options={{
        debug: true,
      }}
    >
      {isTooltip ? (
        <Tooltip
          color=""
          title={<Text color="white">{t("copySuccessfull")}</Text>}
          visible
        >
          <View {...eventHandlers()} className={cursorPointer}>
            {/* <MaterialCommunityIcon
              size={size}
              name="content-copy"
              color={isHovered ? primaryLight : onBackground}
            /> */}
          </View>
        </Tooltip>
      ) : isText ? (
        <View {...eventHandlers()} className={cursorPointer}>
          <Text style={{ paddingInline: 4 }} color={primary}>
            {t("copy")}
          </Text>
        </View>
      ) : (
        <View {...eventHandlers()} className={cursorPointer}>
          {/* <MaterialCommunityIcon
            size={size}
            name="content-copy"
            color={isHovered ? primaryLight : onBackground}
          /> */}
        </View>
      )}
    </CopyToClipboard>
  );
};

export { CopyButton };

const useStyle = createUseStyles({
  cursorPointer: {
    cursor: "pointer",
  },
});
