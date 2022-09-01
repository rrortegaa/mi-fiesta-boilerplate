import Link from 'next/link'

import Card from '../components/Card'

export default function Custom404 () {

  return (
    <main className='bg-404 bg-cover bg-no-repeat h-screen w-screen'>
      <section className='flex justify-center pt-20 px-8 pb-16'>
        <div className='max-w-screen-xl w-full'>
          <Card>
            <h1 className='text-5xl text-pink-500 font-extrabold'>Not Found</h1>
            <p className="mt-3 text-lg text-gray-600 font-medium">
            Cat ipsum dolor sit amet, the fat cat sat on the mat bat away with paws why can't i catch that stupid red dot.
            </p>
            <div className="h-60px w-[210px] bg-gradient-to-l from-sky-500/75 via-violet-500/75 to-pink-500/75 flex items-center justify-center mt-6 rounded-lg shadow-md shadow-gray-400">
              <Link href='/'>
                <a className='cursor-pointer text-white text-base'>Ir a home</a>
              </Link>
            </div>
          </Card>
        </div>
        
      </section>
    </main>
  )
}