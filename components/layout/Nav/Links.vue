<script setup lang="ts">
import { cn } from "~/lib/utils";
const route = useRoute();
const routeName = "/" + route.name?.toString();

defineProps<{
  href: string;
}>();
</script>

<template>
  <NuxtLink
    :href="href"
    :class="
      cn(
        'px-8 py-4 hover:bg-secondary hover:text-secondary-foreground',
        routeName === href && 'bg-background text-foreground',
      )
    "
    ><slot
  /></NuxtLink>
</template>
