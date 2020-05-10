import React from 'react';

class Contact extends React.Component {
  render() {
    const { avatar, name, phone, country, admissionDate, company, department } = this.props;    

    return (
      <div className="container">
        <section className="contact" data-testid="contact">
          <span>
            <img src={avatar ? avatar: '---'} alt={name} title={name}/>
          </span>
          <span>{name ? name: '---'}</span>
          <span>{phone ? phone: '---'}</span>
          <span>{country ? country: '---'}</span>
          <span>{admissionDate ? admissionDate: '---'}</span>
          <span>{company ? company: '---'}</span>
          <span>{department ? department: '---'}</span>
        </section>
      </div>
    );
  }
}

export default Contact;
