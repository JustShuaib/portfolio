import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Toast from "./toast";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (message) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        { ...message },
        process.env.NEXT_PUBLIC_KEY as string
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <>
      <Toast />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-6 md:mx-auto md:max-w-xl"
      >
        <h2 className="text-center text-xl md:text-2xl">
          Leave me a message<span className="text-royal-blue">!</span>
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
              <span className="text-xs text-red-500">Name is required</span>
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
              <span className="text-xs text-red-500">Email is required</span>
            )}
          </div>
        </div>
        <div className="my-4 flex flex-col gap-y-1">
          <label htmlFor="message" className="text-sm md:text-base">
            Message:
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            placeholder="Hi, I'm a big fan, keep up the good work!"
            cols={30}
            rows={5}
            className={`rounded border py-2 px-3 text-sm focus:outline-0 dark:bg-transparent placeholder:dark:text-gray-300 md:py-3  ${
              errors.message ? "border-red-500" : "focus:border-blue-500"
            }`}
          ></textarea>
          {errors.message && (
            <span className="text-xs text-red-500">Message is required</span>
          )}
        </div>
        <button
          type="submit"
          className="mx-auto block rounded bg-royal-blue py-2 px-12 capitalize text-white hover:bg-opacity-80 md:py-2.5 md:px-16"
        >
          send
        </button>
      </form>
    </>
  );
};

export default Contact;
