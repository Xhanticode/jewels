<template>
  <div class="app-container">
    <div class="app-content">
      <SideBar />
      <div class="projects-section">
        <div class="projects-section-header" d-flex style="gap: 1rem">
          <p>My Profile</p>
        </div>
        <div class="profile-content">
          <div class="image-side">
            <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
            <span>Carla L.</span>
          </div>
          <div class="info-side"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    SideBar,
  },
};
</script>
<style>
.profile-content {
  display: flex;
  gap: 2rem;
}
.image-side {
  border-right: 0.5rem solid var(--message-box-border);
}
</style>
