import Image from "next/image";

export const Thumb = (props) => {
  const { selected, imgSrc, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide flex-[0_0_28%] md:flex-[0_0_18%] min-w-0 pl-[var(--thumbs-slide-spacing)] relative".concat(
        selected ? " embla-thumbs__slide--selected opacity-100" : ""
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button bg-transparent touch-manipulation block cursor-pointer border-0 p-0 m-0 w-full opacity-20 transition-opacity duration-200"
        type="button"
      >
        <div className="embla-thumbs__slide__number w-12 h-12 z-10 absolute top-1 right-1 rounded-full bg-[rgba(var(--background-site-rgb-value), 0.85)] leading-10 font-black text-center pointer-events-none">
          <span>{index + 1}</span>
        </div>
        <Image
          className="embla-thumbs__slide__img block h-[var(--thumbs-slide-height)] w-full object-cover"
          src={imgSrc}
          alt="Your alt text"
        />
      </button>
    </div>
  );
};
