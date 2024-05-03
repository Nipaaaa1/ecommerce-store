<template>
  <div class="w-full">
    <LayoutNav>
      <LayoutNavLinks href="/admin">Dashboard</LayoutNavLinks>
      <LayoutNavLinks href="/admin/products">Products</LayoutNavLinks>
      <LayoutNavLinks href="/admin/users">Customers</LayoutNavLinks>
      <LayoutNavLinks href="/admin/orders">Sales</LayoutNavLinks>
    </LayoutNav>
    <main class="container my-6 mx-auto">
      <slot />
    </main>
  </div>
</template>
