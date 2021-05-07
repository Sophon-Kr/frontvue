<template>
    <div class="container">
        <h1>Signin</h1>

        <div class="loginposition">
            <div class="ui stacked segment">
                <div class="ui teal right segment">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="input-group">
                                <span class="ui teal left ribbon label" style="font-size: 13px; font-weight: bold;">
                                    Login
                                </span>
                            </div>
                        </div><!-- /input-group -->
                    </div><!-- /.col-lg-6 -->
                </div><!-- /.row -->

                <div>
                    <div class="ui form">
                        <div class="field">
                            <label>Email</label>
                            <input type="email" v-model="formData.email" class="form-control" placeholder="email">
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <input type="password" v-model="formData.password" class="form-control"
                                placeholder="password">
                        </div>

                        <div style="text-align: left;">
                            <button class="ui left button" type="submit" @click="signIn">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>
<script>
    import firebase from 'firebase'
    export default {
        name: 'SignIn',
        data() {
            return {
                formData: {
                    email: '',
                    password: ''
                },
                errorMessgae: '',
                succeessMessage: ''
            }
        },
        methods: {
            signIn() {
                 if (this.formData.email == "bob") {
        if (this.formData.password == "1234") {
          this.$router.replace("/users");
          this.succeessMessage = "Success";
        } else {
          alert("Password do");
          this.errorMessgae = "Password do";
        }
      } else {
        alert("do not have username");
        this.errorMessgae = "do not have username";
      }
            }
        },
    }
</script>

<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .loginposition {
        margin: 80px auto;
        max-width: 550px;
    }

    label {
        text-align: left;
    }
</style>