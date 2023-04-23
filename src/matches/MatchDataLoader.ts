import * as leagueMatches from "../../data/val_data.json"
import { IMatch } from "./types";
import { shuffle } from "lodash"

export class MatchDataLoader {
  private matchData: IMatch[]
  private currentIndex: number = 0
  // private validIndexSet: Set<number>
  constructor() {
    this.matchData = (leagueMatches as any).matches as IMatch[] // too bad im lazy
    // this.validIndexSet = new Set<number>([...Array(this.matchData.length).keys()])
  }

  public getMatch() {
    const match = this.matchData[this.currentIndex]
    this.incrementIndex()
    return match
  }

  private incrementIndex() {
    this.currentIndex = (this.currentIndex + 1) % this.matchData.length
  }

  public resetLoader() {
    this.currentIndex = 0
  }

  public shuffleLoader() {
    this.matchData = shuffle(this.matchData)
  }
}