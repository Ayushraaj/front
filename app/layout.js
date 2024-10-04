import Navbar from './Navbar'; // Import your Navbar component

const Layout = ({ children }) => {
  const router = useRouter();

  // Check if the current route is DynamicPage
  const isDynamicPage = router.pathname === '/dynamic'; // Adjust the path as necessary

  return (
    <div>
      {!isDynamicPage && <Navbar />} {/* Render Navbar only if not on DynamicPage */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
