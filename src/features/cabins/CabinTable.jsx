import { useSearchParams } from 'react-router-dom';
import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';
import { useCabins } from './useCabins';

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParam] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName='cabins' />;

  // 1) FILTER:
  const filterValue = searchParam.get('discount') || 'all';

  let filterCabins;

  if (filterValue === 'all') filterCabins = cabins;
  if (filterValue === 'no-discount')
    filterCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === 'with-discount')
    filterCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 2) SORT:
  const sortBy = searchParam.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const sortedCabins = filterCabins.sort((a, b) => {
    if (direction === 'asc') return a[field] - b[field];
    if (direction === 'desc') return b[field] - a[field];
  });

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header role='row'>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={cabins}
          // data={filterCabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
