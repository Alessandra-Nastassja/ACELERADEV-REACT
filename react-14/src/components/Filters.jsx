import React, { useState } from 'react';

const Filters = ({ contacts, setSearch }) => {
	const [context, setContext] = useState('');

	// Função de pesquisar
	const handleSearch = (name, contacts) => {
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(name.toLowerCase()));		
	}

	// Atribui o novo array
	const handleTyping = (event) => {
		setSearch(handleSearch(event, contacts))
	}

	// Verifica se o filtro já foi aplicado
	const handleClick = (text) => {
		setContext(context !== text ? text : '');
	}

	// Realiza ordenação por data de adimissão
	const sortByDate = (contacts) => contacts.sort((a, b) => new Date(a.admissionDate) - new Date(b.admissionDate));

	// Realiza ordenação por ordem alfabética
	const sortByTarget = (contacts, target) => {
		return contacts.sort((a, b) => a[target].localeCompare(b[target]));
	}

	// Pega cada opção de filtro
	const sortContacts = (optionTarget) => ({
		"name": sortByTarget(contacts, 'name').map(el => el),
		"country": sortByTarget(contacts, 'country').map(el => el),
		"company": sortByTarget(contacts, 'company').map(el => el),
		"department": sortByTarget(contacts, 'department').map(el => el),
		"date": sortByDate(contacts).map(el => el),
		"": setSearch(contacts)
	})[optionTarget];
	

	const handleSortContacts = ({ target: {classList}}, optionTarget) =>  setSearch(reverseList(classList, sortContacts(optionTarget)));

	// Inverte a ordem da lista de contatos
	const reverseList = (classList, contacts) => !classList.contains('is-selected') ? contacts : contacts.reverse();

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

				<button 
					className={`filters__item ${context === 'name' && 'is-selected'}`}
					onClick={(event) => { handleClick('name'); handleSortContacts(event, 'name'); }}>
					Nome <i className={`fas ${context === 'name' ? 'fa-sort-up' : 'fa-sort-down'}`} />
				</button>

				<button className="filters__item"
					className={`filters__item ${context === 'country' && 'is-selected'}`}
					onClick={(event) => { handleClick('country'); handleSortContacts(event, 'country'); }}>
					País <i className="fas fa-sort-down" />
				</button>

				<button 
					className={`filters__item ${context === "date" && "is-selected"}`}
					onClick={(e) =>{handleClick('date'); handleSortContacts(e, 'date');}}>
					Data de admissão <i className="fas fa-sort-down" />
				</button>

				<button className="filters__item"
					className={`filters__item ${context === 'company' && 'is-selected'}`}
					onClick={(event) => { handleClick('company'); handleSortContacts(event, 'company'); }}>
					Empresa <i className="fas fa-sort-down" />
				</button>

				<button className="filters__item"
					className={`filters__item ${context === 'department' && 'is-selected'}`}
					onClick={(event) => { handleClick('department'); handleSortContacts(event, 'department'); }}>
					Departamento <i className="fas fa-sort-down" />
				</button>

			</section>
		</div>
	);
}

export default Filters;