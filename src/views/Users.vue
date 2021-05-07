<template>
    <div id="pagespace" class=".container-fluid">
        <div class="ui stacked segment">
          <div class="ui teal right segment">
          <div class="row">
            <div class="col-lg-12">
              <div class="input-group">
                <span class="ui teal left ribbon label"> Contacts</span>
                
                <input type="text" class="form-control" placeholder="Search for..." v-model="search">

                <router-link to="/adduser">
                  <span>&nbsp;&nbsp;<button class="ui orange button"> <i class="plus icon"></i>Add</button></span>
                </router-link>
                <span class="input-group-btn">
                  &nbsp;&nbsp;<button class="ui button" type="button">
                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                    Search
                  </button>
               </div>
              </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->
          </div><!-- /.row -->
        </div>
        <br>

        <div class="ui stacked segment">
          <div class="ui link cards">



        <div class="card" v-for="user_alias in filterUsers" v-bind:key="user_alias.id">
          <div class="image">
            <img v-bind:src= "user_alias.imageurl" >
          </div>
                <div class="content">
                  <div class="header">
                      <span>{{ user_alias.firstname }}</span><span>&nbsp;&nbsp;</span>
                      <span>{{ user_alias.middlename }} </span><span>&nbsp;&nbsp;</span>
                      <span>{{ user_alias.lastname }}</span><span>&nbsp;&nbsp;</span>
                  </div>
                  <div class="description">
                      <p>Mobile: {{ user_alias.mobile }}</p>
                      <p>Email: {{ user_alias.email }}</p>
                      <p>Facebook: {{ user_alias.facebook }}</p>
                  </div>
                </div>
                 <div class="extra content">


                   <router-link :to="{ path: 'updateuser', name: 'UpdateUser', params:{userId: user_alias._id} }">
                          <button class="ui blue icon button">
                        <i class="edit outline icon"></i>
                      </button>
                        </router-link>   
                      
                      <router-link to="/users">
                         <button class="ui red icon button"  @click="delUser(user_alias._id)">
                        <i class="erase icon"></i>
                      </button>
                        </router-link>
                      
                </div>
                </div>


    <div class="modal fade bd-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Are you sure?</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this item? </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <router-link to="/users">
                 <button type="button" class="btn btn-danger" @click="delUser(uid)">Delete</button>
              </router-link>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'Users',

  data() {
    return {
        Users: [],
        search: '',
        uid: ''
        /* pics:'picture' */
    }
  },
  mounted () {
      axios.get('https://contact3142.herokuapp.com/users')
        .then((response)=>{
            console.log(response.data)
            this.Users = response.data
        })
        .catch((error)=>{
            console.log(error)
        })
  },
  computed : {
    filterUsers: function(){
        return this.Users.filter((user)=>{
          if(user.firstname.match(this.search)) return user.firstname.match(this.search) 
          else return user.lastname.match(this.search)
           
        })
    }
  },
  methods: {
      DELETE(id) {
          this.uid = id
      },
      delUser(UserId){
          axios.delete('https://contact3142.herokuapp.com/users/'+UserId)
        .then(()=>{
            console.log('Delete userId: '+UserId)
        })
        .catch((error)=>{
            console.log(error)
        })
        window.location.reload()
      },

  }
}
</script>

<style scoped>
#pagespace{
  max-width: auto;
  margin: 0px 140px;
}
</style>
