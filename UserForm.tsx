// components/UserForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface UserData {
  name: string;
  phoneNumber: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Retrieve existing records from local storage
    const existingRecords = localStorage.getItem("userRecords");
    const allRecords = existingRecords ? JSON.parse(existingRecords) : [];

    // Append the new record
    const updatedRecords = [...allRecords, formData];

    // Update local storage with the updated records
    localStorage.setItem("userRecords", JSON.stringify(updatedRecords));

    // Clear the form data
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
    });

    // Navigate to the DisplayUserData page
    navigate("/second");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="10vh"
    >
      <h2>User Form</h2>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "300px",
          margin: "auto",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default UserForm;
