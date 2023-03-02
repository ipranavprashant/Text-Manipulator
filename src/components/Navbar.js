import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav
        class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            {props.title}
          </a>
          <div className="form-check form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              id="flexSwitchCheckDefault"
              onClick={props.handleToggle}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable dark mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
