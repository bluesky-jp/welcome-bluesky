import React from "react";

export default function Image({ src, width, height, ml, mr, mt, mb }) {
  return (
    <img
      src={src}
      width={width}
      height={height}
      style={{
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        borderRadius: "8px",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
      }}
    />
  );
}
