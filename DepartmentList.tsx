// components/DepartmentList.tsx
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const hardcodedUserData = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

interface Department {
  department: string;
  sub_departments: string[];
}

interface DepartmentListProps {
  data?: Department[]; // Make data optional
}

const DepartmentList: React.FC<DepartmentListProps> = ({ data = hardcodedUserData }) => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);

  const handleCheckboxChange = (item: string, isSubDepartment: boolean) => {
    setSelectedDepartments((prevSelected) => {
      if (!isSubDepartment) {
        const subDepartments =
          data.find((user) => user.department === item)?.sub_departments || [];
        const allSubDepartmentsSelected = subDepartments.every((subDep) =>
          prevSelected.includes(subDep)
        );

        return allSubDepartmentsSelected
          ? prevSelected.filter((dep) => !subDepartments.includes(dep))
          : [...prevSelected, item, ...subDepartments];
      } else {
        const parentDepartment = data.find((user) =>
          user.sub_departments.includes(item)
        )?.department;

        const allSubDepartmentsSelected =
          parentDepartment &&
          data.find((user) => user.department === parentDepartment)?.sub_departments &&
          data
            .find((user) => user.department === parentDepartment)
            ?.sub_departments.every((subDep) => prevSelected.includes(subDep));

        if (allSubDepartmentsSelected) {
          return prevSelected.filter(
            (dep) => dep !== item && dep !== parentDepartment
          );
        } else {
          const updatedSelected = prevSelected.includes(item)
            ? prevSelected.filter(
                (dep) => dep !== item && dep !== parentDepartment
              )
            : [...prevSelected, item];

          const allSubSelected = data
            .find((user) => user.department === parentDepartment)
            ?.sub_departments.every((subDep) => updatedSelected.includes(subDep));

          return allSubSelected
            ? [...updatedSelected, parentDepartment!].filter(Boolean)
            : updatedSelected;
        }
      }
    });
  };

  const handleToggleExpand = (department: string) => {
    setExpandedDepartments((prevExpanded) =>
      prevExpanded.includes(department)
        ? prevExpanded.filter((dep) => dep !== department)
        : [...prevExpanded, department]
    );
  };

  return (
    <div>
      <h2>User Information and Department List:</h2>
      {data.map((user, index) => (
        <div key={index}>
          <div>
            <label>
              <input
                type="checkbox"
                checked={selectedDepartments.includes(user.department)}
                onChange={() => handleCheckboxChange(user.department, false)}
              />
              {expandedDepartments.includes(user.department) ? (
                <ExpandMoreIcon onClick={() => handleToggleExpand(user.department)} />
              ) : (
                <ChevronRightIcon onClick={() => handleToggleExpand(user.department)} />
              )}
              {user.department}
            </label>
          </div>
          {expandedDepartments.includes(user.department) && (
            <ul>
              {user.sub_departments.map((subDep, subIndex) => (
                <li key={subIndex}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedDepartments.includes(subDep)}
                      onChange={() => handleCheckboxChange(subDep, true)}
                    />
                    {subDep}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;
