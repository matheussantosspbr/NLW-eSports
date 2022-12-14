import './styles/main.css'
import {MagnifyingGlassPlus} from 'phosphor-react'
import LogoImg from './assets/Logo.svg'

function App() {
  return(
    <div className='w-4/5 mx-auto flex flex-col items-center m-10'>
      <img src={LogoImg} alt="" className='w-60'/>

      <h1 className='text-4xl text-white font-black mt-10'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-10'>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game1.png" alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg bg-gaming-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block '>4 Anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game2.png" alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg bg-gaming-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>Dota 2</strong>
              <span className='text-zinc-300 text-sm block '>4 Anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game3.png" alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg bg-gaming-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>Counter Strike</strong>
              <span className='text-zinc-300 text-sm block '>4 Anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game4.png" alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg bg-gaming-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>Apex Legends</strong>
              <span className='text-zinc-300 text-sm block '>4 Anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game5.png" alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg bg-gaming-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>Fortnite</strong>
              <span className='text-zinc-300 text-sm block '>4 Anúncios</span>
            </div>
          </a>
          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game6.png" alt="" />
            <div className='w-full pt-16 pb-4 px-4 bg bg-gaming-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>World of Warcraft</strong>
              <span className='text-zinc-300 text-sm block '>4 Anúncios</span>
            </div>
          </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2A2534] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou o seu duo ?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar Anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
