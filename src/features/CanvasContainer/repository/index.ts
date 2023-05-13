import axios from 'axios';
import { ApiResponse } from '@core/http/protocols';
import { CovidDataDto } from '../entities/dto';
import { mapCovidDataDtoToEntity } from '../entities/map';
import { CovidDataEntity } from '../entities/entity';

export interface FetchCovidDataRepository {
  fetchCovidData: () => Promise<CovidDataEntity[]>;
}

export const useFetchCovidDataRepository = (): FetchCovidDataRepository => {
  function sumCasesAndDeaths(data: any[]) {
    return data.reduce(
      (accumulator, currentState) => {
        accumulator.cases += currentState.cases;
        accumulator.deaths += currentState.deaths;
        return accumulator;
      },
      { cases: 0, deaths: 0 }
    );
  }
  const fetchCovidData = async (): Promise<CovidDataEntity[]> => {
    const startDate = new Date('2020-02-25');
    const endDate = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const covidDataArray = [];

    for (
      let currentDate = startDate;
      currentDate <= endDate;
      currentDate = new Date(currentDate.getTime() + oneDay)
    ) {
      const formattedDate = currentDate
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '');
      const response = await axios.get(
        `https://covid19-brazil-api.now.sh/api/report/v1/brazil/${formattedDate}`
      );

      if (response.data && response.data.data) {
        const { cases, deaths } = sumCasesAndDeaths(response.data.data);
        covidDataArray.push({ date: formattedDate, cases, deaths });
      }
    }

    return covidDataArray.map(mapCovidDataDtoToEntity);
  };

  return {
    fetchCovidData,
  };
};
