'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { origin } from '@/api-requests/config';

interface Props {
  employeeId: string;
}

interface EmployeeProfile {
  employeeId: number;
  fullname: string;
  email: string;
  role: string;
  department: string;
  designation: string;
  location: string;
  dateOfJoining: string;
  photoURL: string;
  phone: string;
  address: string;
  dob: string;
  bloodGroup: string;
  emergencyContact: string;
}


export default function EmployeeProfile({ employeeId }: Props) {
  const [employee, setEmployee] = useState<EmployeeProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`${origin}/api/v1/employee/${employeeId}`);
        setEmployee(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [employeeId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!employee) return <p>No employee found</p>;

  return (
    <div className="p-4 border rounded shadow bg-white max-w-md">
        
      <img src={employee.photoURL} alt={employee.photoURL} className="w-32 h-32 rounded-full mb-4 text-black bg-red-400" />
      <h2 className="text-xl font-bold text-black">{employee.fullname}</h2>
      <p className='text-black'>Email: {employee.email}</p>
      <p className='text-black'>Role: {employee.role}</p>
      <p className='text-black'>Department: {employee.department}</p>
      <p className='text-black'>Designation: {employee.designation}</p>
      <p className='text-black'>Location: {employee.location}</p>
      <p className='text-black'>Date of Joining: {employee.dateOfJoining}</p>
      <p className='text-black'>Phone: {employee.phone}</p>
      <p className='text-black'>Address: {employee.address}</p>
      <p className='text-black'>DOB: {employee.dob}</p>
      <p className='text-black'>Blood Group: {employee.bloodGroup}</p>
      <p className='text-black'>Emergency Contact: {employee.emergencyContact}</p>
    </div>
  );
}
