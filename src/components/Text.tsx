import React, { useState } from 'react';
import { Resizable } from 're-resizable';
import { enabled, disabled } from '../constants/enableState';

interface TextProps {
  height: number;
  width: number;
  setHeight: Function;
  setWidth: Function;
  text: string;
  selected: boolean;
  setSelected: Function;
  textSize: number;
  textAlignHoriz: any;
  textAlignVert: any;
}

function TextComponent({
  height,
  width,
  setHeight,
  setWidth,
  text,
  selected,
  setSelected,
  textSize,
  textAlignHoriz,
  textAlignVert,
}: TextProps) {
  const [hover, setHover] = useState(false);
  return (
    <Resizable
      style={{
        borderStyle: selected ? 'dashed' : 'none',
        borderWidth: 1,
        backgroundColor: hover ? '#d3d3d3' : undefined,
      }}
      size={{
        height,
        width,
      }}
      minWidth={50} // hardcode for now
      onResizeStop={(e, direction, ref, d) => {
        setHeight(height + d.height);
        setWidth(width + d.width);
      }}
      bounds="parent"
      enable={selected ? enabled : disabled}
    >
      <div // need to make internal div for native events for some reason
        style={{
          height,
          width,
          display: 'flex',
          justifyContent: textAlignHoriz,
        }}
        onDoubleClick={() => {
          setSelected(!selected);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          style={{
            fontSize: textSize,
            alignSelf: textAlignVert,
          }}
        >
          {text}
        </div>
      </div>
    </Resizable>
  );
}

export default TextComponent;
