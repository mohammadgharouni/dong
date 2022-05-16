import { Modal, ModalProps } from "antd";
import classnames from "classnames";
import { useStyles } from "./style";

export interface ContentModalProps
  extends Omit<ModalProps, "title" | "footer"> {
  children: React.ReactNode;
}

export const ContentModal = ({
  children,
  className,
  visible,
  ...rest
}: ContentModalProps) => {
  const classes = useStyles();

  return (
    <Modal
      title={null}
      footer={null}
      closable={false}
      visible={visible}
      className={classnames(classes.modal, className)}
      {...rest}
    >
      {children}
    </Modal>
  );
};
