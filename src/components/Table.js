import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Table extends Component {
  colValue = (data, item) => {
    let { hasUser } = this.props
    let _has = typeof(hasUser) === 'undefined' ? false : hasUser
    if (item.key === 'name' && _has) {
      return <Link to={'/users/detail/' + data.id}>{data.name}</Link>
    } else {
      return <span>{data[item.key]}</span>
    }
  }


  render() {
    let { header, data } = this.props

    return (
      <div>
        <table className="table table-hover table-bordered">
          <thead>
            <tr className="text-center">
              {
                header.map((item, index) => {
                  return <th key={index}>{item.title}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, index) => {
                return <tr key={index}>
                  {
                    header.map((item, _index) => {
                      return <td key={_index}>
                        {this.colValue(d, item)}
                      </td>
                    })
                  }
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
