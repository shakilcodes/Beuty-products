import Image from 'next/image'
import Banner from './Components/Banner/Banner'
import Soaps from './Components/Soaps/Soaps'
import Aehenaeum from './Components/Aehenaeum/Aehenaeum'
import PostPoo from './Components/Post-Po-Drops/Post-Po-Drops'
import LiveNever from './Components/LifeNever/LiveNever'
import FirstSlider from './Components/firstSlider/FirstSlider'
import SecondSlider from './Components/SecondSlider/SecondSlider'
import ThirdSlider from './Components/ThirdSlider/ThirdSlider'
import SliderWithContent from './Components/SliderWithContent/SliderWithContent'
import DownloadOurApps from './Components/DownloadOurApps/DownloadOurApps'
import OffSection from './Components/OffSection/OffSection'
import SoapsForMD from './Components/Soaps/SoapsForMD'
import SoapForSM from './Components/Soaps/SoapsForSM'

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <section className=''>
        <Soaps></Soaps>
        <SoapsForMD></SoapsForMD>
        <SoapForSM></SoapForSM>
        <Aehenaeum></Aehenaeum>
        <FirstSlider></FirstSlider>
        <PostPoo></PostPoo>
        <SecondSlider></SecondSlider>
        <OffSection></OffSection>
        <DownloadOurApps></DownloadOurApps>
        <LiveNever></LiveNever>
        <SliderWithContent></SliderWithContent>
      </section>
    </main>
  )
}
