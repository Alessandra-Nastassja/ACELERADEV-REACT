import React from "react";

// Importação dos componentes
import Contact from './Contact';

const Contacts = ({ contacts }) => {
	if (contacts) {
		return (
			<>
				{/* Header */}
				<div className="container" data-testid="contacts">
					<section className="contacts">
						<article className="contact">
							<span className="contact__avatar" />
							<span className="contact__data">Nome</span>
							<span className="contact__data">Telefone</span>
							<span className="contact__data">País</span>
							<span className="contact__data">Admissão</span>
							<span className="contact__data">Empresa</span>
							<span className="contact__data">Departamento</span>
						</article>
						{
							contacts && contacts.map((contact) => (
								<Contact {...contact} key={contact.id} />
							))
						}
					</section>
				</div>
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

export default Contacts;
