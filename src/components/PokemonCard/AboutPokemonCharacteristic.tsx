
type AboutPokemonCharacteristicProps = {
  about:string | number,
  icon: JSX.Element,
  nameCharacteristic: string
  measure?: string
}

export const AboutPokemonCharacteristic = ({about, icon, nameCharacteristic, measure,}:AboutPokemonCharacteristicProps) => {
  return (
    <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[5px]">{icon} {about} {measure}</div>
            <div className="text-center">{nameCharacteristic}</div>
    </div>
  )
}