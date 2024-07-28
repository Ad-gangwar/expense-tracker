import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('expUser'));
  return (
    <div className="py-7 px-12">
      <h1 className="text-4xl mb-6 font-bold">My Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg mb-4">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-transparent rounded-full flex items-center justify-center text-white text-2xl">
            <img src={user.photo? user.photo : "https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307t-user-account-image-log-user.png?s=1d3d7463d4822363d9b8aea2ac1c921a"} className="object-fit rounded-full w-full h-full"></img>
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-400">{user.email}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-gray-400">Write Something About Yourself</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
        <p className="text-gray-400">Name: {user.name}</p>
        <p className="text-gray-400">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
