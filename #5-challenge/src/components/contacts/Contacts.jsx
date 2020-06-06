import React from "react";

// Importação dos componentes
import Contact from '../contact/Contact';

class Contacts extends React.Component {
	render() {
		let { contacts } = this.props;

		if (contacts !== undefined) {
			return (
				<>
					{/* Header */}
					<div className="container">
						<section className="contacts" data-testid="contacts">
							<article className="contact">
								<span className="contact__avatar" />
								<span className="contact__data">Nome</span>
								<span className="contact__data">Telefone</span>
								<span className="contact__data">País</span>
								<span className="contact__data">Admissão</span>
								<span className="contact__data">Empresa</span>
								<span className="contact__data">Departamento</span>
							</article>
						</section>
					</div>

					{/* Body */}
					{
						contacts.map((contact) => (
							<Contact key={contact.id} {...contact}/>
						))
					}
				</>
			);
		} else {
			return (
				<div className="container" data-testid="contacts">
					<p>Nenhum contato por aqui! <span role="img" aria-label="">😉</span></p>
				</div>
			)
		}
	}
}

export default Contacts;
