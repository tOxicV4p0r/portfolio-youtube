
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../contents/header'

const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='text-3xl text-primaryTitle font-semibold'>{data.name}</div>
            <div className='text-primaryAccent font-semibold'>{data.title}</div>
            <div className='text-sm w-5/6'>{data.caption}</div>
            <div className='mt-4'>
                <a href={data.link} target='_blank'>
                    <span className='rounded-md bg-primaryTitle text-gray-200 py-2 px-4'>
                        {data.btnText}
                        <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown} /></span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header;