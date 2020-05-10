import React from 'react';

// Importação dos componentes
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      search: []
    }
  }

  // Fetch API
  async componentDidMount() {
    await fetch(`https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          contacts: data
        })
      })
      .catch(err => console.log(err))
  }

  // Função de pesquisar
  handleSearch = (name) => {
    const { contacts } = this.state;

    const filteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase() === name.toLowerCase();
    })
    this.setState({
      search: filteredContacts,
    })
  }
  
  
  render() {
    let { contacts, search } = this.state;

    return (
      <React.Fragment>
        {/* Topbar */}
        <Topbar />

        {/* Filters */}
        <Filters
          search={search}
          onSearch={this.handleSearch} />

        {/* Contacts */}
        <Contacts 
          contacts={contacts} />

      </React.Fragment>
    )
  }
}

export default App;
