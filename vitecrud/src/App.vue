<template>
  <div>
    <nav class="ui inverted menu" >
        <a class="navbar-brand" href="/"></a>
            <router-link to="/users">
              <img src="./assets/logo.png" width="30" height="30" style="vertical-align:middle;margin:10px 0px" alt="">
            </router-link>
        <a href="/users"></a>
            <router-link to="/users">
              <div class="item" ><button class="black ui button" >Contacts</button></div>
            </router-link>
        <div class="item right aligned">
          <button class="black ui right aligned button "  @click="logout">
            <span>&nbsp;&nbsp;<i class="user icon"></i>&nbsp;&nbsp;</span>
          </button>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'App',
  components: {
   
  },
  methods: {
    logout() {
      firebase.auth().signOut()
        .then(()=>{
          this.$router.replace('/signin')
        })
        .catch((e)=>{
          alert(e.message)
        })
    }
  },
  }
</script>
<style scoped>

</style>
