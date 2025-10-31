import { useEffect, useRef } from 'react';
import { joinTWClass } from "@ud/util/tailwind";
import LoginButtons from './LoginButtons';

const LoginOverlay = ({ isVisible, onClose }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

  return (
    <div
      className={joinTWClass(
        "fixed inset-0",
        "flex items-center justify-center",
        "bg-black/50",
        "transition-opacity duration-300 ease-in-out",
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        ref={overlayRef}
        className={joinTWClass(
          "bg-white dark:bg-gray-800",
          "rounded-2xl",
          "p-8",
          "shadow-2xl",
          "w-full max-w-md",
          "mx-4",
          "transform transition-transform duration-300",
          isVisible ? "scale-100" : "scale-95"
        )}
      >
        <div className={joinTWClass(
          "space-y-6"
        )}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sign in
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Choose your preferred sign in method
            </p>
          </div>
          
          <LoginButtons />
        </div>
      </div>
    </div>
  );
};

export default LoginOverlay;