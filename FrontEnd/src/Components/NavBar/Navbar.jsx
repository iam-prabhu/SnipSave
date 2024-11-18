// src/components/Navbar.jsx

const Navbar = ({
  isLoggedIn,
  onLogout,
  searchValue,
  onSearchChange,
  onInputFormClick,
}) => {
  return (
    <nav className="rounded-2xl bg-gray-800 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Company Name */}
        <span className="text-white text-xl font-semibold ">SnipSave</span>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={onSearchChange}
          className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      <div>
        <button
          className="text-white bg-gray-700 mr-5 px-4 py-2 rounded-2xl hover:bg-gray-500 transition"
          onClick={onInputFormClick}
        >
          Create
        </button>

        {/* Logout Button */}
        {isLoggedIn ? (
          <button
            onClick={onLogout}
            className="text-white bg-blue-600  px-4 py-2 rounded-2xl hover:bg-gray-500 transition"
          >
            Logout
          </button>
        ) : (
          <span className="text-white bg-blue-500 px-4 py-2 rounded cursor-not-allowed">
            Logged Out
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
