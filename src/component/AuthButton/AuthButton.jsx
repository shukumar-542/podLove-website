/* eslint-disable react/prop-types */

const AuthButton = ({ children, handleOnClick, className, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`w-full text-white px-4 md:px-6 border rounded-md text-[18px] cursor-pointer
        ${
          disabled
            ? "bg-gradient-to-b from-[#3E0A0A] via-[#EF8559] to-[#FFA175] border-[#EF8559] cursor-not-allowed"
            : "bg-gradient-to-t from-[#3E0A0A] via-[#EF8559] to-[#FFA175] border-[#EF8559] shadow-inner shadow-white"
        }
        ${className}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default AuthButton;
