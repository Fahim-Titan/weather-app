import React from "react";

export default function InformationCard(props) {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.value}</div>
    </div>
  );
}
