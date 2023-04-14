import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import { MenuSelect } from '../MenuSelect';
import * as S from './styles';
import { Translator } from '../../../i18n/translator';

interface TopNavBarProps {
  title: string;
  children?: React.ReactNode;
}

export function TopNavBar({ title, children }: TopNavBarProps) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [anchorBearers, setAnchorBearers] = useState<null | HTMLElement>(null);
  const handleClickAnchorBearers = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorBearers(event.currentTarget);
  };
  const handleCloseAnchorBearers = () => {
    setAnchorBearers(null);
  };

  const [anchorRequests, setAnchorRequests] = useState<null | HTMLElement>(
    null
  );
  const handleClickAnchorRequests = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorRequests(event.currentTarget);
  };
  const handleCloseAnchorRequests = () => {
    setAnchorBearers(null);
  };

  const [anchorInvoices, setAnchorInvoices] = useState<null | HTMLElement>(
    null
  );
  const handleClickAnchorInvoices = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorInvoices(event.currentTarget);
  };
  const handleCloseAnchorInvoices = () => {
    setAnchorBearers(null);
  };

  const [anchorManage, setAnchorManage] = useState<null | HTMLElement>(null);
  const handleClickAnchorManage = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorManage(event.currentTarget);
  };
  const handleCloseAnchorManage = () => {
    setAnchorBearers(null);
  };

  return (
    <S.Wrapper>
      <MenuSelect
        anchorEl={anchorBearers}
        labelButton="Cardholders"
        onClick={handleClickAnchorBearers}
        onClose={handleCloseAnchorBearers}
        variant="primary"
      >
        <MenuItem
          onClick={() => {
            handleCloseAnchorBearers();
            navigate('/');
          }}
          disableRipple
        >
          Cardholders dashboard
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseAnchorBearers();
            navigate('create-cardholder');
          }}
          disableRipple
        >
          Add new cardholders
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseAnchorBearers();
            navigate('create-multiple-cardholders');
          }}
          disableRipple
        >
          Add multiple cardholders
        </MenuItem>
      </MenuSelect>
      <MenuSelect
        anchorEl={anchorRequests}
        labelButton="Requests"
        hasChildren={false}
        onClick={handleClickAnchorRequests}
        onClose={handleCloseAnchorRequests}
        variant="primary"
      >
        {null}
      </MenuSelect>
      <MenuSelect
        anchorEl={anchorInvoices}
        hasChildren={false}
        labelButton="Invoices and Payments"
        onClick={(event) => {
          handleClickAnchorInvoices(event);
          navigate('invoice');
        }}
        onClose={handleCloseAnchorInvoices}
        variant="primary"
      >
        {null}
      </MenuSelect>
      <MenuSelect
        anchorEl={anchorManage}
        labelButton="Manage"
        hasChildren={false}
        onClick={handleClickAnchorManage}
        onClose={handleCloseAnchorManage}
        variant="primary"
      >
        {null}
      </MenuSelect>
      {children}
    </S.Wrapper>
  );
}
