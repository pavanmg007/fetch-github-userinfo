import axios from "axios";
import React, { useState } from "react";
import { useUserContext } from "../userContext";

function SearchBar() {
  const { setUserData } = useUserContext();
  const [username, setUsername] = useState("");
  function changeHandle(e) {
    setUsername(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    async function fetchUserData() {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const data = response.data;
      setUserData(data);
    }
    fetchUserData();
  }
  return (
    <>
    <h1 className="mt-10 text-center font-fontmono text-white font-bold text-xl md:text-2xl lg:text-3xl mb-5">Find Github User</h1>
      <form onSubmit={submitHandler} className="flex flex-row md:w-1/2 mx-auto">
        <span className="flex items-center h-10 md:h-16 bg-dark-blue rounded-l-none px-4 rounded-tl-2xl rounded-bl-2xl">
          <svg className="svg-icon w-5 md:w-8" viewBox="0 0 20 20">
            <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
          </svg>
        </span>
        <input
          className="h-10 md:h-16 bg-dark-blue font-bold w-full py-1 px-2  outline-none text-xs md:text-base text-white font-fontmono"
          type="text"
          placeholder="Enter your Github username"
          onChange={changeHandle}
          value={username}
        />
        <span className="flex items-center h-10 md:h-16 bg-dark-blue rounded rounded-l-none border-0 px-3 font-bold text-grey-100 rounded-tr-2xl rounded-br-2xl">
          <button
            type="submit"
            className="bg-sky-blue hover:bg-gredient-light text-xs md:text-lg text-white font-medium py-2 md:py-3 px-3 rounded-xl font-fontmono"
          >
            Search
          </button>
        </span>
      </form>
    </>
  );
}

export default SearchBar;
