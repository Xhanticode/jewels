<template>
  <div class="app-header">
    <div class="app-header-left">
      <p class="app-name">Jewels</p>
      <div class="search-wrapper">
        <input class="search-input" type="text" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="feather feather-search"
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </div>
    </div>
    <div class="app-header-right">
      <button class="mode-switch" title="Switch Theme" @click="changeTheme">
        <svg
          width="60"
          height="25"
          viewBox="0 0 123 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- <path
            d="M97.2188 51.0225H25.7813C11.8628 51.0225 0.540001 39.6997 0.540001 25.7812C0.540001 11.8628 11.8628 0.539993 25.7813 0.539993H97.2188C111.137 0.539993 122.46 11.8628 122.46 25.7812C122.46 39.6997 111.137 51.0225 97.2188 51.0225ZM25.7813 3.39749C13.4384 3.39749 3.3975 13.4384 3.3975 25.7812C3.3975 38.1241 13.4384 48.165 25.7813 48.165H97.2188C109.562 48.165 119.603 38.1241 119.603 25.7812C119.603 13.4384 109.562 3.39749 97.2188 3.39749H25.7813ZM25.7813 39.1162C18.4272 39.1162 12.4463 33.1353 12.4463 25.7812C12.4463 18.4272 18.4272 12.4462 25.7813 12.4462C33.1353 12.4462 39.1162 18.4272 39.1162 25.7812C39.1162 33.1353 33.1353 39.1162 25.7813 39.1162ZM25.7813 15.3037C20.0028 15.3037 15.3038 20.0027 15.3038 25.7812C15.3038 31.5597 20.0028 36.2587 25.7813 36.2587C31.5598 36.2587 36.2588 31.5597 36.2588 25.7812C36.2588 20.0027 31.5598 15.3037 25.7813 15.3037Z"
            fill="black"
          /> -->
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.7813 50.0225H97.2188C110.585 50.0225 121.46 39.1474 121.46 25.7812C121.46 12.4151 110.585 1.53999 97.2188 1.53999H25.7813C12.4151 1.53999 1.54 12.4151 1.54 25.7812C1.54 39.1474 12.4151 50.0225 25.7813 50.0225ZM2.3975 25.7812C2.3975 12.8861 12.8862 2.39749 25.7813 2.39749H97.2188C110.114 2.39749 120.603 12.8861 120.603 25.7812C120.603 38.6763 110.114 49.165 97.2188 49.165H25.7813C12.8862 49.165 2.3975 38.6763 2.3975 25.7812ZM13.4463 25.7812C13.4463 32.5831 18.9794 38.1162 25.7813 38.1162C32.5831 38.1162 38.1162 32.5831 38.1162 25.7812C38.1162 18.9794 32.5831 13.4462 25.7813 13.4462C18.9794 13.4462 13.4463 18.9794 13.4463 25.7812ZM14.3038 25.7812C14.3038 19.4505 19.4505 14.3037 25.7813 14.3037C32.112 14.3037 37.2588 19.4505 37.2588 25.7812C37.2588 32.112 32.112 37.2587 25.7813 37.2587C19.4505 37.2587 14.3038 32.112 14.3038 25.7812ZM25.7813 51.0225H97.2188C111.137 51.0225 122.46 39.6996 122.46 25.7812C122.46 11.8628 111.137 0.539993 97.2188 0.539993H25.7813C11.8628 0.539993 0.540001 11.8628 0.540001 25.7812C0.540001 39.6996 11.8628 51.0225 25.7813 51.0225ZM3.3975 25.7812C3.3975 13.4384 13.4384 3.39749 25.7813 3.39749H97.2188C109.562 3.39749 119.603 13.4384 119.603 25.7812C119.603 38.1241 109.562 48.165 97.2188 48.165H25.7813C13.4384 48.165 3.3975 38.1241 3.3975 25.7812ZM12.4463 25.7812C12.4463 33.1353 18.4272 39.1162 25.7813 39.1162C33.1353 39.1162 39.1162 33.1353 39.1162 25.7812C39.1162 18.4272 33.1353 12.4462 25.7813 12.4462C18.4272 12.4462 12.4463 18.4272 12.4463 25.7812ZM15.3038 25.7812C15.3038 20.0027 20.0028 15.3037 25.7813 15.3037C31.5598 15.3037 36.2588 20.0027 36.2588 25.7812C36.2588 31.5597 31.5598 36.2587 25.7813 36.2587C20.0028 36.2587 15.3038 31.5597 15.3038 25.7812Z"
            fill="black"
          />
        </svg>
      </button>
      <button
        class="profile-btn"
        @click="
          $router.push({ name: 'profile', params: { id: $route.params.id } })
        "
      >
        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
        <span>Carla L.</span>
      </button>
    </div>
    <button class="messages-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-message-circle"
      >
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  props: {
    msg: String,
  },
  data() {
    return {
      isActive: false,
      dark: false,
    };
  },
  methods: {
    changeTheme() {
      let themeSwitch = document.querySelector(".mode-switch");
      themeSwitch.classList.toggle("active");
      document.documentElement.classList.toggle("dark");
    },
  },
};
</script>

<style lang="scss">
.app {
  &-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--app-container);
    transition: 0.2s;
    max-width: 1800px;

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: "DM Sans", sans-serif;
    }
  }

  &-content {
    display: flex;
    height: 100%;
    overflow: hidden;
    padding: 16px 24px 24px 0;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 24px;
    position: relative;
    background: transparent;

    &-left,
    &-right {
      display: flex;
      align-items: center;
    }

    &-left {
      flex-grow: 1;
    }

    &-right button {
      margin-left: 10px;
    }
  }

  &-icon {
    width: 26px;
    height: 2px;
    border-radius: 4px;
    background-color: var(--main-color);
    position: relative;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 12px;
      height: 2px;
      border-radius: 4px;
      background-color: var(--main-color);
      left: 50%;
      transform: translatex(-50%);
    }

    &:before {
      top: -6px;
    }
    &:after {
      bottom: -6px;
    }
  }

  &-name {
    color: var(--main-color);
    margin: 0;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0 32px;
  }
}

.mode-switch {
  background-color: transparent;
  border: none;
  padding: 0;
  color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-wrapper {
  border-radius: 20px;
  background-color: var(--search-area-bg);
  padding-right: 12px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 480px;
  color: var(--light-font);
  box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
    0 24px 20px -24px rgba(71, 82, 107, 0.1);
  overflow: hidden;

  .dark & {
    box-shadow: none;
  }
}

.search-input {
  border: none;
  flex: 1;
  outline: none;
  height: 100%;
  padding: 0 20px;
  font-size: 16px;
  background-color: var(--search-area-bg);
  color: var(--main-color);
  opacity: 0.6;
}

.add-btn {
  color: #fff;
  background-color: var(--button-bg);
  padding: 0;
  border: 0;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-btn {
  color: var(--main-color);
  padding: 0;
  border: 0;
  background-color: transparent;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-btn {
  padding: 0;
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding-left: 12px;
  border-left: 2px solid #ddd;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 4px;
  }

  span {
    color: var(--main-color);
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  }
}

.page-content {
  flex: 1;
  width: 100%;
}
</style>
