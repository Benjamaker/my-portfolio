import React, { Component } from 'react';
import styles from './App.module.css';
import Table from './Table';
import Nav from './Nav';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div>
        <section className={styles.headerContainer}>
          <Header />
        </section>
        <section className={styles.bodyContainer}>
          <Table />
        </section>
      </div>
    )
  }
}

export default App