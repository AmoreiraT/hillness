import { CovidDataDto } from './dto';
import { CovidDataEntity } from './entity';

export const mapCovidDataDtoToEntity = (dto: CovidDataDto): CovidDataEntity => {
  return {
    date: parseInt(dto.date, 10),
    cases: dto.cases,
    deaths: dto.deaths,
  };
};
