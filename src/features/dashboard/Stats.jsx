import { HiBriefcase, HiOutlineChartBar } from 'react-icons/hi';
import Stat from './Stat';
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings?.length;

  // 2.
  const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays?.length;

  // 4.
  // num checked in nights / all available nights (num days * num cabins)
  const occupation =
    confirmedStays?.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title='Bookings'
        color='blue'
        value={numBookings}
        icon={<HiBriefcase />}
      />
      <Stat
        title='Sales'
        color='green'
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title='Check ins'
        color='indigo'
        value={checkins}
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title='Occupancy rate'
        color='yellow'
        value={Math.round(occupation * 100) + '%'}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
