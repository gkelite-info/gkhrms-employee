// context/AuthContext.tsx
'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';
import { origin } from '@/api-requests/config';

interface Employee {
  employeeId: string;
  fullname: string;
  email: string;
  role: string;
}

interface AuthContextType {
  employee: Employee | null;
  loading: boolean;
  token: string | null;
}

const AuthContext = createContext<AuthContextType>({
  employee: null,
  loading: true,
  token: null
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) {
      setLoading(false);
      return;
    }
    setToken(savedToken);

    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${origin}/api/v1/employee/profile`, {
          headers: { Authorization: `Bearer ${savedToken}` }
        });
        setEmployee(res.data.employee);
      } catch (err) {
        console.error('Failed to fetch employee profile', err);
        setEmployee(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ employee, loading, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
