<template>
  <div class="home">
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex">          
          <SectionOne/>
        </div>
        <div class="col-12 mt-5">
          <CardsCategoria/>
        </div>
        <div class="col-12">
          <Footer />
        </div>
      </div>
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
