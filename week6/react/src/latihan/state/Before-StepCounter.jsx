import React from 'react'
import './index.css'

export const StepCounterBefore = () => {
  return (
    //setting up state
    <main>
      <span aria-hidden>👟</span>
      <div>You've walked 0 steps so far today.</div>
      <button>Record a Step</button>
    </main>
  );
};

//1. tombolnya di klik 0 stepsnya berubah

