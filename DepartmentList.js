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
// components/DepartmentList.tsx
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
var hardcodedUserData = [
    {
        department: "customer_service",
        sub_departments: ["support", "customer_success"],
    },
    {
        department: "design",
        sub_departments: ["graphic_design", "product_design", "web_design"],
    },
];
var DepartmentList = function (_a) {
    var _b = _a.data, data = _b === void 0 ? hardcodedUserData : _b;
    var _c = useState([]), selectedDepartments = _c[0], setSelectedDepartments = _c[1];
    var _d = useState([]), expandedDepartments = _d[0], setExpandedDepartments = _d[1];
    var handleCheckboxChange = function (item, isSubDepartment) {
        setSelectedDepartments(function (prevSelected) {
            var _a, _b, _c, _d, _e;
            if (!isSubDepartment) {
                var subDepartments_1 = ((_a = data.find(function (user) { return user.department === item; })) === null || _a === void 0 ? void 0 : _a.sub_departments) || [];
                var allSubDepartmentsSelected = subDepartments_1.every(function (subDep) {
                    return prevSelected.includes(subDep);
                });
                return allSubDepartmentsSelected
                    ? prevSelected.filter(function (dep) { return !subDepartments_1.includes(dep); })
                    : __spreadArray(__spreadArray(__spreadArray([], prevSelected, true), [item], false), subDepartments_1, true);
            }
            else {
                var parentDepartment_1 = (_b = data.find(function (user) {
                    return user.sub_departments.includes(item);
                })) === null || _b === void 0 ? void 0 : _b.department;
                var allSubDepartmentsSelected = parentDepartment_1 &&
                    ((_c = data.find(function (user) { return user.department === parentDepartment_1; })) === null || _c === void 0 ? void 0 : _c.sub_departments) &&
                    ((_d = data
                        .find(function (user) { return user.department === parentDepartment_1; })) === null || _d === void 0 ? void 0 : _d.sub_departments.every(function (subDep) { return prevSelected.includes(subDep); }));
                if (allSubDepartmentsSelected) {
                    return prevSelected.filter(function (dep) { return dep !== item && dep !== parentDepartment_1; });
                }
                else {
                    var updatedSelected_1 = prevSelected.includes(item)
                        ? prevSelected.filter(function (dep) { return dep !== item && dep !== parentDepartment_1; })
                        : __spreadArray(__spreadArray([], prevSelected, true), [item], false);
                    var allSubSelected = (_e = data
                        .find(function (user) { return user.department === parentDepartment_1; })) === null || _e === void 0 ? void 0 : _e.sub_departments.every(function (subDep) { return updatedSelected_1.includes(subDep); });
                    return allSubSelected
                        ? __spreadArray(__spreadArray([], updatedSelected_1, true), [parentDepartment_1], false).filter(Boolean)
                        : updatedSelected_1;
                }
            }
        });
    };
    var handleToggleExpand = function (department) {
        setExpandedDepartments(function (prevExpanded) {
            return prevExpanded.includes(department)
                ? prevExpanded.filter(function (dep) { return dep !== department; })
                : __spreadArray(__spreadArray([], prevExpanded, true), [department], false);
        });
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "User Information and Department List:" }), data.map(function (user, index) { return (_jsxs("div", { children: [_jsx("div", { children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: selectedDepartments.includes(user.department), onChange: function () { return handleCheckboxChange(user.department, false); } }), expandedDepartments.includes(user.department) ? (_jsx(ExpandMoreIcon, { onClick: function () { return handleToggleExpand(user.department); } })) : (_jsx(ChevronRightIcon, { onClick: function () { return handleToggleExpand(user.department); } })), user.department] }) }), expandedDepartments.includes(user.department) && (_jsx("ul", { children: user.sub_departments.map(function (subDep, subIndex) { return (_jsx("li", { children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: selectedDepartments.includes(subDep), onChange: function () { return handleCheckboxChange(subDep, true); } }), subDep] }) }, subIndex)); }) }))] }, index)); })] }));
};
export default DepartmentList;
