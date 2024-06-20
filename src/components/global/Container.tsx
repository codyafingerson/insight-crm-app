import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <div className="p-4 sm:ml-64 text-slate-800 dark:text-white">
            <div className="p-4 rounded-lg">
                { children }
            </div>
        </div>
    );
}