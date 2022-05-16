import { View } from "../view";
import useStyles from "./style";
export interface HorizontalLineProps {
  style?: React.CSSProperties;
}

export const HorizontalLine = ({ style }: HorizontalLineProps) => {
  const classes = useStyles();
  return <View className={classes.line} style={style} />;
};
