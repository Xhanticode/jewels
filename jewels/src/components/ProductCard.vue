<template>
  <div class="product-card">
    <img :src="product.img" alt="Jewellery" class="product-image" />
    <h4>{{ product.title }}</h4>
    <p>Price {{ product.price }}</p>
    <button>
      <svg
        width="15"
        height="15"
        viewBox="0 0 210 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 80C11.215 80 0 91.215 0 105C0 118.785 11.215 130 25 130C38.785 130 50 118.785 50 105C50 91.215 38.785 80 25 80Z"
          fill="black"
        />
        <path
          d="M105 80C91.215 80 80 91.215 80 105C80 118.785 91.215 130 105 130C118.785 130 130 118.785 130 105C130 91.215 118.785 80 105 80Z"
          fill="black"
        />
        <path
          d="M185 80C171.215 80 160 91.215 160 105C160 118.785 171.215 130 185 130C198.785 130 210 118.785 210 105C210 91.215 198.785 80 185 80Z"
          fill="black"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>

<style lang="scss">
.product-card {
  width: 12rem;
  height: 16rem;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  .product-image {
    width: 100%;
    height: 8rem;
    object-fit: cover;
    border-radius: 0.8rem;
  }
  button {
    background: transparent;
    border: none;
  }
}
</style>
