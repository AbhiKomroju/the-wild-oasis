# 🏨 The Wild Oasis - Hotel Management System

A production-grade hotel management dashboard showcasing advanced React patterns, scalable architecture, and modern development practices.

[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![React Query](https://img.shields.io/badge/React%20Query-4.41-red.svg)](https://tanstack.com/query)
[![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1-pink.svg)](https://styled-components.com/)
[![Supabase](https://img.shields.io/badge/Supabase-2.75-green.svg)](https://supabase.com/)

---

## 🎯 Overview

Enterprise-grade hotel management system demonstrating modern React architecture and advanced design patterns. Manages complex hotel operations including cabin inventory, booking workflows, check-in/check-out processes, and real-time analytics with optimized performance.

---

## 🛠️ Tech Stack & Rationale

| Technology            | Purpose       | Why This Choice                                              |
| --------------------- | ------------- | ------------------------------------------------------------ |
| **React 18**          | UI Library    | Concurrent features, hooks API, industry standard            |
| **React Query**       | Server State  | Automatic caching, background refetching, optimistic updates |
| **React Router v6**   | Routing       | Nested routes, layout routes, modern hooks API               |
| **Styled Components** | Styling       | Component-scoped styles, dynamic theming, maintainable CSS   |
| **React Hook Form**   | Forms         | Performance-focused, minimal re-renders, built-in validation |
| **Supabase**          | Backend       | PostgreSQL, authentication, real-time, Row Level Security    |
| **Recharts**          | Visualization | Responsive charts, composable API, React-native              |
| **Vite**              | Build Tool    | Fast HMR, optimized builds, modern ES modules                |

---

## 🏗️ Architecture & Design Patterns

### 1. **Feature-Based Architecture**

Organized by business domain for scalability and clear separation of concerns.

```
src/
├── features/          # Business domains
│   ├── authentication/
│   ├── bookings/
│   ├── cabins/
│   ├── dashboard/
│   └── settings/
├── ui/               # Reusable components
├── services/         # API layer
├── hooks/            # Custom hooks
└── utils/            # Helpers
```

**Benefits:** Scalable, clear boundaries, easy navigation, team-friendly

### 2. **Compound Component Pattern**

Flexible, declarative API with implicit state sharing via Context.

```jsx
<Modal>
  <Modal.Open opens="cabin-form">
    <Button>Add Cabin</Button>
  </Modal.Open>
  <Modal.Window name="cabin-form">
    <CreateCabinForm />
  </Modal.Window>
</Modal>
```

**Implemented in:** Modal, Menus components  
**Benefits:** No prop drilling, flexible composition, encapsulated logic

### 3. **Custom Hooks Pattern**

20+ custom hooks for reusable business logic and UI behaviors.

**Categories:**

- **Data Hooks** - React Query wrappers (`useBookings`, `useCabins`)
- **Mutation Hooks** - CRUD operations (`useCreateCabin`, `useDeleteBooking`)
- **Utility Hooks** - Behaviors (`useOutsideClick`, `useLocalStorageState`)

### 4. **Separation of Concerns**

Three-layer architecture ensures clean, maintainable code.

```
Component → Custom Hook → Service → Supabase
(UI Logic)   (Business)   (API)      (Data)
```

### 5. **State Management Strategy**

- **Server State**: React Query (bookings, cabins, users)
- **UI State**: Local useState (modals, forms, filters)
- **Global State**: Context API (theme preferences)

**Philosophy:** No Redux needed—modern React + React Query handles all state elegantly.

---

## ✨ Key Features

### 🔐 Authentication & Authorization

- Secure Supabase Auth with JWT tokens
- Protected routes with automatic redirects
- Session management with token refresh
- Row Level Security policies

### 🏨 Cabin Management

- Full CRUD operations
- Image upload to Supabase Storage
- Duplicate functionality
- Real-time updates

### 📅 Booking System

- Advanced filtering & sorting
- Server-side pagination
- Check-in/check-out workflows
- Optional breakfast add-on
- Payment confirmation

### 📊 Analytics Dashboard

- Sales visualization with Recharts
- Booking statistics by duration
- Today's activity feed
- Date range filtering (7/30/90 days)
- Revenue & occupancy tracking

### 🎨 Theme System

- Dark/Light mode toggle
- Persistent preferences (localStorage)
- System preference detection
- CSS custom properties

---

## 🎓 Technical Highlights

### Performance Optimizations

- ✅ React Query caching with stale-while-revalidate strategy
- ✅ Server-side pagination for large datasets
- ✅ Optimistic UI updates for instant feedback
- ✅ Lazy state initialization
- ✅ Image optimization via Supabase CDN

### Advanced React Features

- ✅ Compound components for flexible APIs
- ✅ Custom hooks for logic reuse
- ✅ Error boundaries for graceful failures
- ✅ Portal rendering for modals
- ✅ Protected route HOC pattern

### Code Quality

- ✅ Feature-based architecture for scalability
- ✅ Separation of concerns (3-layer architecture)
- ✅ DRY principle throughout
- ✅ Consistent naming conventions
- ✅ ESLint enforced standards
- ✅ Clean, readable code

### Form Handling

```javascript
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

<Input
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Invalid email address",
    },
  })}
/>;
```

### Error Handling

Multi-level approach for robust error management:

- **Global**: Error Boundary components
- **Feature**: React Query error states
- **API**: Try-catch with descriptive messages

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Supabase account

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/the-wild-oasis.git
cd the-wild-oasis

# Install dependencies
npm install

# Update Supabase credentials in src/services/supabase.js

# Run development server
npm run dev

# Build for production
npm run build
npm run preview
```

### Demo Data

Use the data uploader component (in sidebar) to populate sample data.

---

## 📚 Skills Demonstrated

**React Expertise:**

- Modern React 18 (Hooks, Context, Portals, Error Boundaries)
- Advanced patterns (Compound Components, Custom Hooks, HOCs)
- Performance optimization techniques

**State Management:**

- React Query for server state
- Context API for global state
- Local state management strategies

**Architecture:**

- Feature-based organization
- Separation of concerns
- Scalable folder structure
- Clean code principles

**Full-Stack Integration:**

- Supabase (PostgreSQL, Auth, Storage, Real-time)
- RESTful API design
- Authentication & authorization
- File uploads

**Modern Tooling:**

- Vite build tool
- ESLint code quality
- React Router v6
- Styled Components

---

## 🔮 Future Enhancements

- TypeScript migration
- Unit & integration tests (React Testing Library)
- Real-time booking updates via Supabase subscriptions
- Email notifications
- PDF export for reports
- Calendar view for bookings

---

## 👨‍💻 Author

**[Abhishek Komroju]**

- GitHub: [@AbhiKomroju](https://github.com/AbhiKomroju)
- LinkedIn: [Abhi komroju](https://www.linkedin.com/in/abhi-shek-0206/)
- Email: abhikomroju@gmail.com

---

**⭐ If you find this project valuable, please consider giving it a star!**
