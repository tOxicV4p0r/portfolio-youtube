import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="mb-10">
            <div className="flex justify-end">
                <a href="https://blackboy96.xyz/">
                    <span>
                        Powered by React.js and Tailwind
                        <FontAwesomeIcon className="ml-2" icon={faGithub} />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Footer;