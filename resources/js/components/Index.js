import React from "react";
import ReactDOM from "react-dom";
import Example from "./Example";
function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            React Component Laravel
                        </div>

                        <Example />

                        <div className="card-body">Hello component!</div>
                        <h2>
                            Listed <a href="/login">Logins</a>
                        </h2>
                        <div className="card-body"> sd</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
