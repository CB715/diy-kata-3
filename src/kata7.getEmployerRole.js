const getEmployerRole = (employeeName, employees) => {
  const employeeRoles = employees.find(
    (element) => element.name === employeeName
  );
  return employeeRoles.role;
};

module.exports = getEmployerRole;
