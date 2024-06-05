
function FormCadastro() {
    
    return (
      <div className="container">
        <h1 className=" p-5 bg-primary text-white">Kauã</h1>
        <h3 className=" p-3 text-center bg-dark text-white mb-5">Aula 01</h3>
  
        <form className="mt-3">
          <h3 className="text-center mb-4">Entrar no sistema</h3>
  
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="email@exemplo.com" />
          </div>
  
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="digite sua senha" />
          </div>
  
          <button className="btn btn-primary w-50 text-white">Entrar</button>
          <button className="btn btn-warning w-50 text-white">Cadastrar</button>
        </form>
      </div>
    )
  }
  
  export default FormCadastro
  