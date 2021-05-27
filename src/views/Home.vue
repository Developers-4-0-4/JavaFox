<template>
  <div class="home">
    <Navbar/>         
    <div >
      <SectionOne sectionOne="section"/>
      <CardsCategoria Categoria="contatolink"/>
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionOne from '@/components/Home/SectionOne'
import CardsCategoria from '@/components/Home/CardsCategoria'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Navbar'

export default {
  name: 'Home',
  components: {
    SectionOne,
    Navbar,
    CardsCategoria,
    Footer
  }
}
</script>
