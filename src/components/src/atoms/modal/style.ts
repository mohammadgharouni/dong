import { createUseStyles } from "react-jss";
import { Theme } from "core/src/context/theme/colorTypes";

export const useStyles = createUseStyles(({ surface }: Theme) => ({
  modal: {
    "& .ant-modal-body": {
      padding: 0,
      backgroundColor: surface,
      maxHeight: 550,
      overflow: "hidden",
    },
    "& .ant-modal-content": {
      padding: 0,
      borderRadius: 4,
      boxShadow: "none",
      overflow: "hidden",
      backgroundColor: surface,
    },
  },
}));
