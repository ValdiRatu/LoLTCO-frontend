import * as championData from '../../data/champions.json'

// export const championToIconMap: Record<string, string> = Object.entries(championData.data).reduce((map, [_, { name, image }]) => {
//   map[name] = `${image.full.split('.')[0]}_0.jpg` 
//   return map
// }, {} as Record<string, string>)

export const ChampionNames = Object.keys(championData.data)

export const getChampionIconPath = (championName: string) => {
  return `https://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/${championName}.png`
}
