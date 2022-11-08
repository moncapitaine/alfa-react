import React from 'react';
import { SelectBox } from './selectBox/selectBox';

function App() {
  return (
    <div className="container flex flex-col">
      <div className="self-center border-2 p-3">
        <h2 className="text-2xl p-3">Select Box Example</h2>
        <SelectBox />
      </div>
      <h1 className="text-3xl text-center p-6">Ueberschrift 1</h1>
      <p className='p-6 border-[6px] border-[#FF0000]'>Das ist ein seltsamer Text</p>
    </div>
  );
}

export default App;
