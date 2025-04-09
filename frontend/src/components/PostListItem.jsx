import { Link } from 'react-router-dom';

function PostListItem() {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      {/* image */}
      <div className='md:hidden xl:block xl:w-1/3'>
        <img
          src='../public/featured1.jpg'
          alt=''
          className='rounded-2xl object-cover'
        />
      </div>
      {/* details */}
      <div className='flex flex-col gap-4 xl:w-2/3'>
        <Link to='/test' className='text-4xl font-semibold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam veniam
          quia incidunt
        </Link>
        <div className='flex items-center gap-2 text-gray-800/90 text-sm'>
          <span>Written by</span>
          <Link className='text-emerald-500'>Aryan</Link>
          <span>on</span>
          <Link className='text-emerald-500'>Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nisi
          soluta pariatur laboriosam a, deleniti inventore sequi odit libero
          fugit. Animi quod odio enim magnam at? Repellendus voluptas est
          delectus!
        </p>
        <Link>Read More</Link>
      </div>
    </div>
  );
}
export default PostListItem;
