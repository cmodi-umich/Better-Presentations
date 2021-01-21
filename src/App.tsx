import React, { useState } from 'react';
import TextComponent from './components/Text';
import Title from './components/Title';

function App() {
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);
  const [text, setText] = useState('hello world');
  const [selected, setSelected] = useState(true);
  const [textSize, setTextSize] = useState(14);
  const [textAlignHoriz, setTextAlignHoriz] = useState('flex-start');
  const [textAlignVert, setTextAlignVert] = useState('top');

  return (
    <div
      className="app"
      style={{
        height: 800,
        width: '95%',
        borderColor: 'black',
        borderWidth: 2,
        margin: 10,
        flexDirection: 'row',
        borderStyle: 'solid',
        display: 'flex',
      }}
    >
      <div
        className="resize-area"
        style={{
          height: 780,
          width: '75%',
          borderColor: 'black',
          borderWidth: 2,
          borderStyle: 'solid',
          margin: 10,
        }}
        onClick={() => {
          // make more accurate so only stops if not clicked in object
          setSelected(false);
        }}
      >
        <Title className="work-title" titleText="Workspace" />
        <TextComponent
          height={height}
          width={width}
          setHeight={setHeight}
          setWidth={setWidth}
          text={text}
          selected={selected}
          setSelected={setSelected}
          textSize={textSize}
          textAlignHoriz={textAlignHoriz}
          textAlignVert={textAlignVert}
        />
      </div>
      <div
        className="console-area"
        style={{
          height: 780,
          width: '25%',
          borderColor: 'grey',
          borderWidth: 2,
          borderStyle: 'solid',
          margin: 10,
        }}
      >
        <Title className="console-title" titleText="Console" />
        {selected ? (
          <>
            <div>
              <label>
                Height:
                <input
                  type="text"
                  value={height}
                  onChange={(e) => {
                    let num = parseInt(e.target.value);
                    setHeight(num >= 0 ? num : 0);
                  }} // add checks to parent dims
                />
              </label>
            </div>
            <div>
              <label>
                Width:
                <input
                  type="text"
                  value={width}
                  onChange={(e) => {
                    let num = parseInt(e.target.value);
                    setWidth(num >= 0 ? num : 0);
                  }} // add checks to parent dims
                />
              </label>
            </div>
            <div>
              <label>
                Text:
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Text Size:
                <input
                  type="text"
                  value={textSize}
                  onChange={(e) => {
                    let num = parseInt(e.target.value);
                    setTextSize(num >= 0 ? num : 0);
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                Text Align Horizontal:
                <select
                  value={textAlignHoriz}
                  onChange={(e) => setTextAlignHoriz(e.target.value)}
                >
                  <option value="flex-start">Left</option>
                  <option value="center">Center</option>
                  <option value="flex-end">Right</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Text Align Vertical:
                <select
                  value={textAlignVert}
                  onChange={(e) => setTextAlignVert(e.target.value)}
                >
                  <option value="flex-start">Top</option>
                  <option value="center">Center</option>
                  <option value="flex-end">Bottom</option>
                </select>
              </label>
            </div>
          </>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default App;
