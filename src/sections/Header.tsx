import pokeball from '../img/pokeball.svg'

export const Header = () => {
  return (
    <header className='flex items-center'>
        <img className='w-[80px] h-[80px]' src={pokeball} alt="no logo" />
        <h1>Pokedex</h1>
    </header>
  )
}
