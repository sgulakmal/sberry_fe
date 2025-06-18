import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface DialogPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const DialogPopup: React.FC<DialogPopupProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Dialog Content */}
      <div
        className="relative z-10 bg-white rounded-xl shadow-xl p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex justify-center items-center mb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button className="absolute right-0 text-gray-500 text-xl" onClick={onClose}>&times;</button>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.body // Mounts directly to the body element
  );
};

export default DialogPopup;
