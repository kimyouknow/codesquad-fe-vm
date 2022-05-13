/* eslint-disable import/prefer-default-export */
export function getRestUnit(units, balance) {
  const { newUnits } = units
    .sort((prev, cur) => cur.unit - prev.unit)
    .reduce(
      // eslint-disable-next-line no-shadow
      ({ rest, newUnits }, cur) => {
        const taretCount = Math.floor(rest / cur.unit);
        const newRest = rest % cur.unit;
        return { rest: newRest, newUnits: [{ ...cur, count: taretCount }, ...newUnits] };
      },
      { rest: balance, newUnits: [] },
    );
  return { changesUnits: newUnits, totalBalance: balance };
}