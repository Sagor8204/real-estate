export default function Button({ text, icon: Icon, custom }) {
  return (
    <button
      className={`flex items-center space-x-2 justify-center py-2 px-3 bg-primary text-[15px] font-semibold transition-all duration-300 text-white rounded-md border border-primary hover:text-primary hover:bg-transparent ${custom}`}
    >
      {Icon && <Icon className="text-lg" />}
      {text && <span>{text}</span>}
    </button>
  );
}
