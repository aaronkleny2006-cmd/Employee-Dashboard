
import { useState } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: '',
  });

  const [submittedEmployee, setSubmittedEmployee] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.designation.trim() ||
      !formData.location.trim() ||
      formData.salary === '' ||
      Number(formData.salary) < 0
    ) {
      alert('Please enter valid details in all fields.');
      return;
    }

    setSubmittedEmployee(formData);
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-7 col-lg-6">
        <h2 className="mb-4">Employee Form</h2>

        <form onSubmit={handleSubmit} className="card card-body shadow-sm">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="designation" className="form-label">
              Designation
            </label>
            <input
              id="designation"
              name="designation"
              className="form-control"
              value={formData.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              id="location"
              name="location"
              className="form-control"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="salary" className="form-label">
              Salary
            </label>
            <input
              id="salary"
              name="salary"
              type="number"
              min="0"
              className="form-control"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {submittedEmployee && (
          <div className="alert alert-success mt-4">
            <h5>Employee details validated</h5>
            <p className="mb-1">Name: {submittedEmployee.name}</p>
            <p className="mb-1">
              Designation: {submittedEmployee.designation}
            </p>
            <p className="mb-1">Location: {submittedEmployee.location}</p>
            <p className="mb-0">Salary: {submittedEmployee.salary}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeForm;
