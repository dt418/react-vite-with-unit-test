import { Suspense, useEffect, useState } from 'react';
import { lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import DefaultLayout from './layout/DefaultLayout';

// Lazy load route components
const SignIn = lazy(() => import('./pages/Authentication/SignIn'));
const SignUp = lazy(() => import('./pages/Authentication/SignUp'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Chart = lazy(() => import('./pages/Chart'));
const Analytics = lazy(() => import('./pages/Dashboard/Analytics'));
const ECommerce = lazy(() => import('./pages/Dashboard/ECommerce'));
const FormElements = lazy(() => import('./pages/Form/FormElements'));
const FormLayout = lazy(() => import('./pages/Form/FormLayout'));
const FileManager = lazy(() => import('./pages/Pages/FileManager'));
const Settings = lazy(() => import('./pages/Pages/Settings'));
const Profile = lazy(() => import('./pages/Profile'));
const Tables = lazy(() => import('./pages/Tables'));
const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
const Avatars = lazy(() => import('./pages/UiElements/Avatars'));
const Buttons = lazy(() => import('./pages/UiElements/Buttons'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            index
            element={
              <>
                <PageTitle title='eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                <ECommerce />
              </>
            }
          />
          <Route path='dashboard'>
            <Route index element={<Navigate to='..' replace />} />
            <Route
              path='analytics'
              element={
                <>
                  <PageTitle title='Analytics Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                  <Analytics />
                </>
              }
            />
          </Route>
          <Route
            path='calendar'
            element={
              <>
                <PageTitle title='Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                <Calendar />
              </>
            }
          />
          <Route
            path='profile'
            element={
              <>
                <PageTitle title='Profile | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                <Profile />
              </>
            }
          />
          <Route path='forms'>
            <Route index element={<Navigate to='form-elements' replace />} />
            <Route
              path='form-elements'
              element={
                <>
                  <PageTitle title='Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                  <FormElements />
                </>
              }
            />
            <Route
              path='form-layout'
              element={
                <>
                  <PageTitle title='Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                  <FormLayout />
                </>
              }
            />
          </Route>
          <Route
            path='tables'
            element={
              <>
                <PageTitle title='Tables | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                <Tables />
              </>
            }
          />
          <Route path='pages'>
            <Route index element={<Navigate to='settings' replace />} />
            <Route
              path='settings'
              element={
                <>
                  <PageTitle title='Settings | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                  <Settings />
                </>
              }
            />
            <Route
              path='file-manager'
              element={
                <>
                  <PageTitle title='File Manager | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                  <FileManager />
                </>
              }
            />
          </Route>
          <Route
            path='chart'
            element={
              <>
                <PageTitle title='Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                <Chart />
              </>
            }
          />
          <Route path='ui'>
            <Route index element={<Navigate to='alerts' replace />} />
            <Route
              path='alerts'
              element={
                <>
                  <PageTitle title='Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                  <Alerts />
                </>
              }
            />
            <Route
              path='buttons'
              element={
                <>
                  <PageTitle title='Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                  <Buttons />
                </>
              }
            />
            <Route
              path='avatars'
              element={
                <>
                  <PageTitle title='Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                  <Avatars />
                </>
              }
            />
          </Route>
          <Route path='auth'>
            <Route index element={<Navigate to='signin' replace />} />
            <Route
              path='signin'
              element={
                <>
                  <PageTitle title='Signin | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                  <SignIn />
                </>
              }
            />
            <Route
              path='signup'
              element={
                <>
                  <PageTitle title='Signup | TailAdmin - Tailwind CSS Admin Dashboard Template' />
                  <SignUp />
                </>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </DefaultLayout>
  );
}

export default App;
