const Contact = () => {
  return (
    <form className="my-6 md:mx-auto md:max-w-xl">
      <h2 className="text-center text-xl md:text-2xl">
        Leave me a message<span className="text-royal-blue">!</span>
      </h2>
      <div className="mt-2 flex flex-col gap-4 md:flex-row">
        <div className="flex basis-full flex-col items-start gap-y-1">
          <label htmlFor="name" className="text-sm md:text-base">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full rounded border py-2 px-3 text-sm focus:border-gray-500 focus:outline-0 dark:bg-transparent placeholder:dark:text-gray-300 md:py-3"
          />
          <p></p>
        </div>
        <div className="flex basis-full flex-col gap-y-1">
          <label htmlFor="email" className="text-sm md:text-base">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@gmail.com"
            className="rounded border py-2 px-3 text-sm focus:border-gray-500 focus:outline-0 dark:bg-transparent placeholder:dark:text-gray-300 md:py-3"
          />
          <p></p>
        </div>
      </div>
      <div className="my-4 flex flex-col gap-y-1">
        <label htmlFor="message" className="text-sm md:text-base">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Hi, I'm a big fan, keep up the good work!"
          cols={30}
          rows={5}
          className="rounded border py-2 px-3 text-sm focus:border-gray-500 focus:outline-0 dark:bg-transparent placeholder:dark:text-gray-300 md:py-3"
        ></textarea>
        <p></p>
      </div>
      <button
        type="submit"
        className="mx-auto block rounded bg-royal-blue py-2 px-12 capitalize text-white hover:bg-opacity-80 md:py-2.5 md:px-16"
      >
        send
      </button>
    </form>
  );
};

export default Contact;
