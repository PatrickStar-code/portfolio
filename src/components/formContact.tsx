export default function FormContact() {
  return (
    <form className="ml-auo space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
      />
      <textarea
        placeholder="Message"
        rows={6}
        className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"
      ></textarea>
      <button
        type="button"
        className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-2.5 w-full !mt-6"
      >
        Send
      </button>
    </form>
  );
}
