import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Toast from "./toast";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const toast = (err?: string) => {
    if (err) setError(true);
    else setError(false);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (message) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        { ...message },
        process.env.NEXT_PUBLIC_KEY as string
      )
      .then(() => {
        toast();
        reset();
      })
      .catch(() => toast("ERROR"));
  };

  return (
    <>
      {show && <Toast err={error} />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-6 md:mx-auto md:max-w-xl"
        id="contact"
      >
        <h2 className="text-center text-xl md:text-2xl">
          Leave a message<span className="text-royal-blue">!</span>
        </h2>
        <div className="mt-2 flex flex-col gap-4 md:flex-row">
          <div className="flex basis-full flex-col items-start gap-y-1">
            <label htmlFor="name" className="text-sm md:text-base">
              Name:
            </label>
            <input
              {...register("name", { required: true })}
              id="name"
              placeholder="John Doe"
              className={`w-full rounded border py-2 px-3 text-sm focus:outline-0 dark:bg-transparent placeholder:dark:text-gray-300 md:py-3 ${
                errors.name ? "border-red-500" : "focus:border-blue-500"
              }`}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                It&apos;d be nice if I knew your name
              </span>
            )}
          </div>
          <div className="flex basis-full flex-col gap-y-1">
            <label htmlFor="email" className="text-sm md:text-base">
              Email:
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              id="email"
              placeholder="johndoe@gmail.com"
              className={`rounded border py-2 px-3 text-sm focus:outline-0 dark:bg-transparent placeholder:dark:text-gray-300 md:py-3  ${
                errors.email ? "border-red-500" : "focus:border-blue-500"
              }`}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                How do I do a follow-up if I don&apos;t know your mail?
              </span>
            )}
          </div>
        </div>
        <div className="mt-4 mb-6 flex flex-col gap-y-1">
          <label htmlFor="message" className="text-sm md:text-base">
            Message:
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            placeholder="Hi. I'm a big fan of yours, keep up the good work!"
            cols={30}
            rows={5}
            className={`rounded border py-2 px-3 text-sm focus:outline-0 dark:bg-transparent placeholder:dark:text-gray-300 md:py-3  ${
              errors.message ? "border-red-500" : "focus:border-blue-500"
            }`}
          ></textarea>
          {errors.message && (
            <span className="text-xs text-red-500">
              You gotta say something
            </span>
          )}
        </div>
        <button
          type="submit"
          className="mx-auto block rounded bg-royal-blue py-2 px-12 capitalize text-white hover:bg-opacity-80 md:px-16 md:text-lg"
        >
          send
        </button>
      </form>
    </>
  );
};

export default Contact;
