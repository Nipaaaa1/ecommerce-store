<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  body: string;
}>();
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
      <CardDescription>{{ subtitle }}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>
        {{ body }}
      </p>
    </CardContent>
  </Card>
</template>
