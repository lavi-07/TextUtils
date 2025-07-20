import React from "react";
  
export default function Navbar(props) {
  
 return(
  <nav className={`navbar navbar-expand-lg navbar-${props.mode === "dark" ? "dark":"light"} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      <div className="continer"></div>
      <select className="form-select w-25" value={props.selected} onChange={props.modeChange} aria-label="Default select example">
  <option value ="default">light</option>
  <option value="primary">Primary</option>
  <option value="secondary">Secondary</option>
  <option value="dark">Dark</option>
</select>
    </div>
  </div>
</nav>

 )
}
