
export default function Card ({ children }) {
  return (
    <div className="border border-white backdrop-blur-md flex- flex-col justify-center py-8 px-5 rounded-xl shadow-lg shadow-white/30 w-full">
      {children}
    </div>
  )
}