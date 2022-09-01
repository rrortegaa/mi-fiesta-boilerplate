import clsx from 'clsx'

export default function Card ({ children, className }) {
  return (
    <div className={clsx(
      'bg-white/20',
      'border border-white/30 rounded-2xl',
      'backdrop-blur-sm',
      'flex- flex-col justify-center',
      'py-8 px-5',
      'shadow-xl shadow-black/10',
      'w-full',
      'hover:border-white shadow-2xl hover:shadow-white/60',
      className
    )}>
      {children}
    </div>
  )
}