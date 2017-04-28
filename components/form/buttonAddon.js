import React from "react";
import { Button } from "../bulma";

export default ({ style, children, ...props }) => {
  return (
    <Button {...props} style={{ ...style, fontSize: 16 }}>
      {children}
    </Button>
  );
};
