var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/UserForm.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
var UserForm = function () {
    var _a = useState({
        name: "",
        phoneNumber: "",
        email: "",
    }), formData = _a[0], setFormData = _a[1];
    var navigate = useNavigate();
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prevData) {
            var _a;
            return (__assign(__assign({}, prevData), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function () {
        // Retrieve existing records from local storage
        var existingRecords = localStorage.getItem("userRecords");
        var allRecords = existingRecords ? JSON.parse(existingRecords) : [];
        // Append the new record
        var updatedRecords = __spreadArray(__spreadArray([], allRecords, true), [formData], false);
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
    return (_jsxs(Box, { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "10vh", children: [_jsx("h2", { children: "User Form" }), _jsxs(Box, { component: "form", sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    maxWidth: "300px",
                    margin: "auto",
                }, children: [_jsx(TextField, { label: "Name", variant: "outlined", name: "name", value: formData.name, onChange: handleChange }), _jsx(TextField, { label: "Phone Number", variant: "outlined", name: "phoneNumber", value: formData.phoneNumber, onChange: handleChange }), _jsx(TextField, { label: "Email", variant: "outlined", name: "email", value: formData.email, onChange: handleChange }), _jsx(Button, { variant: "contained", onClick: handleSubmit, children: "Submit" })] })] }));
};
export default UserForm;
