<template>
 <TheHeader/>
  <div class="container-fluid">
          <router-view/>
           
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'
export default {
  components:{TheHeader}
}
</script>
<style>

</style>
