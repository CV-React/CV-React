const ContactForm = () => {
  return (
    <div className="form">
      <div className="form__item">
        <input type="text" name="name" />
        <label className="item__desc" htmlFor="name">
          Name
        </label>
      </div>
      <div className="form__item">
        <label className="item__desc" htmlFor="subject">
          Subject
        </label>
        <input type="text" name="subject" />
      </div>
      <div className="form__item">
        <label className="item__desc" htmlFor="email">
          Email
        </label>
        <input type="email" name="email" />
      </div>
      <div className="form__item">
        <label className="item__desc" htmlFor="message">
          Message
        </label>
        <textarea className="item__message" type="text" name="message" />
      </div>
      <button type="button" className="form__button">
        send
      </button>
    </div>
  );
};

export default ContactForm;
