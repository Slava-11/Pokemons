
type PokemonBaseStatProps = {
  stat: string;
  quantity: number;
  pokemonStats: any;
};

export const PokemonBaseStat = ({
  stat,
  quantity,
  pokemonStats,
}: PokemonBaseStatProps) => {
  return (
    <div className="mb-[20px]">
      <h2>{stat}</h2>
      <div></div>
      <p>{quantity}</p>
      <div>
        {pokemonStats?.map((pokemonStat) => {
          return (
            <>
              <div className="flex justify-center gap-[10px] items-center mt-[5px]">
                <p>{pokemonStat.stat.name}</p>
                <div className="w-[2px] h-[20px] bg-boxShadow "></div>
                <p>{pokemonStat.base_stat}</p>
              </div>
              <div className="w-[100%] h-[4px] bg-fireElementDim rounded-[3px] overflow-hidden mt-[5px]">
                <div
                  style={{
                    width:
                      pokemonStat.base_stat >= 100
                        ? "100%"
                        : pokemonStat.base_stat + "%",
                  }}
                  className='h-[8px] bg-fireElement'
                ></div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
