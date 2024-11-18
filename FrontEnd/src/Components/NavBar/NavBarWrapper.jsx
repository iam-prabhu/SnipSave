import React, { useState } from 'react'; // Add this import
import Navbar from './Navbar';

function NavBarWrapper({onInputFormClick}) {
  // State to track login/logout
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // State for search input
  const [searchValue, setSearchValue] = useState('');

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Log out the user
    alert('You have been logged out!');
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value); // Update the search input value
  };

  return (
    <div className="flex mx-12 my-8 flex-col rounded-lg" style={{borderRadius: '10px'}}>
      {/* Navbar */}
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onInputFormClick={onInputFormClick}
      />



      {/* Main content area
      <main className="flex-grow p-8 text-center">
        {isLoggedIn ? 'Welcome, User!' : 'Please login to continue.'}
      </main> */}



    
    </div>
  );
}

export default NavBarWrapper;
