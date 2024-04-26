import React from "react";

export default function ErrorMessage(props) {
  if (props.msg) {
    return <span className="text-sm text-red-500">{props.msg}</span>;
  }
  return null;
}
