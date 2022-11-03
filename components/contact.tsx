const Contact = () => {
  return (
    <form>
      {/* <h2>Leave me a message!</h2> */}
      <h2 className="text-center text-xl md:text-2xl">
        Leave me a message<span className="text-royal-blue">!</span>
      </h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="rounded border border-stone-600 py-2 px-3"
        />
        <p></p>
      </div>
      <div>
        <label htmlFor="mail">Mail:</label>
        <input
          type="email"
          id="mail"
          className="rounded border border-stone-600 py-2 px-3"
        />
        <p></p>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" cols={30} rows={5}></textarea>
        {/* <input
          type="email"
          id="mail"
          className="rounded border border-stone-600 py-2 px-3"
        /> */}
        <p></p>
      </div>
    </form>
  );
};

export default Contact;
