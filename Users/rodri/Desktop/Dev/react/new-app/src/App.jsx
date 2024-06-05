import { useState } from 'react';

function App(){
  const [radiosValue, setRadiosValue] = useState('');
  return(
      <div className="container bg-primary mt-3 p-3">
        <h3 className='text-white mb-2'>Interação entre useState e Layout Bootstrap</h3>
          <div className="group d-flex gap-1">
                <input id="html" name="group1"
                    type="radio" value={radiosValue} 
                    onChange={ e => setRadiosValue(e.target.id)}
                />
                <label htmlFor="html" className='text-white'>HTML</label>
          </div>
          <div className="group d-flex gap-1">
                <input id="css" name="group1" 
                    type="radio" value={radiosValue} 
                    onChange={ e => setRadiosValue(e.target.id)}
                />
                <label htmlFor="css" className='text-white'>CSS</label>
          </div>
          <div className="group d-flex gap-1">
                <input id="javascript" name="group1"
                    type="radio" value={radiosValue} 
                    onChange={ e => setRadiosValue(e.target.id)}
                />
                <label htmlFor="javascript" className='text-white'>JavaScript</label>
          </div>
          <h2 className='bg-warning text-white p-3 mt-3'>{radiosValue}</h2>
      </div>
  )
}
export default App