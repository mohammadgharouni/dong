import { createUseStyles } from "react-jss";
import { Theme } from "core/src/context/theme/colorTypes";

export default createUseStyles(({ light }: Theme) => ({
  line: {
    minWidth: 18,
    height: 1,
    backgroundColor: light,
  },
}));
