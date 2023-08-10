import { useCallback, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { FetchCovidDataRepository } from '../repository';
import { CovidDataEntity } from '../entities/entity';
import { CovidDataState } from '../presentation/state/useCovid';

export interface FetchCovidDataParams {
  startDate: Date;
  endDate: Date;
}
export const useFetchCovidDataCommand = ({
  repository,
  state,
}: {
  repository: FetchCovidDataRepository;
  state: CovidDataState;
}) => {
  const onSuccess = (res: CovidDataEntity[]) => {
    state.setCovidData(res);
  };
  const mutation = useMutation(async () => repository.fetchCovidData(), {
    onSuccess: (data) => onSuccess(data),
  });

  return {
    fetchCovidDataCommand: mutation.mutate,
    isLoading: mutation.isLoading,
  };
};

export const useFetchCovidDataHook = (
  fetchCovidDataRepository: FetchCovidDataRepository,
  covidDataState: CovidDataState
) => {
  const { fetchCovidDataCommand, isLoading } = useFetchCovidDataCommand({
    repository: fetchCovidDataRepository,
    state: covidDataState,
  });

  const fetch = useCallback(
    () => fetchCovidDataCommand(),
    [fetchCovidDataCommand]
  );

  return {
    fetch,
    isLoading,
  };
};
