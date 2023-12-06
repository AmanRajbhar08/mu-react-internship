// components/DisplayUserData.tsx
import React, { useEffect, useState } from "react";

interface UserData {
  name: string;
  phoneNumber: string;
  email: string;
}

const DisplayUserData: React.FC = () => {
  const [userRecords, setUserRecords] = useState<UserData[]>([]);

  useEffect(() => {
    // Retrieve user records from localStorage
    const storedRecords = localStorage.getItem("userRecords");
    if (storedRecords) {
      setUserRecords(JSON.parse(storedRecords));
    }
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>All User Records</h2>
      {userRecords.length > 0 ? (
        <div>
          {userRecords.map((userData, index) => (
            <div key={index}>
              <p>Name: {userData.name}</p>
              <p>Phone Number: {userData.phoneNumber}</p>
              <p>Email: {userData.email}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No user records found.</p>
      )}
    </div>
  );
};

export default DisplayUserData;
