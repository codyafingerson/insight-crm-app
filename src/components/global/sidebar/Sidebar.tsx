import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faChartPie,
    faCircleQuestion,
    faClipboard,
    faCogs,
    faCreditCard,
    faEnvelope,
    faFileInvoice,
    faList,
    faListCheck,
    faUserCircle,
    faUsers
} from "@fortawesome/free-solid-svg-icons";

import NavItem from "./NavItem.tsx";
import UserProfile from "./UserProfile.tsx";
import SidebarFooter from "./Footer.tsx";
import { useAppDispatch, useAppSelector } from '../../../app/hooks.ts';
import { getLoggedInUser } from '../../../features/auth/authSlice.ts';

// User profile image and name
import logo from "../../../assets/user.svg";

export default function Sidebar() {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            dispatch(getLoggedInUser());
        }
        // dispatch(getLoggedInUser());
    }, []);

    if (location.pathname === "/" || !user) return null;

    else {
        return (
            <>
                <button
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <div className="font-medium">
                            <UserProfile avatar={logo} name={user.firstName + " " + user.lastName} role={user.isAdmin ? "Administrator" : "User"}/>
                        </div>
                        <ul className="space-y-2 font-medium">
                            <NavItem icon={faChartPie} to="/dashboard" label="Dashboard"
                                     active={location.pathname === "/dashboard"}/>
                            <NavItem icon={faUsers} to="/customers" label="Customers"
                                     active={location.pathname === "/customers"}/>
                            <NavItem icon={faList} to="/products" label="Products"
                                     active={location.pathname === "/products"}/>
                            <NavItem icon={faCreditCard} to="/orders" label="Orders"
                                     active={location.pathname === "/orders"}/>

                            {user.isAdmin && (
                                <NavItem icon={faFileInvoice} to="/reports" label="Reports"
                                         active={location.pathname === "/reports"}/>
                            )}

                        </ul>
                        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                            <li>
                                <Link
                                    to="/inbox"
                                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white group ${location.pathname === '/inbox' ? 'text-white bg-gradient-to-br from-orange-400 to-red-500 hover:bg-gradient-to-bl focus:ring-orange-200 dark:focus:ring-orange-800' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                                    <span
                                        className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white">
                                        3
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tasks"
                                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white group ${location.pathname === '/tasks' ? 'text-white bg-gradient-to-br from-orange-400 to-red-500 hover:bg-gradient-to-bl focus:ring-orange-200 dark:focus:ring-orange-800' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                                    <FontAwesomeIcon icon={faListCheck}/>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Tasks</span>
                                    <span
                                        className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white">
                                        5
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/help"
                                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white group ${location.pathname === '/help' ? 'text-white bg-gradient-to-br from-orange-400 to-red-500 hover:bg-gradient-to-bl focus:ring-orange-200 dark:focus:ring-orange-800' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                                    <FontAwesomeIcon icon={faCircleQuestion}/>
                                    <span className="ms-3">Help</span>
                                </Link>
                            </li>

                            {user.isAdmin && (
                                <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                                    <li>
                                        <Link
                                            to="/admin/users"
                                            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white group ${location.pathname === '/admin/users' ? 'text-white bg-gradient-to-br from-orange-400 to-red-500 hover:bg-gradient-to-bl focus:ring-orange-200 dark:focus:ring-orange-800' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                                            <FontAwesomeIcon icon={faUserCircle}/>
                                            <span className="ms-3">Users</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/app-settings"
                                            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white group ${location.pathname === '/admin/app-settings' ? 'text-white bg-gradient-to-br from-orange-400 to-red-500 hover:bg-gradient-to-bl focus:ring-orange-200 dark:focus:ring-orange-800' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                                            <FontAwesomeIcon icon={faCogs}/>
                                            <span className="ms-3">Application Settings</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/inventory"
                                            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white group ${location.pathname === '/admin/inventory' ? 'text-white bg-gradient-to-br from-orange-400 to-red-500 hover:bg-gradient-to-bl focus:ring-orange-200 dark:focus:ring-orange-800' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                                            <FontAwesomeIcon icon={faClipboard}/>
                                            <span className="ms-3">Inventory</span>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </ul>
                    </div>
                    <SidebarFooter/>
                </aside>
            </>
        );
    }
}