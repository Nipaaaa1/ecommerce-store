<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

const [salesData, userData, productData] = await Promise.all([
  useFetch("/api/sales", {
    pick: ["amount", "numberOfSales"],
  }),
  useFetch("/api/user", {
    pick: ["userCount", "averageValuePerUser"],
  }),
  useFetch("/api/product", {
    pick: ["activeCount", "inactiveCount"],
  }),
]);
</script>

<template>
  <NuxtLayout>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <LayoutCard
        title="Sales"
        :subtitle="`${formatNumber(salesData.data.value?.numberOfSales as number)} orders`"
        :body="formatCurrency(salesData.data.value?.amount as number)"
      />
      <LayoutCard
        title="Customers"
        :subtitle="`${formatCurrency(userData.data.value?.averageValuePerUser as number)} Average Value`"
        :body="formatNumber(userData.data.value?.userCount as number)"
      />
      <LayoutCard
        title="Active Product"
        :subtitle="`${formatNumber(productData.data.value?.inactiveCount as number)} Inactive`"
        :body="formatNumber(productData.data.value?.activeCount as number)"
      />
    </div>
  </NuxtLayout>
</template>
