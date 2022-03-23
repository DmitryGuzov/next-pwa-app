import Navigation from '../components/navigation';

const MainLayout = ({ children }) => {
  return (
    <div className='container'>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
