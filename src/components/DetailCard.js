import React from "react";
import { useUserContext } from "../userContext";
function DetailCard() {
  const { userData } = useUserContext();

  return (
    <div className="md:w-1/2 mx-auto bg-dark-blue mt-5 rounded-2xl font-fontmono px-3 py-16 md:p-10">
      <div className="flex flex-col">
        <div className="flex items-center">
          <img className="rounded-full w-20 md:w-36" src={userData.avatar_url} alt="" />
          <div className="ml-3 md:ml-5">
            <h1 className="text-white font-bold text-md md:text-2xl mb-2">{userData.name}</h1>
            <h5 className="text-sky-blue">
              <a href={userData.html_url}>@{userData.login}</a>{" "}
            </h5>
          </div>
        </div>
        <h4 className="text-white text-xs mt-2 md:-mt-5 md:text-base md:ml-auto">
          Joined {userData.created_at ? userData.created_at.slice(0, 10) : null}
        </h4>
      </div>
      <h1 className="text-snow mt-3 md:mt-6 md:text-lg">Bio: {userData.bio}</h1>
      <div className="bg-dark-mode-bg rounded-2xl py-2 mt-6 flex justify-evenly text-center text-snow">
        <div>
          <p className="text-xs md:text-base mb-3">Repos</p>
          <p>{userData.public_repos}</p>
        </div>
        <div>
          <p className="text-xs md:text-base mb-3">Followers</p>
          <p>{userData.followers}</p>
        </div>
        <div>
          <p className="text-xs md:text-base mb-3">Following</p>
          <p>{userData.following}</p>
        </div>
      </div>
      <div className="flex justify-between mt-8 mb-5">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
          </svg>
          <h3 className="ml-3 text-snow text-xs md:text-base">{userData.location}</h3>
        </div>
        <div className="flex items-center md:pr-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
          </svg>
          <h3 className="ml-3 text-snow text-xs md:text-base">
            <a href={`https://twitter.com/${userData.twitter_username}`}>
              {userData.twitter_username}
            </a>
          </h3>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
          </svg>
          <h3 className="ml-3 text-snow text-xs  md:text-base">
            {userData.email ? userData.email : "Not Available"}
          </h3>
        </div>
        <div className="flex items-center md:pr-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
            ></path>
            <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"></path>
          </svg>
          <h3 className="ml-3 text-snow text-xs  md:text-base">
            {userData.company ? userData.company : "Not Available"}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
