import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center"><span className="md-text-[17px]"> Discover & Share </span> 
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center ">AI-Powered Prompts</span>
        </h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus ut sunt numquam earum, veniam inventore aperiam in quam aut rem modi vitae laborum tempore accusantium, assumenda debitis. Eligendi cupiditate neque eum, temporibus molestias veritatis quasi ea </p>

        <Feed/>
    </section>
  )
}

export default Home
