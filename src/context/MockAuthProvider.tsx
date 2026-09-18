'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'admin' | 'manager' | 'provider' | 'client';
  avatar?: string;
  organizationId: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for development
const MOCK_USER: User = {
  id: 'mock-user-123',
  email: 'admin@crm.dev',
  fullName: 'Admin User',
  role: 'admin',
  avatar: '/images/user/user-01.png', // TailAdmin default avatar
  organizationId: 'org-mock-123',
};

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check on mount
    const storedUser = localStorage.getItem('mock_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Simple validation for mock
    if (email && password.length >= 6) {
      const loggedInUser = { ...MOCK_USER, email };
      setUser(loggedInUser);
      localStorage.setItem('mock_user', JSON.stringify(loggedInUser));
    } else {
      throw new Error('Invalid credentials');
    }
    setIsLoading(false);
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (email && password.length >= 6 && fullName) {
      const newUser: User = {
        ...MOCK_USER,
        email,
        fullName,
        role: 'client', // Default role for new users
      };
      setUser(newUser);
      localStorage.setItem('mock_user', JSON.stringify(newUser));
    } else {
      throw new Error('Invalid registration data');
    }
    setIsLoading(false);
  };

  const signOut = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser(null);
    localStorage.removeItem('mock_user');
    setIsLoading(false);
  };

  const updateUser = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('mock_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a MockAuthProvider');
  }
  return context;
}
