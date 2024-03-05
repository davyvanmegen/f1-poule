<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
            <div>
                <h3>Login to your account</h3>
                <hr />
            </div>
            <form>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="email"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="password"/>
                </div>
                <p class="errMsg" v-if="errMsg">{{ errMsg }}</p>
                <div class="my-3">
                    <button type="submit" class="btn btn-primary" @click="login">Login</button>
                </div>

                <p>Nog geen account? Maak dan <router-link class="href" to="/signup">hier</router-link> een account aan</p>

                <!-- <div class="my-3">
                    <button type="submit" class="btn btn-secondary" @click="signInWithGoogle">Login with google</button>
                </div> -->
            </form>
        </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
import { auth } from '../firebase/init.js'


export default {
    data() {
        return {
            email: '',
            password: '',
            errMsg: null
        }
    },
    methods: {
        login() {
            // need .value because ref()
        console.log(this.email)
        signInWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
                console.log("Successfully logged in")

                console.log(auth.currentUser)
                
                this.$router.push('/feed')
            })
            .catch((error) => {
                console.log(error.code)
                switch (error.code) {
                    case "auth/invalid-email":
                        this.errMsg = "Invalid email"
                        break
                    case "auth/user-not-found":
                        this.errMsg = "No account with that email was found"
                        break
                    case "auth/wrong-password":
                        this.errMsg = "Incorrect password"
                        break
                    default:
                        this.errMsg = "Email or password was incorrect"
                        break
                }
            })
        },
        signInWithGoogle() {

        }
    }
}
</script>

<style>
.errMsg {
    color: red;
}
</style>