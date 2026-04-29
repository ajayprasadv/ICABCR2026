import React from "react";

function FeeTable() {
  const data = [
    {
      category: "Student",
      paper: "INR 8000/-",
      conference: "INR 1000/-",
      workshop: "INR 1000/-",
    },
    {
      category: "Faculty Member",
      paper: "INR 9000/-",
      conference: "INR 3000/-",
      workshop: "INR 3000/-",
    },
    {
      category: "Corporate Member",
      paper: "INR 10000/-",
      conference: "INR 5000/-",
      workshop: "INR 5000/-",
    },
    {
      category: "Foreign Nationals (other than Indian subcontinent)",
      paper: "110$",
      conference: "50$",
      workshop: "50$",
    },
    {
      category: "Indian Subcontinent Nationals",
      paper: "INR 9000/-",
      conference: "INR 3000/-",
      workshop: "INR 3000/-",
    },
  ];

  return (
    <div>
      <h2>Registration & Participation Fees</h2>
      <table className="fee-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Paper Registration Fees</th>
            <th>Participation Fees (Conference)</th>
            <th>Participation Fees (Per Workshop)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.paper}</td>
              <td>{item.conference}</td>
              <td>{item.workshop}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeeTable;