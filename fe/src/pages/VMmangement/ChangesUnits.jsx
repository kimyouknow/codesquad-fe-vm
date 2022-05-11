import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { setKoreanLocaleMoney } from 'utils';
import * as S from './style';

function ChangesUnits({ totalBalance, changesUnits }) {
  return (
    <S.ChangesUnitsContainer>
      <div>{setKoreanLocaleMoney(totalBalance)}원</div>
      {changesUnits.map(({ id, unit, count }) => (
        <li key={id}>
          <Button variant="contained">{unit}</Button>
          <div>{count}</div>
        </li>
      ))}
    </S.ChangesUnitsContainer>
  );
}

ChangesUnits.propTypes = {
  totalBalance: PropTypes.number.isRequired,
  changesUnits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      unit: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ChangesUnits;
