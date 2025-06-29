const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Trendora. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
