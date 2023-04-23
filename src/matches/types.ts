export interface IMatch {
  id: string
  teams: ITeam[] 
}

export interface ITeam {
  side: Side 
  isWinner: boolean
  participants: IParticipant[]
}

export interface IParticipant {
  name: string
  championName: string
  teamPosition: Position
  individualPosition: Position
  side: Side
}

export enum Position {
  Top = 'TOP',
  Jungle = 'JUNGLE',
  Middle = 'MIDDLE',
  Bot = 'BOTTOM',
  Support = 'UTILITY'
}

export enum Side {
  Blue = 'blue',
  Red = 'red'
}