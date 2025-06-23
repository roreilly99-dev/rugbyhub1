import Feed from '@components/Feed';


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            RugbyHub</h1>
        <br className="max-md:hidden"/>
        <span className = 'orange-gradient text-center'> AI Powered Rugby Insights </span>
        <Feed />
    </section>
  )
}

export default Home