<template>

<div class="container-fluid">
          <div class="row"> 
            <div class="col-3">

            </div>
            <div class=" row col-9">
      <Card :key="movie.id"  v-for="movie in movies" :movie='movie'/>
              
            </div>
          </div>
    
  </div>
</template>

<script>

  import Card from '@/components/ui/Card';
 import axios from 'axios'
export default {
  name: 'UpComing',
  components: {
   Card
  },
  data (){
    return{
      movies: []
    }
  },

 async created(){
  await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=16a129b18934615edbe3f8396f0755a8')
   .then(res => {
     this.movies = res.data.results;
     console.log(res.data);
   })
 }
}
</script>

