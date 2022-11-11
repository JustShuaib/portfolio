import Tick from "../icons/tick";

const Toast = () => {
  return (
    <div className="fixed right-2 top-10 z-50 animate-slide-in rounded border border-black bg-white py-2 px-3 text-sm dark:border-white dark:bg-black">
      <Tick />
      Message delivered successfully!
    </div>
  );
};

export default Toast;
