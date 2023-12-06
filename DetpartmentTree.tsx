// components/DepartmentTree.tsx

import React, { useState } from 'react';

interface Department {
  department: string;
  sub_departments?: string[];
}

interface DepartmentTreeProps {
  data: Department[];
}

const DepartmentTree: React.FC<DepartmentTreeProps> = ({ data }) => {
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);

  const handleToggleExpand = (department: string) => {
    setExpandedDepartments((prevExpanded) =>
      prevExpanded.includes(department)
        ? prevExpanded.filter((dep) => dep !== department)
        : [...prevExpanded, department]
    );
  };

  const renderDepartment = (department: Department) => (
    <div key={department.department} style={{ marginLeft: `${20 * (department.sub_departments?.length || 0)}px` }}>
      <span onClick={() => handleToggleExpand(department.department)}>
        {expandedDepartments.includes(department.department) ? '[-]' : '[+]'}
      </span>
      {department.department}
      {department.sub_departments && (
        <div>
          {expandedDepartments.includes(department.department) &&
            department.sub_departments.map((subDept) => (
              <div key={subDept} style={{ marginLeft: '20px' }}>
                {subDept}
              </div>
            ))}
        </div>
      )}
    </div>
  );

  return <div>{data.map((dept) => renderDepartment(dept))}</div>;
};

export default DepartmentTree;
