import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

function Write() {
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-xl font-light'>Create a New Post</h1>
      <form className='flex flex-1 flex-col mb-6 gap-6 ' action=''>
        <button className='w-max p-2 shadow-md rounded-xl text-small text-gray-500 bg-white'>
          Add a cover image
        </button>
        <input
          className='text-4xl font-semibold background-transparent outline-none'
          type='text'
          placeholder='My Awesome story'
        />
        <div className='flex items-center gap-4'>
          <label className='text-sm' htmlFor=''>
            Choose a category:
          </label>
          <select
            className='p-2 rounded-xl bg-white shadow-md'
            name='cat'
            id=''>
            <option value='general'>General</option>
            <option value='general'>Web Design </option>
            <option value='general'>Development</option>
            <option value='general'>Databases</option>
            <option value='general'>Marketing</option>
            <option value='general'>Product Design</option>
          </select>
        </div>
        <textarea
          className='p-4 rounded-xl bg-white shadow-md'
          name='desc'
          placeholder='A Short Description'
        />
        <ReactQuill
          theme='snow'
          className='flex-1 rounded-xl bg-white shadow-md'
        />
        <button className='bg-emerald-800 text-white font-medium rounded-xl mt-2 p-2 w-40'>
          Send
        </button>
      </form>
    </div>
  );
}
export default Write;
