import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4 border-top border-secondary mt-auto">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Todos los derechos reservados
      </p>

      <div className="d-flex justify-content-center gap-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-link"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-link"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="mailto:tucorreo@ejemplo.com"
          className="hover-link"
        >
          <FaEnvelope size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
