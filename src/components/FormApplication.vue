<template>
  <FormulateForm
    v-model="formDetails"
    @submit="formSubmit"
    class="form-container"
  >
    <h1 class="form-title">Student Registration Form</h1>
    <FormulateInput
      name="name"
      type="text"
      label="Name"
      validation="required"
      help="Your name must begin with capital letter"
    />
    <FormulateInput
      name="email"
      type="email"
      label="Email"
      validation="^required|email"
      autocomplete="off"
    />

    <FormulateInput
      type="password"
      name="password"
      label="Password"
      validation="^required|min:6,length"
      help="Your password must be at least 6 characters long."
      autocomplete="off"
    />
    <FormulateInput
      type="number"
      name="Course number"
      label="Course Number"
      validation="^required|min:4,length"
    />
    <FormulateInput
      name="terms"
      type="checkbox"
      label="I accept, and have inputted the correct details."
      validation="accepted"
    />

    <FormulateInput type="submit" label="Register" />
    <h2>Form Details Box</h2>
    <p>{{ formDetails }}</p>
  </FormulateForm>
</template>


<script>
export default {
  name: "Signup",
  components: {},
  data: () => ({
    formDetails: {},
  }),
  methods: {
    formSubmit() {
      alert("Welcome! You have sucessfully signed up to your account");
    },
  },
};
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap");
* {
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}

.border {
  border-color: #3d9421;
}

.form-title {
  font-size: 20px;
  font-weight: bolder;
  line-height: 70px;
}

.form-container {
  display: grid;
  background: white;
  width: 448px;
  margin: auto;
  padding: 50px;
  border-left-width: 4px;
  border: 1px;
  border-radius: 0.75rem;
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>


