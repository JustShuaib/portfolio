import Error from "../icons/error";
import Success from "../icons/success";
const Toast = ({ err }: { err: boolean }) => {
  return (
    <div className="fixed right-2 top-10 z-50 flex animate-slide-in gap-x-2 rounded border border-black bg-white py-2 px-3 text-sm dark:border-white dark:bg-black md:px-6 md:text-base">
      {err ? <Error /> : <Success />}
      <span>
        {err ? "Message failed to deliver" : "Message delivered successfully!"}
      </span>
    </div>
  );
};

export default Toast;
