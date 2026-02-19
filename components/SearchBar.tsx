export default function SearchBar() {
  return (
    <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 w-full px-6 z-20">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg flex items-center gap-3 px-4 py-3">
        <span className="text-gray-400">🔍</span>
        <input
          type="text"
          placeholder="What are you craving for today?"
          className="w-full outline-none text-sm"
        />
      </div>
    </div>
  );
}
