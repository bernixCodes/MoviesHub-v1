<template>
   <div id="nav">
   <nav class="navbar navbar-expand-lg  ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="@/assets/logo.svg" width="120" height="84"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header" aria-controls="header" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="header">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item dropdown">
          <a class="nav-link  defaultTextColor" href="#" id="moviesDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Movies
          </a>
          <ul class="dropdown-menu" aria-labelledby="moviesDropDown">
            <li><router-link class="dropdown-item " :to="{name: 'Home'}">Popular</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'NowPlaying'}">Now Playing</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'UpComing'}">Upcoming</router-link></li>
            <li><router-link class="dropdown-item" :to="{name : 'TopRated'}">Top Rated</router-link></li>
          </ul>
        </li>

         <li class="nav-item dropdown ms-3">
          <a class="nav-link  defaultTextColor" href="#" id="TvShowsDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TV Shows
          </a>
          <ul class="dropdown-menu" aria-labelledby="TvShowsDropDown">
            <li><a class="dropdown-item" href="#">Popular</a></li>
            <li><a class="dropdown-item" href="#">Airing Today</a></li>
            <li><a class="dropdown-item" href="#">On Tv</a></li>
            <li><a class="dropdown-item" href="#">Top Rated</a></li>
          </ul>
        </li>

         <li class="nav-item dropdown ms-3">
          <a class="nav-link  defaultTextColor" href="#" id="PeopleDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           People
          </a>
          <ul class="dropdown-menu" aria-labelledby="PeopleDropDown">
            <li><a class="dropdown-item" href="#">Popular People</a></li>
          </ul>
        </li>
       
      </ul>
     
     <ul class="navbar-nav ">
          <li class="nav-item">
          <router-link class="nav-link defaultTextColor me-3"  :to="{name: 'Login'}">Login</router-link>
        </li>
          <li class="nav-item">
          <router-link class="nav-link defaultTextColor"  :to="{name : 'SignUp'}">Join TMDB</router-link>
        </li>
     </ul>
     
    </div>
  </div>
</nav>
   
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
nav{
  background-color: #032541;
  height: 70px;
  align-content: center;
  padding: 0 9%;
  font-weight: bold;
  font-size: .8rem;
}
.defaultTextColor{
  color: white !important;
}
.dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0; 
 }

</style>