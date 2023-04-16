import React from 'react';

const Leaks = () => {
  const leaks = [
    { location: 'Pipeline 1', status: 'Active' },
    { location: 'Pipeline 2', status: 'Inactive' },
    { location: 'Pipeline 3', status: 'Active' },
    { location: 'Pipeline 4', status: 'Inactive' },
    { location: 'Pipeline 5', status: 'Active' },
    { location: 'Pipeline 6', status: 'Inactive' },
    { location: 'Pipeline 7', status: 'Active' },
    { location: 'Pipeline 8', status: 'Active' },
    { location: 'Pipeline 9', status: 'Active' },
    { location: 'Pipeline 10', status: 'Active' },
    { location: 'Pipeline 12', status: 'Active' },
    { location: 'Pipeline 13', status: 'Active' },
    { location: 'Pipeline 14', status: 'Active' },
    { location: 'Pipeline 15', status: 'Active' },
    { location: 'Pipeline 16', status: 'Active' },
    { location: 'Pipeline 17', status: 'Active' },
  ];

  return (
    <div className="h-screen flex flex-col items-center p-8 bg-blue-200">
      <h2 className="text-[35px] text-gray-900 font-bold mb-4">Leaks</h2>
      <table className="w-full bg-white rounded-lg shadow-lg  ">
        <thead>
          <tr className="bg-blue-100">
            <th className="text-left py-2 px-4">Location</th>
            <th className="text-right py-2 px-4">Status</th>
            <th className="text-right py-2 px-2"></th>
          </tr>
        </thead>
        <tbody>
          {leaks.map((leak) => (
            <tr key={leak.location}>
              <td className="text-left py-2 px-4">{leak.location}</td>
              <td className="text-right py-2 px-4">{leak.status}</td>
        <td>
        <div
              className={`rounded-full h-4 w-4 ${
                leak.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
        </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaks;
