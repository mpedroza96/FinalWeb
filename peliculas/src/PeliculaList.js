import React from 'react';
import Pelicula from "./Pelicula";
export default class PeliculaList extends React.Component {

    componentDidMount()
    {
        console.log(this.props.messages)
        this.setState({ offers: this.props.messages })
    }
  state = { 
      "offers": [

    ],
    "poster":[],
    "name":[],
    "description":[],
    "cast":[]
  };

  render() {
    return (
        <div>
    <div className="row">
      <div className="container">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">DirectedBy</th>
              <th scope="col">Country</th>
              <th scope="col">Budget</th>
              <th scope="col">Views</th>
              <th scope="col">ReleaseDate</th>
            </tr>
          </thead>
          <tbody>
              {this.state.offers.map( (e,i) => <Pelicula key={i} offer={e}/>)}
          </tbody>
        </table>
      </div>
      </div>
      <div className="row">

      </div>
      </div>
    );
  }
}