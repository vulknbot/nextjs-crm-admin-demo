# CRM Project Scope Document

## 📋 Overview
**Project Name:** Custom CRM Platform  
**Base:** TailAdmin Pro (Next.js 16, React 19, Tailwind CSS v4)  
**Stack:** Clerk (Auth), Supabase (DB), Vercel (Deployment), Google APIs (Calendar, Mail, Drive)  
**Status:** Phase 0 - Planning Complete

---

## 🎯 Objectives

### Primary Goals
1. Build a comprehensive CRM for client control, sales pipeline, and project management
2. Leverage existing TailAdmin Pro UI components while implementing custom business logic
3. Enable multi-role access (Admin, Manager, Provider, Client) with granular permissions
4. Integrate Google Workspace services for calendar sync, email tracking, and file management
5. Create a scalable foundation for future AI assistant and customer support features

### Success Criteria
- ✅ All MVP features functional with real data from Supabase
- ✅ Role-based access control working across all modules
- ✅ Google Calendar bidirectional sync operational
- ✅ Drag-and-drop Kanban board for sales pipeline
- ✅ Responsive design matching TailAdmin Pro quality standards
- ✅ < 3s page load times on production (Vercel)

---

## 👥 User Roles & Permissions

| Role | Permissions | Access Level |
|------|-------------|--------------|
| **Admin** | Full system access, user management, billing, settings, all CRUD operations | Global |
| **Manager** | View all projects/clients, create/edit assigned projects, manage tasks, view reports | Organization-wide (read), Assigned items (write) |
| **Provider** | View assigned projects, update task status, log activities, upload documents | Assigned items only |
| **Client** | View own projects, track payments, view milestones, communicate via activity log | Own data (read-only) |

---

## 🚀 Phased Implementation

### **Phase 1: Foundation & Authentication (MVP Core)**
**Priority:** Critical | **Estimated Duration:** 2 weeks

#### Features
- [ ] Clerk authentication setup with role assignment
- [ ] Supabase database schema design and migration
- [ ] Basic layout adaptation from TailAdmin Pro
- [ ] Role-based middleware protection
- [ ] User profile page (editable)
- [ ] Settings shell (placeholder panels)

#### Deliverables
- Working auth flow (signup, login, logout, password reset)
- Database tables: `users`, `roles`, `organizations`
- Protected routes structure
- Profile editing functionality

#### Acceptance Criteria
- Users can register/login with email or social providers
- Roles are assigned during onboarding (Admin by default for first user)
- Unauthenticated users redirected to login
- Each role sees appropriate navigation items

---

### **Phase 2: Contact & Company Management**
**Priority:** High | **Estimated Duration:** 2-3 weeks

#### Features
- [ ] Contacts list table (pagination, search, filters, sorting)
- [ ] Companies list table (same advanced features)
- [ ] Contact detail view (info, activities, related projects, payment history)
- [ ] Company detail view (info, contacts, projects, financial summary)
- [ ] Create/Edit/Delete modals for contacts and companies
- [ ] Bulk actions (delete, assign owner, export)

#### Deliverables
- Reusable data table component with server-side pagination
- Detail page templates for contacts and companies
- Form validation and error handling
- Supabase RLS policies for role-based data access

#### Acceptance Criteria
- Tables load <1s with 1000+ records (server-side pagination)
- Search returns results in <500ms
- Filters persist in URL state
- Detail pages show all related data in organized tabs

---

### **Phase 3: Project Management**
**Priority:** High | **Estimated Duration:** 3 weeks

#### Features
- [ ] Projects list/table view (Project, Address, Budget, Expenses, Net Cashflow)
- [ ] Project detail page (overview, tasks, activities, files, financials)
- [ ] Create/Edit project forms
- [ ] Task management per project (Pending, Done, Cancelled)
- [ ] Task attributes: priority, assignee, due date, status
- [ ] Expense tracking per project
- [ ] Cashflow calculation (Budget - Expenses = Net)

#### Deliverables
- Project CRUD operations
- Task sub-component with status toggles
- Financial summary cards
- Related entities linking (contacts, companies)

#### Acceptance Criteria
- Cashflow updates automatically when expenses change
- Tasks can be created/edited without page reload
- Filters allow viewing projects by status, client, manager
- Export to CSV/PDF available

---

### **Phase 4: Sales Pipeline (Kanban)**
**Priority:** High | **Estimated Duration:** 2-3 weeks

#### Features
- [ ] Kanban board with drag-and-drop (dnd-kit or @hello-pangea/dnd)
- [ ] Pipeline stages: Lead → Contacted → Quoting → Negotiation → Closed
- [ ] Opportunity cards showing key info (value, contact, age)
- [ ] List/table view alternative
- [ ] Create/edit opportunities
- [ ] Stage transition logging
- [ ] Conversion rate metrics

#### Deliverables
- Interactive Kanban component
- Opportunity management CRUD
- Pipeline analytics dashboard widgets
- Stage customization (Admin only)

#### Acceptance Criteria
- Drag-and-drop works smoothly on desktop and mobile
- Stage changes persist immediately to Supabase
- Pipeline value sums update in real-time
- Can filter by owner, date range, stage

---

### **Phase 5: CRM Dashboard**
**Priority:** Medium | **Estimated Duration:** 2 weeks

#### Features
- [ ] Revenue summary cards (MTD, QTD, YTD)
- [ ] Task calendar (integrated with Google Calendar)
- [ ] Recent activity feed (calls, emails, meetings, notes)
- [ ] Conversion rate charts (pipeline analytics)
- [ ] Sales performance graphs (by rep, by stage, by time)
- [ ] Pending tasks widget
- [ ] Quick action buttons (new contact, new project, new opportunity)

#### Deliverables
- Dashboard layout using TailAdmin grid system
- Chart components (Recharts or Chart.js)
- Google Calendar API integration
- Activity stream component

#### Acceptance Criteria
- Dashboard loads in <2s
- Charts are interactive (tooltips, legends, zoom)
- Google Calendar shows personal + team events
- Activity feed updates in real-time (optimistic UI)

---

### **Phase 6: Activity Logging System**
**Priority:** Medium | **Estimated Duration:** 1-2 weeks

#### Features
- [ ] Log activities: Calls, Emails, Visits, Meetings, Notes
- [ ] Associate activities with contacts, companies, projects
- [ ] Activity timeline view on detail pages
- [ ] Rich text editor for notes
- [ ] File attachments (via Google Drive integration)
- [ ] Activity reminders and follow-ups

#### Deliverables
- Activity form modal
- Timeline component
- Integration with Google Mail for email tracking
- Reminder notifications

#### Acceptance Criteria
- Activities can be logged in <30s
- Attachments upload to Google Drive and link to record
- Timeline shows chronological order with grouping by date
- Can filter activities by type, date range, owner

---

### **Phase 7: Settings & Configuration**
**Priority:** Medium | **Estimated Duration:** 1-2 weeks

#### Features
- [ ] User profile editing (avatar, name, email, phone, timezone)
- [ ] Account settings (toggle dashboard panels, notifications)
- [ ] Visual system design configurator (theme colors, layout density)
- [ ] Billing page (subscription status, invoices, upgrade/downgrade)
- [ ] Team members management (invite, remove, change roles)
- [ ] Integrations page (Google, Slack, etc. - connection status)

#### Deliverables
- Settings navigation structure
- Form components for each section
- Stripe integration for billing (if applicable)
- OAuth flow for Google integration

#### Acceptance Criteria
- Users can customize their dashboard experience
- Admins can invite/remove team members
- Billing shows current plan and next billing date
- Google integration shows connected services (Calendar, Mail, Drive)

---

### **Phase 8: Google Integrations**
**Priority:** Medium | **Estimated Duration:** 2-3 weeks

#### Features
- [ ] Google OAuth setup (Calendar, Gmail, Drive scopes)
- [ ] Calendar sync (bidirectional: CRM ↔ Google Calendar)
- [ ] Email tracking (log sent/received emails to activities)
- [ ] Drive integration (attach files from Drive, upload to Drive)
- [ ] Meeting scheduling from CRM (creates Google Meet links)

#### Deliverables
- Google API service layer
- Sync job runners (Vercel Cron or Supabase Edge Functions)
- UI for managing connected accounts
- Conflict resolution logic

#### Acceptance Criteria
- Calendar events created in CRM appear in Google Calendar within 1 min
- Emails sent from tracked accounts log to associated contact/project
- Files can be attached from Drive without downloading
- Users can disconnect/reconnect Google account

---

### **Phase 9: Advanced Features & Optimization**
**Priority:** Low (Post-MVP) | **Estimated Duration:** Ongoing

#### Future Features
- [ ] AI Assistant (chatbot for data queries, automated insights)
- [ ] Customer support ticketing system
- [ ] Advanced reporting (custom report builder)
- [ ] Mobile app (React Native or PWA)
- [ ] Webhooks for third-party integrations
- [ ] Automated workflows (if-this-then-that rules)
- [ ] Email campaigns / newsletters
- [ ] Document generation (proposals, contracts)

---

## 🗄️ Database Schema Overview

### Core Tables
- `profiles` (extends Clerk user metadata)
- `organizations`
- `organization_members` (user_id, org_id, role)
- `contacts`
- `companies`
- `projects`
- `tasks`
- `opportunities` (sales pipeline)
- `pipeline_stages`
- `activities`
- `expenses`
- `calendar_events` (synced from Google)
- `integrations` (OAuth tokens)
- `settings` (user/org preferences)

### Key Relationships
- Organization has many Members (Users)
- Company has many Contacts
- Project belongs to Company + has many Tasks + has many Activities
- Opportunity belongs to Contact/Company + has one Pipeline Stage
- Activity belongs to User + polymorphic relation (Contact/Company/Project)

---

## 🔧 Technical Specifications

### Authentication
- **Provider:** Clerk
- **Features:** Email/password, Google OAuth, Magic Links, MFA (optional)
- **Session Management:** JWT with rolling sessions
- **Middleware:** Next.js middleware for route protection

### Database
- **Provider:** Supabase (PostgreSQL)
- **Features:** Row Level Security (RLS), Real-time subscriptions, Edge Functions
- **ORM:** Supabase JS client or Drizzle ORM
- **Migrations:** Supabase CLI or manual SQL

### Storage
- **Files:** Supabase Storage or Google Drive (via integration)
- **Avatars:** Clerk-hosted or Supabase Storage

### Deployment
- **Platform:** Vercel
- **CI/CD:** GitHub Actions → Vercel auto-deploy
- **Environment:** Preview branches for PRs, Production on main

### State Management
- **Server State:** TanStack Query (React Query) for Supabase data
- **Client State:** Zustand or Context API for UI state
- **Form State:** React Hook Form + Zod validation

### UI Components
- **Base:** TailAdmin Pro components
- **Charts:** Recharts
- **Tables:** TanStack Table
- **Drag & Drop:** dnd-kit
- **Calendar:** FullCalendar or react-big-calendar
- **Rich Text:** TipTap or Quill

---

## 📊 Metrics & Analytics

### Performance Targets
- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3.5s
- Lighthouse Score: > 90 (Performance, Accessibility, SEO, Best Practices)
- API Response Time (p95): < 500ms

### Business Metrics (Dashboard)
- Monthly Recurring Revenue (MRR)
- Customer Acquisition Cost (CAC)
- Lifetime Value (LTV)
- Pipeline Velocity
- Win Rate (%)
- Average Deal Size
- Task Completion Rate

---

## ⚠️ Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Google API quota limits | High | Implement caching, batch requests, monitor usage |
| Supabase RLS complexity | Medium | Write comprehensive tests, document policies |
| Drag-and-drop mobile UX | Medium | Test early on devices, provide list view fallback |
| Clerk + Supabase user sync | Medium | Use Clerk webhooks to sync to Supabase profiles |
| Real-time sync conflicts | Low | Use optimistic UI + conflict resolution on save |

---

## 📅 Timeline Summary

| Phase | Duration | Cumulative |
|-------|----------|------------|
| Phase 1: Foundation | 2 weeks | Week 2 |
| Phase 2: Contacts | 2-3 weeks | Week 5 |
| Phase 3: Projects | 3 weeks | Week 8 |
| Phase 4: Pipeline | 2-3 weeks | Week 11 |
| Phase 5: Dashboard | 2 weeks | Week 13 |
| Phase 6: Activities | 1-2 weeks | Week 15 |
| Phase 7: Settings | 1-2 weeks | Week 17 |
| Phase 8: Google | 2-3 weeks | Week 20 |
| **Total MVP** | **~20 weeks** | **~5 months** |

*Note: Timeline assumes 1-2 developers. Can be accelerated with parallel workstreams.*

---

## ✅ Definition of Done (per Feature)

- [ ] Code implemented following `/architect` spec
- [ ] Unit tests written (if applicable)
- [ ] Integration tests passing
- [ ] Verified against acceptance criteria (`/check verify`)
- [ ] Code reviewed (`/check review`)
- [ ] Documentation updated (`/sync`)
- [ ] Deployed to preview environment
- [ ] Tested on staging with real data
- [ ] Approved by product owner

---

## 🔄 Next Steps

1. **Execute `/architect`** for Phase 1 features (Authentication & Database Schema)
2. Define detailed technical specs for Clerk + Supabase integration
3. Design database migration scripts
4. Plan middleware and route protection strategy
5. Begin development with `/develop` after architecture approval

---

*Last Updated: 2025*  
*Version: 1.0*  
*Status: Approved for Phase 1 Development*
