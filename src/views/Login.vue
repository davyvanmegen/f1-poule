<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
            <div>
                <h3>Log in op je account</h3>
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
                    <button type="button" class="btn btn-primary" @click="login">Inloggen</button>
                </div>

                <p>Nog geen account? Maak dan <router-link class="href" to="/signup">hier</router-link> een account aan</p>
            </form>
        </div>
        </div>
    </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
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
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    this.$router.push('/feed')
                })
                .catch((error) => {
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
                });
        },
    }
}
</script>

<style>
.errMsg {
    color: red;
}
</style>