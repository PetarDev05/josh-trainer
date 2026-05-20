const Footer = () => {
  return (
    <footer className="w-full p-5 flex flex-col items-center justify-center text-sm text-(--text) text-center gap-10 pt-25">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-30 justify-center">
        <div className="flex flex-col items-center gap-5 text-(--text)">
          <p className="">Programs</p>
          <p className="">Fat Loss</p>
          <p className="">Custom Plans</p>
        </div>
        <div className="flex flex-col items-center gap-5 text-(--text)">
          <p className="">Company</p>
          <p className="">Blog</p>
          <p className="">Careers</p>
        </div>
        <div className="flex flex-col items-center gap-5 text-(--text)">
          <p className="">Contact</p>
          <p className="">Support</p>
          <p className="">Consultation</p>
        </div>
      </div>
      <p>&copy; All Rights Reserved. Josh 2026</p>
    </footer>
  );
};

export default Footer;
