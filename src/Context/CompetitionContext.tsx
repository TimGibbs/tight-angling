import { createContext, useContext } from 'react';
import RegionA from '../Data/RegionA';
import useLocalStorage from '../Hooks/useLocalStorage';
import { Competition } from '../Types/Types';

type CompetitionContextValue = [Competition, React.Dispatch<React.SetStateAction<Competition>>];

const CompetitionStateContext = createContext<CompetitionContextValue | undefined>(undefined);

function CompetitionProvider({ children }: { children: React.ReactNode }) {
  const example: Competition = {
    name: "Example",
    region: RegionA,
    isShore: true,
    limitations: { maxFish: 10, maxSpecies: 5, perSpecies: 3 },
    anglers: [],
  };

  const [competition, setCompetition] = useLocalStorage<Competition>('competitionData',example);

  return (
    <CompetitionStateContext.Provider value={[competition, setCompetition]}>
      {children}
    </CompetitionStateContext.Provider>
  );
}

function useCompetition(): CompetitionContextValue {
  const context = useContext(CompetitionStateContext);

  if (!context) {
    throw new Error('useCompetition must be used within a CompetitionProvider');
  }

  return context;
}

export { CompetitionProvider, useCompetition };
