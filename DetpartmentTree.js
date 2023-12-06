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
// components/DepartmentTree.tsx
import { useState } from 'react';
var DepartmentTree = function (_a) {
    var data = _a.data;
    var _b = useState([]), expandedDepartments = _b[0], setExpandedDepartments = _b[1];
    var handleToggleExpand = function (department) {
        setExpandedDepartments(function (prevExpanded) {
            return prevExpanded.includes(department)
                ? prevExpanded.filter(function (dep) { return dep !== department; })
                : __spreadArray(__spreadArray([], prevExpanded, true), [department], false);
        });
    };
    var renderDepartment = function (department) {
        var _a;
        return (_jsxs("div", { style: { marginLeft: "".concat(20 * (((_a = department.sub_departments) === null || _a === void 0 ? void 0 : _a.length) || 0), "px") }, children: [_jsx("span", { onClick: function () { return handleToggleExpand(department.department); }, children: expandedDepartments.includes(department.department) ? '[-]' : '[+]' }), department.department, department.sub_departments && (_jsx("div", { children: expandedDepartments.includes(department.department) &&
                        department.sub_departments.map(function (subDept) { return (_jsx("div", { style: { marginLeft: '20px' }, children: subDept }, subDept)); }) }))] }, department.department));
    };
    return _jsx("div", { children: data.map(function (dept) { return renderDepartment(dept); }) });
};
export default DepartmentTree;
