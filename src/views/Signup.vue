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
                    <label>User name</label>
                    <input type="text" class="form-control" v-model="userName"/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="email"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="password1"/>
                </div>
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" class="form-control" v-model="password2"/>
                </div>
                <p v-if="errMsg">{{ errMsg }}</p>
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
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from 'vue-router'
import { auth } from '../firebase/init.js'
import db from '../firebase/init.js'
import { doc, setDoc, collection, addDoc } from 'firebase/firestore'

export default {
    data() {
        return {
            email: '',
            password1: '',
            password2: '',
            userName: '',
            errMsg: '',
        }
    },
    methods: {
        register() {
            // need .value because ref()
        if (this.password1==this.password2) {
            console.log(this.email)
            createUserWithEmailAndPassword(auth, this.email, this.password1)
                .then(() => {
                    console.log("Successfully registered!")

                    console.log(auth.currentUser)
                    updateProfile(auth.currentUser, {
                        displayName: this.userName
                    })
                    this.$router.push('/feed')
                    this.sendUserData()
                })
                .catch((error) => {
                    console.log(error.code);
                    alert(error.message);
                })
            } else {
                this.errMsg = 'Passwords do not match'
            }
        },
        signInWithGoogle() {

        },
        async sendUserData() {
            await setDoc(doc(db, 'users', this.userName), {
                userName: this.userName,
                email: this.email,
            }, {merge: true})
        }
    }
}
</script>

<style>

</style>