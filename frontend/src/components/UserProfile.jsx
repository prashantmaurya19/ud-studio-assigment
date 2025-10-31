import { twJoin } from "tailwind-merge";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/user/isloging")
            .then(res => {
                if (res.status === 200) return res.json();
                navigate("/");
            })
            .then(data => {
                console.log(data);
                if (data) {
                    setUserData(data.user);
                }
            })
            .catch(() => {
                navigate("/");
            });
    }, [navigate]);
    return (
        <div className={twJoin(
            "h-full",
            "flex items-center gap-3",
            "px-4",
        )}>
            {/* Profile Photo */}
            <div className={twJoin(
                "aspect-square h-full",
                "rounded-full",
                "overflow-hidden",
                "border-2 border-gray-200 dark:border-gray-700",
            )}>
                <img
                    src={userData?.picture ? userData.picture : "https://ui-avatars.com/api/?background=random"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Greeting */}
            <div className={twJoin(
                "text-sm",
                "dark:text-gray-200",
            )}>
                <span className="font-medium">Hi, </span>
                <span className="font-semibold">{userData?.name != undefined ? userData?.name : 'User'}</span>
            </div>
        </div>
    );
};

export default UserProfile;