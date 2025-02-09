import { useState } from "react";

function Items({ logo, url, alt }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="relative transition-opacity"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="flex justify-center w-full p-1 sm:p-2"
        >
          <ImageWithTooltip logo={logo} alt={alt} isHovered={isHovered} />
        </a>
      ) : (
        <div className="flex justify-center w-full p-1 sm:p-2">
          <ImageWithTooltip logo={logo} alt={alt} isHovered={isHovered} />
        </div>
      )}
    </li>
  );
}

function ImageWithTooltip({ logo, alt, isHovered }) {
  return (
    <div className="flex items-center max-w-[90px] relative">
      <img
        src={logo}
        alt={alt}
        width={80}
        height={80}
        className="w-full h-auto object-cover rounded-lg"
      />
      {isHovered && (
        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-[#2d2c2c] rounded-md whitespace-nowrap max-w-max hidden sm:block">
          {alt}
        </span>
      )}
    </div>
  );
}

export default function ShowCerts({ items }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 animated-list">
      {items.map((item, index) => (
        <Items key={index} {...item} />
      ))}
    </ul>
  );
}
