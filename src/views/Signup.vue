<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
            <div>
                <h3>Signup</h3>
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
    
                <div class="my-3">
                    <button type="submit" class="btn btn-primary" @click="register">Signup</button>
                </div>
                <div class="my-3">
                    <button type="submit" class="btn btn-secondary" @click="signInWithGoogle">Sign in with google</button>
                </div>
            </form>
        </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'


export default {
    data() {
        return {
            email: '',
            password: '',
            auth: getAuth()
        }
    },
    methods: {
        register() {
            // need .value because ref()
        console.log(this.email)
        createUserWithEmailAndPassword(this.auth, this.email, this.password)
            .then((data) => {
                console.log("Successfully registered!")

                console.log(this.auth.currentUser)
                this.$router.push('/feed')
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            })
        },
        signInWithGoogle() {

        }
    }
}
</script>

<style>

</style>