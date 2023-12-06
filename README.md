# mu-react-internship

# My React Internship Project

Welcome to the My React Internship Project! This project is a simple React application that includes a user form, a data grid, and a department list component.
It consist of 4 components
1.UserForm        ------> <Route path="/" element={<UserForm />} />
2.DepartmentList  ------><Route path="/second" element={<DepartmentList  />} />
3.Datagrid        ------>  <Route path="/datagrid" element={<DataGridPage />} />
4.DisplayUserData ------>  <Route path="/display" element={<DisplayUserData />}    
      

Components and features. Below is an overview of each component:

1.## UserForm

The `UserForm` component is responsible for collecting user information through a form. It includes input fields for:

- Name
- Phone number
- Email

Upon submitting the form, the user's data is stored in the local storage, and the user is redirected to the second page.

2.## DisplayUserData

The `DisplayUserData` component retrieves user data from local storage and displays it on the page. It includes the following user information:

- Name
- Phone number
- Email

If no user data is found, it displays a message stating "No user data found."

3.## DataGridPage

The `DataGridPage` component displays a table (DataGrid) with rows and columns. It showcases the usage of a data grid component.

4.## DepartmentList

The `DepartmentList` component is a complex component that displays a list of departments and their sub-departments. Users can expand or collapse sub-departments using icons. It adheres to the following requirements:

- Users can select departments or sub-departments.
- If a user selects a department, all sub-departments must get selected.
- If a user selects all sub-departments of a department, the parent department must get selected as well.

## ComponentsPage

The `ComponentsPage` is an example page to demonstrate the creation of a new page or component and setting up a route.

## Development

To run the project locally, follow these steps:

1. Start the development server: `npm run dev`


