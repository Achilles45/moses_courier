<template>
  <div class="home">
    <Navbar />
    <Banner />
    <Tracking />
    <Intro />
    <Why />
    <Testimonial />
    <VideoSection />
    <Partners />
    <Services />
    <App />
    <News />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Tracking from '@/components/Tracking'
import Intro from '@/components/Intro'
import Why from '@/components/Why'
import Testimonial from '@/components/Testimonial'
import VideoSection from '@/components/VideoSection'
import Partners from '@/components/Partners'
import Services from '@/components/Services'
import App from '@/components/App'
import News from '@/components/News'
import Footer from '@/components/Footer'
export default {
  components:{
    Navbar,
    Banner,
    Tracking,
    Intro,
    Why,
    Testimonial,
    VideoSection,
    Partners,
    Services,
    App,
    News,
    Footer
  }
}
</script>
