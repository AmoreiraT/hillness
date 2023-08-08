import { create } from 'zustand';
import { CovidDataEntity } from '../../entities/entity';
import { ErrorType } from '../../../../core/error';

export const initialCovidDataState: [CovidDataEntity] = [
  { cases: 0, date: 0, deaths: 0 },
];

export interface CovidDataState {
  covidData: [CovidDataEntity];
  error: ErrorType | undefined;
  setCovidData: (value: [CovidDataEntity]) => void;
  setError: (error: ErrorType | undefined) => void;
}

export const useCovidDataStore = create<CovidDataState>((set) => ({
  covidData: initialCovidDataState,
  error: undefined,
  setCovidData: (value: [CovidDataEntity]) => set({ covidData: value }),
  setError: (error: ErrorType | undefined) => set({ error }),
}));
