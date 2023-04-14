import { Outlet } from 'react-router-dom';
// domain
// state
// shared components
import { PageTitle } from '@shared/components/PageTitle';
// error page
// components
import { Header } from '@shared/components/Header';
// styles
import { usePageTitle } from '@shared/components/PageTitle/state/index';
import { TopNavBar } from '@shared/components/TopNavBar';

import * as S from './styles';

export function Home() {
  const { title, pageTitleElement } = usePageTitle();

  return (
    <S.Wrapper>
      <Header companyName="Gráfico 3D Generativo de dados da COVID-19 no Brasil." />
      <PageTitle title={title}>{pageTitleElement} </PageTitle>
      <S.Main>
        <S.Content>
          <Outlet />
        </S.Content>
        {/* <PageTitle title="Eu serei um footer" /> */}
      </S.Main>
    </S.Wrapper>
  );
}
