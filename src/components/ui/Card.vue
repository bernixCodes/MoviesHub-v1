<template>

    <div class="card mt-4 me-4 p-0" :title='movie.title' style="width: 10rem;">
  <img class="card-img-top" :src="posterPath" alt="">
  <div class="card-body details">
    <h6 class="card-text "> 
     <a href="#" class="titleText"> {{movie.title}}</a>
    </h6>
    <!-- <span>{{movie.release_date}}</span> -->
    <span class="lightTheme">{{relaseDate}}</span>
  </div>
</div>
</template>
<style scoped>
 .titleText{
   font-weight: bolder;
   color: black;

   
 }
 .details{
   align-items: flex-start;
   /* margin: 3px 0 ; */
   /* padding-left: 7px; */
 }
 .lightTheme{
   font-weight: lighter;
 }
</style>
<script>
export default {
  props:{
    movie:{
      required:true
    }
  },
  computed:{
    relaseDate(){
      let movieReleaseDate = new Date(this.movie.release_date).toLocaleDateString('en-us', {  year:"numeric", month:"short", day:"numeric"}) 
      return movieReleaseDate
    },
    posterPath(){
      return 'https://image.tmdb.org/t/p/w500/' + this.movie.poster_path
    }
  }
}
</script>