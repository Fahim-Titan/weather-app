import React from "react";

export default function InformationCard(props) {
  return (
    <div>
      <div className="color-blue">{props.name}</div>
      <div className="color-green">{props.value}</div>
    </div>
  );
}
