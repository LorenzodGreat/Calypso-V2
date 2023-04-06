import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Signup from "./views/Signup";
import Users from "./views/Users";
import UserForm from "./views/UserForm";
import Home from './pages/main/Home';
import Rate from './pages/main/Rate';
import { FeedProvider } from './context/FeedContext';
import Blog from './pages/main/Blog';
import BlogDetails from './pages/main/BlogDetails';
import About from './pages/main/About';
import Service from './pages/main/Service';
import Contact from './pages/main/Contact';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSettings from './pages/admin/AdminSettings';
import AdminFeed from './pages/admin/feed/AdminFeed';
import AdminFeedDetails from './pages/admin/feed/AdminFeedDetails';
import AdminFeedCreate from './pages/admin/feed/AdminFeedCreate';
import AdminFeedEdit from './pages/admin/feed/AdminFeedEdit';
import ForgotPassword from './pages/auth/ForgotPassword';
import Fix from './error/Fix';
import IntroVideo from "./pages/main/IntroVideo.jsx";
import Faq from "./pages/main/Faq.jsx";
import Claims from "./pages/main/Claims.jsx";
import Privacy from "./pages/main/Privacy.jsx";
import Terms from "./pages/main/Terms.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Navigate to='/admin-portal/dashboard' /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/users', element: <Users /> },
      { path: '/users/new', element: <UserForm key="userCreate" /> },
      { path: '/users/:id', element: <UserForm key="userUpdate" /> },

      { path: '/admin-portal/dashboard', element: <AdminDashboard /> },
      { path: '/admin-portal/settings', element: <AdminSettings /> },
      { path: '/admin-portal/forgot-password', element: <ForgotPassword /> },

      { path: '/admin-portal/feed/:id/view', element: <FeedProvider><AdminFeedDetails /></FeedProvider> },
      { path: '/admin-portal/feed/create', element: <FeedProvider ><AdminFeedCreate /></FeedProvider> },
      { path: '/admin-portal/feed/:id/edit', element: <FeedProvider ><AdminFeedEdit /></FeedProvider> },
      { path: '/admin-portal/feed', element: <FeedProvider><AdminFeed /></FeedProvider> },
      { path: '/admin-portal/shop', element: <Fix /> },

    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      { path: '/admin-portal', element: <Login /> },
    ]
  },
  { path: "/welcome", element: <IntroVideo /> },
  { path: "/home", element: <Home /> },
  { path: "/shop", element: <Fix /> },
  { path: '/rate', element: <Rate /> },
  { path: '/feeds', element: <FeedProvider><Blog /></FeedProvider> },
  { path: '/feeds/:id/view', element: <FeedProvider><BlogDetails /></FeedProvider> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Service /> },
  { path: '/contact', element: <Contact /> },
  { path: "/faq", element: <Faq /> },
  { path: '/claims', element: <Claims /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  // { path: '/password-reset/:token', element: <ResetPassword /> },
  { path: "*", element: <NotFound /> },
])

export default router;
