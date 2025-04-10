import MainCategories from '../components/MainCategories';
import FeaturedPosts from '../components/FeaturedPosts';
import PostList from '../components/PostList';

const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className='mt-8 text-md md:text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            rerum accusantium.
          </p>
        </div>
      </div>

      <MainCategories />
      <FeaturedPosts />
      <div>
        <h1 className='my-8 text-2xl text-gray-600'>Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
