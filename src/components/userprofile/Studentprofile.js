import React from 'react';

const StudentProfile = () => {
  return (
    <div className="w-full mx-auto bg-white shadow-md rounded px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Student Profile</h2>
      <div className="mb-4">
        <p><span className="font-semibold">Name:</span> John Doe</p>
        <p><span className="font-semibold">ID:</span> S12345</p>
        <p><span className="font-semibold">Rank:</span> 5</p>
      </div>
      <p><b>your progress:</b></p>
      <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
        <div className="bg-blue-500 text-white py-1 text-center" style={{ width: '70%' }}>70% Completed</div>
      </div>
    </div>
  );
};

export default StudentProfile;
