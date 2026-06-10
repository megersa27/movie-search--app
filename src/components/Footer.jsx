import { APP_NAME } from "../constants";

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {APP_NAME}
      <p>Built with React by Megersa</p>
    </footer>
  );
}

export default Footer;