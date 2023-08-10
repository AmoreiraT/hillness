import axios from 'axios';
import { ApiResponse } from '@core/http/protocols';
import { CovidDataDto } from '../entities/dto';
import { mapCovidDataDtoToEntity } from '../entities/map';
import { CovidDataEntity } from '../entities/entity';

export interface FetchCovidDataRepository {
  fetchCovidData: () => Promise<CovidDataEntity[]>;
}

export const useFetchCovidDataRepository = (): FetchCovidDataRepository => {
  const fetchCovidData = async (): Promise<CovidDataEntity[]> => {
    const response = await axios.get(`http://localhost:3002/covid/getDataBase`);

    if (response.data) {
      return response.data.map(mapCovidDataDtoToEntity);
    } else {
      throw new Error('API response is undefined');
    }
  };

  return {
    fetchCovidData,
  };
};
