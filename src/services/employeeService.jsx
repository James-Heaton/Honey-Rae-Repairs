export const getAllEmployees = () => {
  return fetch("http://localhost:8088/employees?_expand=user").then((response) => response.json())
}

export const getEmployeeByUserId = ( userId ) => {
  return fetch(`http://localhost:8088/employees?userId=${userId}&_expand=user&_embed=employeeTickets`).then((response) => response.json())
}