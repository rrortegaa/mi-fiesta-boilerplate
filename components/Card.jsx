import clsx from 'clsx'

export default function Card ({ children, className }) {
  return (
    <div className={clsx(
      'border border-white rounded-xl',
      'backdrop-blur-md',
      'flex- flex-col justify-center',
      'py-8 px-5',
      'shadow-lg shadow-white/30',
      'w-full',
      className
    )}>
      {children}
    </div>
  )
}