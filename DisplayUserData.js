import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/DisplayUserData.tsx
import { useEffect, useState } from "react";
var DisplayUserData = function () {
    var _a = useState([]), userRecords = _a[0], setUserRecords = _a[1];
    useEffect(function () {
        // Retrieve user records from localStorage
        var storedRecords = localStorage.getItem("userRecords");
        if (storedRecords) {
            setUserRecords(JSON.parse(storedRecords));
        }
    }, []);
    return (_jsxs("div", { style: { textAlign: "center", padding: "20px" }, children: [_jsx("h2", { children: "All User Records" }), userRecords.length > 0 ? (_jsx("div", { children: userRecords.map(function (userData, index) { return (_jsxs("div", { children: [_jsxs("p", { children: ["Name: ", userData.name] }), _jsxs("p", { children: ["Phone Number: ", userData.phoneNumber] }), _jsxs("p", { children: ["Email: ", userData.email] }), _jsx("hr", {})] }, index)); }) })) : (_jsx("p", { children: "No user records found." }))] }));
};
export default DisplayUserData;
