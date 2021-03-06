import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css'

const Form = () => {
    return (
        <div className="tc center pa2 ma5 w5  shadow-1 grow br4">
           <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label f3" >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Exemple@exemple.com"/>
    <div id="emailHelp" className="form-text grey f7">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label f3">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*********"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-info">Submit</button>
</form>
        </div>
    )
}


export default Form;