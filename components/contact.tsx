const Contact = () => {
  return (
    <form>
      <h2 className="text-center text-xl md:text-2xl">
        Leave me a message <span className="text-royal-blue">!</span>
      </h2>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col items-start">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full rounded border py-2 px-3 dark:bg-transparent placeholder:dark:text-gray-300"
          />
          <p></p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@gmail.com"
            className="rounded border py-2 px-3 dark:bg-transparent placeholder:dark:text-gray-300"
          />
          <p></p>
        </div>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" cols={30} rows={5}></textarea>
        <p></p>
      </div>
    </form>
  );
};

export default Contact;
