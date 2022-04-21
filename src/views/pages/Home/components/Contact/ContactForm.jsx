const ContactForm = () => {
  return (
    <div className="form">
      <div className="form__item">
        <input
          className="form__input"
          type="text"
          name="name"
          placeholder=" "
        />
        <label className="form__label" htmlFor="name">
          Name
        </label>
      </div>
      <div className="form__item">
        <input
          className="form__input"
          type="text"
          name="subject"
          placeholder=" "
        />
        <label className="form__label" htmlFor="subject">
          Subject
        </label>
      </div>
      <div className="form__item">
        <input
          className="form__input"
          type="email"
          name="email"
          placeholder=" "
        />
        <label className="form__label" htmlFor="email">
          Email
        </label>
      </div>
      <div className="form__item">
        <textarea
          className="form__textArea"
          type="text"
          name="message"
          placeholder=" "
        />
        <label className="form__label" htmlFor="message">
          Message
        </label>
      </div>
      <button type="button" className="form__button">
        send
      </button>
    </div>
  );
};

export default ContactForm;
