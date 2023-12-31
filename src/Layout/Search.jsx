
const Search = ({ onSearch, value, onChange }) => {
  const handleSearchClick = () => {
    onSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex justify-center items-center rounded-lg">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered bg-slate-50"
            value={value}
            onChange={onChange}
            onKeyPress={handleKeyPress}
          />
          <button
            className="btn btn-square"
            onClick={handleSearchClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-inherit"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
