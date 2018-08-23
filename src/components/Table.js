import React, { Component } from 'react';


class Table extends Component {
  render() {
    let { header, data } = this.props
    return (
      <div>
        <table className="table table-hover table-bordered">
          <thead>
            <tr className="text-center">
              {
                header.map((title, index) => {
                  return <th key={index}>{title}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              data.map((user, index) => {
                return <tr key={index}>
                  <td>{user.user_name}</td>
                  <td>{user.investion}</td>
                  <td>{user.user_email}</td>
                  <td>{user.container_number}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
