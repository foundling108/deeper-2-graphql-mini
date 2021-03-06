import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Links from './Links';
import AddLink from 'AddLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddLink />
        <Links />
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import './App.css';

// import { graphql, Query } from 'react-apollo'
// import gql from 'graphql-tag'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header></header>
//         <p className="App-intro">
//           {this.props.welcomeMessage.welcome}
//         </p>
//       </div>
//     );
//   }
// }

// const QUERY = gql`
// {
//   welcome
// }
// `

// export default graphql(QUERY, {
//   name: 'welcomeMessage'
// })(App);
