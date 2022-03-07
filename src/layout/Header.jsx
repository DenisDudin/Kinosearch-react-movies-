function alertWork() {
  alert('in the works')
}

function Header() {
  return <>
    <ul id="dropdown1" className="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li className="divider"></li>
      <li><a href="#!">three</a></li>
    </ul>
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">KinoSearch</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#" onClick={alertWork}>Lists</a></li>
          <li><a href="#" onClick={alertWork}>About</a></li>
          <li><a href="#" onClick={alertWork}>Login</a></li>
        </ul>
      </div>
    </nav>
  </>
}

export {Header}