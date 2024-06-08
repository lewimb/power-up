export default function SearchBar() {
  return (
    <div className="rounded-full overflow-hidden bg-red-50 border-2 text-md flex flex-[4]">
      <input
        type="text"
        placeholder=""
        className="px-4 bg-red-50 focus:outline-none flex-1"
      />
      <select className="bg-white rounded-xl text-sm px-2">
        <option value="">All</option>
        <option value="">Laptop</option>
        <option value="">Computer</option>
        <option value="">GPU</option>
      </select>
    </div>
  );
}
