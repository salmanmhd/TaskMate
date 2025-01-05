export default function Modal({ message, onClose }) {
  return (
    <div className='fixed  inset-0 flex items-center justify-center bg-black bg-opacity-70'>
      <div className='bg-gray-800 flex flex-col items-center p-8 rounded-lg shadow-xl max-w-md w-full'>
        <p className='text-center mb-6 text-white text-lg'>{message}</p>
        <button
          onClick={onClose}
          className='bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors'
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
