export default function Background({ children }) {
  return (
    <div className="max-w-6xl mx-auto bg-stone-600 rounded-2xl shadow-xl p-6">
      {children}
    </div>
  );
}
