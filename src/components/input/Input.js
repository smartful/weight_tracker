import React, { useState } from 'react';

function Input(props) {
  const [currentWeight, setCurrentWeight] = useState(0.0);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addNewRecord(currentWeight);
  }

  return (
    <div className='input'>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          name='current_weight'
          step='.01'
          value={currentWeight}
          onChange={(event) => setCurrentWeight(event.target.value)}
        />
        <button type='submit'>Enregistrer</button>
      </form>
    </div>
  );
}

export default Input;