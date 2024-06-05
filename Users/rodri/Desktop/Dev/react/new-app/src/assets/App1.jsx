import { useState } from 'react';
import './App.css';

function App(){
  const [enable, setEnable] = useState(false);
  const [btn, setBtn] = useState('btn-danger');
  const [radiosValue, setRadiosValue] = useState('');

  const handleClick = (e) => {
      e.preventDefault();
      if(enable == false){
        setEnable(true);
        setBtn('btn-primary');
      }else{
        setEnable(false);
        setBtn('btn-danger');
      }
  }

  return(
    <div className="container bg-success pb-5 mt-5">
      <h1 className={` btn ${btn} mt-5`}>Hello ReactJS</h1>
      <form>
        <div className="row">
          <div className="col-sm-12 mt-3 col-md-4 col-lg-6">
            <input type="text" className="form-control" placeholder="E-mail" disabled={enable} />
          </div>
          <div className="col-sm-12 mt-3 col-md-4 col-lg-6">
            <input type="password" className="form-control" placeholder="Senha" disabled={enable} />
          </div>
        </div>
        <div className="group-button text-center">
          <button className="btn btn-primary mt-2 w-25">Entrar</button>
          <button className={`btn ${btn} mt-2 w-25`} onClick={ handleClick }>Controlar</button>
        </div>
      </form>

      <div className="container mt-3">
      <input 
          id="html" name="group1"
          type="radio" value={radiosValue} onChange={ e => setRadiosValue(e.target.id)}
      />
      <label htmlFor="html">HTML</label>

      <input 
          id="css" name="group1"
          type="radio" value={radiosValue} onChange={ e => setRadiosValue(e.target.id)}
      />
      <label htmlFor="css">CSS</label>

      <input 
          id="javascript" name="group1"
          type="radio" value={radiosValue} onChange={ e => setRadiosValue(e.target.id)}
      />
      <label htmlFor="javascript">JavaScript</label>
      <br/> <hr/>
      <p className='alert alert-warning w-25'>{radiosValue}</p>
      </div>
    </div>
  )
}
export default App