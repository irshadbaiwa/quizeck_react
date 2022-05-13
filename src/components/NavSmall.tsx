import React from "react";
import { Link } from "react-router-dom";

const NavSmall: React.FC = () => {
  return (
    <div className="flex flex-col w-full sm:hidden">
      <Link to="/play" className="active:bg-sky-200 ">
        <div className="h-12 flex justify-center items-center">
          <svg
            className="h-6 m-3 fill-sky-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
          </svg>
          <span>Play</span>
        </div>
      </Link>
      <Link to="/rules" className="active:bg-sky-200 ">
        <div className="h-12 flex justify-center items-center">
          <svg
            className="h-6 m-3 fill-sky-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M48 32C21.5 32 0 53.5 0 80v64C0 152.9 7.125 160 16 160H96V80C96 53.5 74.5 32 48 32zM256 380.6V320h224V128c0-53-43-96-96-96H111.6C121.8 45.38 128 61.88 128 80V384c0 38.88 34.62 69.63 74.75 63.13C234.3 442 256 412.5 256 380.6zM288 352v32c0 52.88-43 96-96 96h272c61.88 0 112-50.13 112-112c0-8.875-7.125-16-16-16H288z" />
          </svg>
          <span>Rules</span>
        </div>
      </Link>
      <Link to="/about" className="active:bg-sky-200 ">
        <div className="h-12 flex justify-center items-center">
          <svg
            className="h-6 m-3 fill-sky-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" />
          </svg>
          <span>About</span>
        </div>
      </Link>
    </div>
  );
};

export default NavSmall;
