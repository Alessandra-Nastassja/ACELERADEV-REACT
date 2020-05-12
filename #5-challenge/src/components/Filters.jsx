import React, { useEffect, useState } from 'react';

const Filters = ({ contacts, setSearch }) => {

	useEffect(() => {

	}, []);

	  // Função de pesquisar
	  const handleSearch = (name) => {
		contacts.filter((contact) => 
		  contact.name.toLowerCase().includes(name.toLowerCase()));
		
	  }

	const handleTyping = (event) => {
		setSearch(handleSearch(contacts))
	}		

	return (
		<div className="container" data-testid="filters">
			<section className="filters">
				<div className="filters__search">
					<input
						type="text"
						className="filters__search__input"
						onChange={(event) => handleTyping(event.target.value)}
						placeholder="Pesquisar" />

					<button className="filters__search__icon">
						<i className="fa fa-search" />
					</button>
				</div>

				<button className="filters__item is-selected">
					Nome <i className="fas fa-sort-down" />
				</button>

				<button className="filters__item">
					País <i className="fas fa-sort-down" />
				</button>

				<button className="filters__item">
					Empresa <i className="fas fa-sort-down" />
				</button>

				<button className="filters__item">
					Departamento <i className="fas fa-sort-down" />
				</button>

				<button className="filters__item">
					Data de admissão <i className="fas fa-sort-down" />
				</button>
			</section>
		</div>
	);
}

export default Filters;