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
  ];

  return (
    <div className="h-screen flex flex-col items-center p-8 bg-blue-200">
      <h2 className="text-[35px] text-gray-900 font-bold mb-4">Leaks</h2>
      <table className="w-[900px]  bg-white rounded-lg shadow-lg overflow-hidden overflow-y-scroll ">
        <thead>
          <tr className="bg-blue-100">
            <th className="text-left py-2 px-4 flex w-full justify-between ">

<p>
  Location
</p>
<p>
  status
</p>

            </th>
            <th className="text-right py-2 px-2"></th>
          </tr>
        </thead>
        <tbody className='bg-white flex flex-col w-[1000px] ' >
          {leaks.map((leak) => (
            <tr className='hover:shadow-md bg-gray-100 m-2 flex justify-between items-center w-full ' key={leak.location}>
              <td className="text-left py-2 px-4  ">{leak.location}</td>
              <td className="text-right py-2 px-4 flex justify-center items-center">{leak.status}
        <div
              className={`rounded-full mx-2 h-4 w-4  ${
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
