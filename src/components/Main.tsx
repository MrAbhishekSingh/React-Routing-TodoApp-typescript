import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Main(props: any) {
  const navigate = useNavigate();
  const goToSecondsComp = () => {
    navigate('/todolist');
  };
  var styles1 = {
    backgroundColor: 'white',
  };
  const gotToFirstComp = () => {
    navigate('/todoform');
  };
  const gotToMainComp = () => {
    navigate('/main');
  };
  return (
    <>
      <div className="Todo" style={styles1}>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" onClick={gotToMainComp}><b><i className="text-danger">TODO APP</i></b></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" onClick={gotToMainComp}>HOME <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={gotToFirstComp}>TODO FORM</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " onClick={goToSecondsComp}>TODO LIST</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <div className="App">
        <br />
        <br />
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={gotToFirstComp}>FORM FILL</button>
        <br />
        <br />
        <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={goToSecondsComp}>FORM LIST</button>
      </div>
    </>
  )
}

export default Main
