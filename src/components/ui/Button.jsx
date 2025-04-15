export default function Button({ text, icon: Icon, custom }) {
  return (
    <button
      className={`flex items-center space-x-2 justify-center py-2 px-3 bg-primary text-[15px] font-semibold transition-all duration-300 text-white rounded-md border border-primary ${custom} relative before:absolute before:content-[''] before:top-0 before:left-0 before:w-0 before:h-full hover:before:w-full before:z-0 before:rounded-md before:transition-all before:duration-300`}
    >
      <div className="flex items-center space-x-2 z-10 relative">
        {Icon && <Icon className="text-lg" />}
        {text && <span>{text}</span>}
      </div>
    </button>
  );
}
