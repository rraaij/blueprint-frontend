import Link from "next/link";

import classes from "./button.module.css";
import { Button } from "@progress/kendo-react-buttons";

function UIButton(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return <Button onClick={props.onClick}>{props.children}</Button>;
}

export default UIButton;
