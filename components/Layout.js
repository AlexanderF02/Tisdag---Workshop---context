import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <main>{children}</main>
    </div>
  );
};

export default Layout;