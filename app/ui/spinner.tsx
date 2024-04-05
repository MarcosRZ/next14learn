import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      {/* <div className="border-4 border-gray-200 border-t-4 border-t-black rounded-full w-12 h-12 animate-spin"></div> */}
      <svg
        className='animate-spin'
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#FFF"
          strokeWidth="5"
        />
        <path
          d="M50 5 A 45 45 0 0 1 95 50"
          fill="none"
          stroke="#0074D9"
          strokeWidth="8"
        >
          {/* <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="2s"
            values="0 50 50;360 50 50"
          /> */}
        </path>
      </svg>
    </div>
  );
};

export default Spinner;