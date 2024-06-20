interface UserProfileProps {
    avatar: string;
    name: string;
    role: string;
}

export default function UserProfile({ avatar, name, role }: UserProfileProps) {
    return (
        <div className="px-1 mb-3 flex items-center space-x-2">
            <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full"/>
            <div>
                <h4 className="px-2 text-gray-900 dark:text-white">{name}</h4>
                <p className="px-2 text-sm text-gray-500 dark:text-gray-400">{role}</p>
            </div>
        </div>
    );
}