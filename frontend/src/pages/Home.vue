<template>
  <main>
    <form @submit.prevent="submit">
        <input type="text" required v-model="formData.roomNo" placeholder="Room No." style="max-width: 180px;"/>
        <input type="text" required v-model="formData.name" placeholder="Your Name"/>
        <input type="submit" value="Join">
    </form>
  </main>
</template>


<script>
export default {
  data() {
    return {
        formData: {
            roomNo: '',
            name: ''
        }
    };
  },
  mounted() {
  },
  methods: {
      submit() {
          console.log('hello')
          this.$router.push(`/playground/${this.formData.roomNo}`, { query: { name: this.formData.name }});
      }
  },
};
</script>


<style scoped>
main {
  height: 100vh;
  width: 100vw;
  background-image: url("~@/assets/images/background.jpg");
  background-size: cover;
}
form {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50px;
    overflow: hidden;
}
form input {
    font-size: 25px;
    padding: 20px 40px;
    border: none;
    outline: none;
}
form input[type="submit"] {
    background-color: rgb(56, 128, 77);
    color: white;
    cursor: pointer;
}
form input[type="submit"]:hover, form input[type="submit"]:focus {
    background-color: rgb(28, 88, 46);
    color: white;
    cursor: pointer;
}
</style>