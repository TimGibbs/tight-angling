import { createContext, useContext, useState } from 'react';
import RegionA from '../Data/RegionA';
import { Competition } from '../Types/Types';

const CompetitionStateContext = createContext<
  [Competition, React.Dispatch<React.SetStateAction<Competition>>] | undefined
>(undefined)

function CompetitionProvider({children}: {children: React.ReactNode}) {
  const example = { name:"Example", region: RegionA, isShore:true, limitations: {maxFish:10, maxSpecies: 5, perSpecies:3}, anglers:[]  }
  const value = useState<Competition>(example)

  return (
    <CompetitionStateContext.Provider value={value}>
      {children}
    </CompetitionStateContext.Provider>
  )
}

function useCompetition() : [Competition, React.Dispatch<React.SetStateAction<Competition>>] {
  const context = useContext(CompetitionStateContext)
  if (context === undefined) {
    throw new Error('useCompetition must be used within a CompetitionProvider')
  }
  return context
}

export {CompetitionProvider, useCompetition}