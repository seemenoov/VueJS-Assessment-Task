<script setup>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

const form = reactive({
  email: "",
  password: "",
});

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
};

const v$ = useVuelidate(rules, form);

const router = useRouter();

const isFormValid = computed(() => {
  return form.email && form.password;
});

const login = async () => {
  const isValidForm = await v$.value.$validate();

  if (isValidForm) router.push("/game");
};
</script>

<template>
  <v-card class="mx-auto" width="600">
    <v-card-title>Login Form</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          required
          label="Email"
          :error-messages="v$.email.$errors.map((e) => e.$message)"
          v-model="form.email"
        ></v-text-field>
        <v-text-field
          required
          label="password"
          :error-messages="v$.password.$errors.map((e) => e.$message)"
          v-model="form.password"
          type="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn :disabled="!isFormValid" @click="login">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>
