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
                <p v-if="errMsg">{{ errMsg }}</p>
                <div class="my-3">
                    <button type="submit" class="btn btn-primary" @click="register">Login</button>
                </div>
                <div class="my-3">
                    <button type="submit" class="btn btn-secondary" @click="signInWithGoogle">Login with google</button>
                </div>
            </form>
        </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'


export default {
    data() {
        return {
            email: '',
            password: '',
            auth: getAuth(),
            errMsg: null
        }
    },
    methods: {
        register() {
            // need .value because ref()
        console.log(this.email)
        signInWithEmailAndPassword(this.auth, this.email, this.password)
            .then((data) => {
                console.log("Successfully logged in")

                console.log(this.auth.currentUser)
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

</style>