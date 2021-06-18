import React, { useEffect, useState } from 'react';
import './App.scss';

const defaultColorList: string[] = [
  "#1ABC9C",
  "#2ECC71",
  "#3498DB",
  "#9B59B6",
  "#34495E",
  "#16A085",
  "#27AE60",
  "#2980B9",
  "#8E44AD",
  "#2C3E50",
  "#F1C40F",
  "#E67E22",
  "#E74C3C",
  "#ECF0F1",
  "#95A5A6",
  "#F39C12",
  "#D35400",
  "#C0392B",
  "#BDC3C7",
  "#7F8C8D"
];

const App = () => {
  const [colorList, setColorList] = useState(defaultColorList);
  const regex = /^#(?:[0-9a-f]{3}){1,2}$/i;

  useEffect(() => {

  }, [colorList]);

  const addColor = (val: string) => {
    let temp: string[] = [...colorList];
    const isTrue: boolean = regex.test(val);
    if (isTrue) temp.push(val);
    setColorList(temp);
  }

  const deleteColor = (i: number) => {
    const searchTemp = [...colorList];
    const newColorFields = searchTemp.filter((_, id) => id !== i);
    setColorList(newColorFields);
  };

  return (
    <div className="App">
      <div className="container">
        <form className="form-input" onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            newColor: { value: string };
          };
          addColor(target.newColor.value);
        }}>
          <legend>Add new color</legend>
          <input name="newColor" type="text"></input>
          <input type="submit" value="Add" />
        </form>
        <form className="form-filter">
          <input type="checkbox" /> Red {`>`} 50%
          <input type="checkbox" /> Green {`>`} 50%
          <input type="checkbox" /> Blue {`>`} 50%
          <input type="checkbox" /> Saturation {`>`} 50%
        </form>
        <div className="row">
          {colorList.map((color, i) =>
            <div className="col-2" key={i}>
              <div className="colored-box" style={{ backgroundColor: color }} />
              <div className="description">
                <div>{color}</div>
                <div onClick={() => deleteColor(i)}>x</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
