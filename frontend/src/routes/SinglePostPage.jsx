import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function SinglePostPage() {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, earum
            aspernatur asperiores impedit mollitia esse quidem culpa..
          </h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-emerald-800'>aryan</Link>
            <span>on</span>
            <Link className='text-emerald-800'>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className='text-gray-500 font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            doloribus dolores accusantium iure itaque quisquam vero vel nesciunt
            modi. Pariatur, qui aliquid. Itaque obcaecati amet earum, enim fuga
            quas quis!
          </p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <img
            src='../public/featured1.jpg'
            alt='img-1'
            className='rounded-2xl'
          />
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* text */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum
            est odio quidem amet quod eum cumque minima adipisci. Rem, soluta
            praesentium. Iusto neque tempora esse nemo veritatis, provident
            itaque!earum est odio quidem amet quod eum cumque minima adipisci.
            Rem, soluta praesentium. Iusto neque tempora esse nemo veritatis,
            provident itaque!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum
            est odio quidem amet quod eum cumque minima adipisci. Rem, soluta
            praesentium. Iusto neque tempora esse nemo veritatis, provident
            itaque!earum est odio quidem amet quod eum cumque minima adipisci.
            Rem, soluta praesentium. Iusto neque tempora esse nemo veritatis,
            provident itaque!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum
            est odio quidem amet quod eum cumque minima adipisci. Rem, soluta
            praesentium. Iusto neque tempora esse nemo veritatis, provident
            itaque!earum est odio quidem amet quod eum cumque minima adipisci.
            Rem, soluta praesentium. Iusto neque tempora esse nemo veritatis,
            provident itaque!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum
            est odio quidem amet quod eum cumque minima adipisci. Rem, soluta
            praesentium. Iusto neque tempora esse nemo veritatis, provident
            itaque!earum est odio quidem amet quod eum cumque minima adipisci.
            Rem, soluta praesentium. Iusto neque tempora esse nemo veritatis,
            provident itaque!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum
            est odio quidem amet quod eum cumque minima adipisci. Rem, soluta
            praesentium. Iusto neque tempora esse nemo veritatis, provident
            itaque!earum est odio quidem amet quod eum cumque minima adipisci.
            Rem, soluta praesentium. Iusto neque tempora esse nemo veritatis,
            provident itaque!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum
            est odio quidem amet quod eum cumque minima adipisci. Rem, soluta
            praesentium. Iusto neque tempora esse nemo veritatis, provident
            itaque!earum est odio quidem amet quod eum cumque minima adipisci.
            Rem, soluta praesentium. Iusto neque tempora esse nemo veritatis,
            provident itaque!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum
            est odio quidem amet quod eum cumque minima adipisci. Rem, soluta
            praesentium. Iusto neque tempora esse nemo veritatis, provident
            itaque!earum est odio quidem amet quod eum cumque minima adipisci.
            Rem, soluta praesentium. Iusto neque tempora esse nemo veritatis,
            provident itaque!
          </p>
        </div>
        {/* menu */}
        <div className='px-4 h-max sticky top-8'>
          <h1 className='mb-4 text-sm font-medium'>Author</h1>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <img
                src='../public/featured1.jpg'
                alt='img-1'
                className='w-12 h-12 rounded-full object-cover'
              />
              <Link>Aryan</Link>
            </div>
            <p className='text-sm text-gray-500'>
              Lorem ipsum dolor sit amet consectetur{' '}
            </p>
            <div className='flex gap-2'>
              <Link>
                <FaInstagram />
              </Link>
              <Link>
                <FaFacebook />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SinglePostPage;
