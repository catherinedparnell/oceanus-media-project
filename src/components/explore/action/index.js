import React from 'react';
import NavBar from '../navBar';

import Text from './actionText';

export default function Action() {
  return (
    <div className="mt-16 text-2xl">
      <NavBar />
      <div className="flex-col text-left p-10 text-darker">
        <div className="uppercase text-center text-5xl">{Text.now}</div>
        <div className="pt-10 text-center text-3xl">{Text.you}</div>
        <div className="mt-10 py-5 bg-dark text-offwhite">
          <div className="text-center text-4xl">{Text.part}</div>
        </div>
        <div className="pt-10 text-3xl">{Text.easy}</div>
        <div className="flex flex-col">
          <div className="pt-10 text-3xl">{Text.swaps}</div>
          <div className="pt-5">{Text.single.map((t) => <div className="ml-10">{t}</div>)}</div>
          <div className="pt-10 text-3xl">{Text.recycle}</div>
          <div className="pt-5">{Text.confusing.map((t) => <div className="ml-10">{t}</div>)}</div>
          <img src="../../../images/recycleguide.png" alt="table" className="mt-10 w-2/5 self-center" />
          <div className="pt-10 text-3xl">{Text.water}</div>
          <div className="pt-5"><div className="ml-10">{Text.ditch}</div></div>
          <div className="pt-10 text-3xl">{Text.cleanup}</div>
          <div className="pt-5"><div className="ml-10">{Text.help}</div></div>
          <div className="pt-10 text-3xl">{Text.bans}</div>
          <div className="pt-5"><div className="ml-10">{Text.support}</div></div>
        </div>
      </div>
    </div>
  );
}