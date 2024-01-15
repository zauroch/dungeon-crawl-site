import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header title="Dungeon Crawl!" className={"fixed top-0 w-full z-50"}></Header>
      {/* 
      <ScrollableNavigation>
        <HomeComponent></HomeComponent>
        <MerchComponent></MerchComponent>
        <ReleasesComponent></ReleasesComponent>
        <ShowsComponent></ShowsComponent>
        <ContactComponent></ContactComponent>
      </ScrollableNavigation>*/}

      <Footer></Footer>
    </>
  )
}

export default App
