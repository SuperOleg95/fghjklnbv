<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
const { t } = useI18n();
const toast = useToast();

const state = reactive({
  email: undefined,
  password: undefined,
});

const logIn = async () => {
  navigateTo("/");
};

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Required" });
  if (!state.password) errors.push({ path: "password", message: "Required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
  logIn();
}
</script>

<template>
  <div class="dark:bg-gray-800 flex justify-center items-center h-screen">
    <div class="w-1/2 h-screen hidden lg:block">
      <img
        src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt="Placeholder Image"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="absolute top-5 right-5 space-x-2">
      <ColorThemeSelector />
      <PrimaryColorSelector />
    </div>
    <div class="lg:p-36 md:p-40 sm:20 p-8 w-full lg:w-1/2">
      <div class="ring-2 ring-gray-200 dark:ring-gray-600 rounded p-6">
        <h1 class="text-2xl font-semibold mb-4">Login</h1>

        <UForm
          :validate="validate"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup
            required
            label="Email"
            help="We'll only use this for spam ;)"
            class="mb-4"
          >
            <UInput
              placeholder="you@example.com"
              icon="i-heroicons-envelope"
              v-model="state.email"
            />
          </UFormGroup>

          <UFormGroup label="Password" required>
            <UInput
              type="password"
              placeholder="******"
              icon="i-heroicons-key"
              v-model="state.password"
            />
          </UFormGroup>

          <UButton type="submit" block size="xl"> Log in </UButton>
        </UForm>

        <!-- Sign up  Link -->
        <div class="mt-6 text-center">
          <a href="#" class="hover:text-primary-600">Sign up Here</a>
        </div>
      </div>
    </div>
  </div>
</template>
