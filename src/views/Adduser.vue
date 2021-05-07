<template>
  <div id="pagespace" class="container-fluid">
    <form>
      <div class="well">
      <div class="ui stacked segment">
          <div style="text-align: left;">
          <label style="font-size: large; font-weight: bold;">Contact&nbsp;&nbsp;</label>
          <span><button class="ui mini teal button">Add</button> </span>
          </div>
          <div class="ui divider"></div>


        <div class="ui form">
          <div class="required field">
           <label >Contact ID</label>
              <input type="text" placeholder="Contact ID" v-model="User.userid">
          </div>
        <div class="required inline field">

        <div class="ui form">
          <div class="required field">
           <label >First Name</label>
              <input type="text" placeholder="First Name" v-model="User.firstname">
          </div>
        <div class="required inline field">

        <div class="ui form">
          <div class="required field">
           <label >Last Name</label>
              <input type="text" placeholder="Last Name" v-model="User.lastname">
          </div>
        <div class="required inline field">


        <div class="ui form">
          <div class="required field">
           <label >Mobile No</label>
              <input type="text" placeholder="Mobile No" v-model="User.mobile">
           </div>
        <div class="required inline field">

        <div class="ui form">
          <div class="field">
           <label >Email</label>
              <input type="text" placeholder="Email" v-model="User.email">
          </div>
        <div class="required inline field">

        <div class="ui form">
          <div class="field">
           <label >Facebook</label>
              <input type="text" placeholder="Facebook" v-model="User.facebook">
          </div>
        <div class="required inline field">

        <div class="ui form">
          <div class="field">
           <label >Image Url</label>
              <input type="text" placeholder="Image Url" v-model="User.imageurl">
          </div>
        <div class="required inline field">
          <br>

        <router-link to="/users">
          <div class="ui large basic icon buttons">
            <button type="submit" class="ui button" @click="addToAPI"><i class="save outline icon" ></i>Save</button>
            
            <button class="ui button"><i class="x icon"></i>Close</button>  
          </div>
           </router-link>
    </form>

</template>
<script>
import axios from 'axios'
export default {
  name: 'AddUser',
  data() {
    return {
        User: {
                userid : '',
                firstname :'',
                lastname : '',
                middlename : '',
                gender : '',
                email : '',
                mobile : '',
                facebook : '',
                imageurl : ''
            }
        } 
  },
  methods: {
      addToAPI () {
          let newUser = {
                userid : this.User.userid,
                firstname :this.User.firstname,
                lastname : this.User.lastname,
                middlename : this.User.middlename,
                gender : this.User.gender,
                email : this.User.email,
                mobile : this.User.mobile,
                facebook : this.User.facebook,
                imageurl : this.User.imageurl
                
            }
       axios.post('https://contact3142.herokuapp.com/users', newUser)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
      }
  }
}
</script>
<style scoped>

label{
  text-align: left;
  
}
#pagespace{
  max-width: auto;
  padding: 0px 200px;
  margin-top: 20px;
  
}
</style>
