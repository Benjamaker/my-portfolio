import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
        <tr>
          <th>Project</th>
          <th>Repo</th>
          <th>Tech</th>
        </tr>
    </thead>      
  )
}

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Thermostat</td>
        <td>https://github.com/Benjamaker/thermostat-js</td>
        <td>Javascript, JQuery, Ruby, Sinatra</td>
      </tr>
      <tr>
        <td>Pocket Positivity</td>
        <td>https://github.com/basselalsayed/pocket_positivity</td>
        <td>React Native, Node.js, Express</td>
      </tr>
      <tr>
        <td>Space Trash</td>
        <td>https://github.com/The-Mech-Squad/the_mech_squad</td>
        <td>Python, Django, Javascript, Cesium.js</td>
      </tr>
    </tbody>   
  )
}

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}

export default Table 