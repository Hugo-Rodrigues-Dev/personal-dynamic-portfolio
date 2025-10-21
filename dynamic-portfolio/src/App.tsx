import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { HomePage } from './routes/HomePage';
import { ProjectPage } from './routes/ProjectPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/projects/:slug',
    element: <ProjectPage />
  }
]);

const App = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
};

export default App;
