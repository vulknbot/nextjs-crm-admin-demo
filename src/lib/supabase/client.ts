import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper types for our schema
export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'manager' | 'provider' | 'client';
  avatar_url?: string;
  organization_id: string;
  created_at: string;
  updated_at: string;
}

export interface Company {
  id: string;
  organization_id: string;
  name: string;
  industry?: string;
  website?: string;
  phone?: string;
  address?: string;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  organization_id: string;
  company_id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  position?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  organization_id: string;
  contact_id: string;
  name: string;
  address?: string;
  budget: number;
  accumulated_expenses: number;
  net_cashflow: number;
  status: 'planning' | 'active' | 'on_hold' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface Opportunity {
  id: string;
  organization_id: string;
  contact_id: string;
  title: string;
  value: number;
  stage: 'lead' | 'contacted' | 'quoting' | 'negotiation' | 'closed_won' | 'closed_lost';
  probability: number;
  expected_close_date?: string;
  created_at: string;
  updated_at: string;
}

export interface Activity {
  id: string;
  organization_id: string;
  user_id: string;
  contact_id?: string;
  project_id?: string;
  type: 'call' | 'email' | 'visit' | 'meeting' | 'note';
  title: string;
  description?: string;
  scheduled_at?: string;
  completed_at?: string;
  created_at: string;
}

export interface Task {
  id: string;
  organization_id: string;
  project_id?: string;
  contact_id?: string;
  user_id: string;
  title: string;
  description?: string;
  status: 'pending' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  due_date?: string;
  completed_at?: string;
  created_at: string;
  updated_at: string;
}
