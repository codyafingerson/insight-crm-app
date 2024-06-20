import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { faArrowRightFromBracket, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logoutUserAction } from "../../../features/auth/authSlice";

// Logout functionality

export default function SidebarFooter() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUserAction());
        navigate("/");
    };

    return (
        <div className="absolute bottom-0 left-0 w-full p-3 bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center justify-between">
                <button
                    type="button"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                >
                    <FontAwesomeIcon icon={faCog}/>
                    <span className="ml-2">Settings</span>
                </button>
                <button
                    type="button"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                    onClick={handleLogout}
                >
                    <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                    <span className="ml-2">Sign out</span>
                </button>
            </div>
        </div>
    );
}