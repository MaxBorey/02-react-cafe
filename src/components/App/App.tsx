import React, { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo'; 
import Votes from '../../types/votes';


export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div className={css.app}>
      <CafeInfo />
      
    </div>
  );
}
