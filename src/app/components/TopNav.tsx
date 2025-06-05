import Image from 'next/image';

export default function TopNav() {
  return (
    <div className="flex items-center justify-between bg-green-600 p-2 px-4 text-white">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        {/* Logo */}
        <Image
          src="/strawberry.png" // replace with your actual image path
          alt="Logo"
          width={32}
          height={32}
          className="rounded-full"
        />

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search"
          className="bg-green-500 text-white placeholder-white text-sm px-4 py-1 rounded-full focus:outline-none w-48"
        />
      </div>

      {/* Middle Icons */}
      <div className="flex items-center space-x-6">
        <Icon icon="home" />
        <Icon icon="trophy" />
        <Icon icon="store" />
        <Icon icon="paw" />
        <Icon icon="gamepad" />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <Icon icon="grid" />
        <Icon icon="message-circle" />
        <Icon icon="bell" />

        {/* Avatar */}
        <Image
          src="/avatar.jpg" // replace with actual avatar path
          alt="User"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

function Icon({ icon }: { icon: string }) {
  return (
    <button className="hover:bg-green-500 p-2 rounded-full">
      <i className={`lucide lucide-${icon} text-white`}></i>
    </button>
  );
}
