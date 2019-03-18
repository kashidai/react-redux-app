import React, { Component } from 'react';


// class App extends Component {
//   render() {
//     return <div>Hellow, world!</div>;
//   }
// }

class App extends Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Helloe world!!!"

        );
    }
}

export default App;
