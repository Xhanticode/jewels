<template>
  <div>
    <form @submit.prevent="login" class="login-form">
      <input type="email" placeholder="Email" required v-model="email" />
      <input
        type="password"
        placeholder="Password"
        required
        v-model="password"
      />
      <button type="submit">Login</button>
      <p>Don't have an account? register</p>
    </form>
    <div v-if="user">welcome {{ user.fullname }}</div>
  </div>
</template>

<script>
export default {
  name: "LoginRegister",

  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss">
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  background: black;
  padding: 2rem;
  height: 26rem;
  input {
    border: none;
    border-bottom: 0.05rem solid white;
    background: none;
    color: white;
    &:focus {
      border: none;
      outline: none;
      border-bottom: 0.05rem solid white;
    }
  }
  button {
    padding: 0.2rem;
    width: 6rem;
    align-self: center;
    border: none;
  }
}
</style>
