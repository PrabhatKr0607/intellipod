import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-xol gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending Podcasts</h1>
        <Button variant="outline">Button</Button>
      </section>
    </div>
  )
}

export default Home