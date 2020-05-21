import React from 'react';

const Contact = ({ avatar, name, phone, country, admissionDate, company, department }) => {
  return (
    <article className="contact" data-testid="contact">
      <span data-testid="contact-avatar" className="contact__avatar">
        <img src={avatar ? avatar : '---'} alt={name} title={name} />
      </span>
      <span className="contact__data" data-testid="contact-name">{name ? name : '---'}</span>
      <span className="contact__data" data-testid="contact-phone">{phone ? phone : '---'}</span>
      <span className="contact__data" data-testid="contact-country">{country ? country : '---'}</span>
      <span className="contact__data" data-testid="contact-date">{admissionDate ? admissionDate : '---'}</span>
      <span className="contact__data" data-testid="contact-company">{company ? company : '---'}</span>
      <span className="contact__data" data-testid="contact-department">{department ? department : '---'}</span>
    </article>
  );
}

export default Contact;
