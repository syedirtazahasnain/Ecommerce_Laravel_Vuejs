<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-2">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        {{ title }}
      </h2>
    </div>
    <form class="space-y-6" @submit.prevent="emit('submit')" method="POST">
      <slot></slot>
    </form>
  </div>
</template>

<style scoped></style>
<script setup>
const { title } = defineProps({
  title: String,
});
const emit = defineEmits(["submit"]);
name: "GuestLayout";
</script>
