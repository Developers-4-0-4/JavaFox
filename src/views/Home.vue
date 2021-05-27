<template>
  <div class="home">
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">          
          <SectionOne/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionOne from '@/components/Home/SectionOne'
import Navbar from '@/components/Navbar'

export default {
  name: 'Home',
  components: {
    SectionOne,
    Navbar
  }
}
</script>
