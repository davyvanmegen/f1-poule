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
                <p class="errMsg" v-if="errMsg">{{ errMsg }}</p>
                <div class="my-3">
                    <button type="button" class="btn btn-primary" @click="register">Signup</button>
                </div>
                <!-- <div class="my-3">
                    <button type="submit" class="btn btn-secondary" @click="signInWithGoogle">Sign in with google</button>
                </div> -->
            </form>
            <p>Heb je al een account? Log dan <router-link class="href" to="/login">hier</router-link> in.</p>
        </div>
        </div>
    </div>
</template>

<script>
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from 'vue-router'
import { auth } from '../firebase/init.js'
import db from '../firebase/init.js'
import { doc, setDoc, collection, addDoc, getDocs, query } from 'firebase/firestore'

export default {
    mounted () {
        this.getUserData()
    },
    data() {
        return {
            email: '',
            password1: '',
            password2: '',
            userName: '',
            errMsg: '',
            users: []
        }
    },
    methods: {

        async getUserData () {
            const querySnap = await getDocs(query(collection(db, 'users')))

            // Get all users Data
            querySnap.forEach((doc) => {
                this.users.push(doc.data())
            })
        },
        register() {

            const checkUsername = obj => obj.userName === this.userName;
            if (!(this.users.some(checkUsername))) 
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
                            this.sendUserData()
                            alert(`Succesvol geregistreerd: ${this.userName}`)
                            this.$router.push('/feed')
                            
                        })
                        .catch((error) => {
                            console.log(error.code);
                            //alert(error.message);
                            if (error.code === 'auth/missing-password') {
                                this.errMsg = 'You need to enter a password'
                            }
                            else if (error.code === 'auth/email-already-in-use') {
                                this.errMsg = 'This email is already in use'
                            }
                        })
                    } else {
                        this.errMsg = 'Passwords do not match'
                } else {this.errMsg = 'Username already exists'} 
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
.errMsg {
    color: red;
}
</style>