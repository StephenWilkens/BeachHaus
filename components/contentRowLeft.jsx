import Image from "next/image";
import Link from "next/link";

export function ContentRowLeft(props) {
  const { image, title, info } = props;
  return (
    <div className="bg-black relative group lg:max-h-[720px] 2xl:max-h-[1080px]">
      <div className="mobile md:hidden">
        <Image
          src={image}
          alt="beer"
          class="opacity-100 w-full object-cover group-hover:opacity-60 duration-300 ease-in-out"
        />
        <div className="absolute inset-0 top-20 group-hover:top-5 duration-300 ease-in-out">
          <h1 className="text-white text-3xl font-semibold text-center ">
            The Brewery at Beach Haus
          </h1>
        </div>
        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 top-20 duration-300 ease-in-out">
          <p className="text-white text-justify mx-12">
            Not only is our brewery the Jersey Shore&apos;s premier brewery for
            crispy lagers and refresing ales, but we also offer incredible food
            and a full bar.
          </p>
          <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-4 rounded self-center mx-32 mt-4">
            <Link href="/brewery/eventsbooking">Explore our Menus</Link>
          </button>
        </div>
      </div>
      <div className="desktop hidden md:block">
        <Image
          src={image}
          alt="beer"
          class="opacity-100 w-full object-cover group-hover:opacity-60 duration-300 ease-in-out"
        />
        <div className="absolute inset-0 top-40 group-hover:top-20 duration-300 ease-in-out">
          <h1 className="text-white text-8xl font-bold text-left ml-10">
            The Brewery
            <br />
            at Beach Haus
          </h1>
        </div>
        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 top-72 duration-300 ease-in-out">
          <p className="text-white text-justify text-3xl ml-10">
            Not only is our brewery the Jersey Shore&apos;s premier
            <br />
            brewery for crispy lagers and refresing ales,
            <br />
            but we also offer incredible food and a full bar.
          </p>
          <button class="bg-cyan-800 hover:bg-cyan-600 text-white py-2 px-4 rounded self-center ml-10 mt-10">
            <Link href="/brewery/eventsbooking">Explore our Menus</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
