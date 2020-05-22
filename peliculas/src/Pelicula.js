import React from 'react';

export default class Pelicula extends React.Component {

      render() {
          return (
                <tr>
                  <th scope="row">{this.props.offer.id}</th>
                  <td>{this.props.offer.name}</td>
                  <td>{this.props.offer.directedBy}</td>
                  <td>{this.props.offer.country}</td>
                  <td>{this.props.offer.budget}</td>
                  <td>{this.props.offer.views}</td>
                <td>{this.props.offer.releaseDate}</td>
              </tr>
          );
    }
}