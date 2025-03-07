import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { data } from '@/_data/header';

export default function Header() {
  return (
    <div className="flex flex-col ">
    <div className="text-3xl text-nothing-Navy font-semibold">{data.name}</div>
    <div className="text-2xl text-nothing-Blue font-semibold">   {data.title}</div>
    <div className="text-sm w-5/6">  {data.caption}</div>
    <div className="mt-4">
      <a href="" target='_blank'>
        <span className='bg-nothing-Navy rounded-sm text-white py-2 px-4'>
        {data.btnText}
          <span className='rotate-90 inline-block text-sm ml-2'> <ArrowDownwardIcon className='animate-bounce' /></span>
        </span>
      </a>

    </div>
  </div>
  )
}
