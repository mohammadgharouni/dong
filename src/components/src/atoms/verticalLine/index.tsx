import { View } from "../view";
import useStyles from "./style";
export interface VerticalLine {
  style?: React.CSSProperties;
}

export const VerticalLine = ({ style }: VerticalLine) => {
  const classes = useStyles();
  return <View className={classes.line} style={style} />;
};
