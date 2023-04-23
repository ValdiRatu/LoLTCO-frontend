import { IMatch, ITeam, Side } from "../matches/types"

export class MatchUtils {
  public static didBlueWin(match: IMatch): boolean {
    const { blueTeam, redTeam } = this.getBlueRedTeam(match)
    return blueTeam.isWinner
  }

  public static getBlueRedTeam(match: IMatch): { blueTeam: ITeam, redTeam: ITeam } {
    const blueTeam = match.teams.find(team => team.side === Side.Blue)
    const redTeam = match.teams.find(team => team.side === Side.Red)
    if (!blueTeam || !redTeam) {
      throw new Error('Could not find blue or red team')
    }
    return { blueTeam, redTeam }
  }
}