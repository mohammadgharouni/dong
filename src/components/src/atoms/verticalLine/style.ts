import { createUseStyles } from "react-jss";
import { Theme } from "core/src/context/theme/colorTypes";

export default createUseStyles(({ light }: Theme) => ({
  line: {
    minHeight: 18,
    width: 1,
    maxWidth: 1,
    backgroundColor: light,
    marginInline: 8,
  },
}));
