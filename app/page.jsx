import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Prompts</span>
    </h1>
    <p className='desc text-center'>

      

      Curd is an open-source prompt saving edit and delete tool you can save 
      your prompt and future use in chat gpt
    </p>

    <Feed />
  </section>
);

export default Home;
