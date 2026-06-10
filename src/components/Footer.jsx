function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()}
      {" "}
      MovieHub
      <p>Built with react by megersa</p>
    </footer>
  );
}

export default Footer;