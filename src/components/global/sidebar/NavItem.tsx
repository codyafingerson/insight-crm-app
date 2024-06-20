import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface NavItemProps {
    to: string;
    icon: FontAwesomeIconProps['icon'];
    label: string;
    active: boolean;
}

export default function NavItem({ to, icon, label, active }: NavItemProps) {
    return (
        <li>
            <Link
                to={to}
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white group ${active ? 'text-white bg-gradient-to-br from-orange-400 to-red-500 hover:bg-gradient-to-bl focus:ring-orange-200 dark:focus:ring-orange-800' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            >
                <FontAwesomeIcon icon={icon}/>
                <span className="ms-3">{label}</span>
            </Link>
        </li>
    );
}
