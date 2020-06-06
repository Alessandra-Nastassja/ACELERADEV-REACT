import React, { useEffect, useState } from 'react';

// Importação dos componentes
import Topbar from './utils/Topbar';
import Filters from './components/filters/Filters';
import Contacts from './components/contacts/Contacts';

import './App.scss';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {

    const fetchApi = () => {
      fetch(`https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts`)
        .then(res => res.json())
        .then(data => {
          setContacts(data);
          setSearch(data);
        })
        .catch(err => console.log(err))
    }

    // Fetch API
    fetchApi();
  }, []);

  return (
    <>
      {/* Topbar */}
      <Topbar />

      {/* Filters */}
      <Filters
        contacts={contacts}
        setSearch={setSearch} />

      {/* Contacts */}
      <Contacts
        contacts={contacts} />
    </>
  )
}

export default App;
