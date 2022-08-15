<template>
  <div class="landing-container">
    <div class="login-overlay">
      <LoginRegister id="login-form" />
      <div id="top-overlay"></div>
      <div id="bottom-overlay"></div>
    </div>
    <!-- <div class="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yeC7hI7S7es?start=8&autoplay=1&showinfo=0&controls=0&autohide=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div> -->
    <div class="moving-products-grid">
      <section>
        <h1>More</h1>
      </section>

      <div class="gallery">
        <div class="col">
          <div class="image">
            <img
              src="https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
          <div class="image">
            <img
              src="https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
          <div class="image">
            <img
              src="https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg?cs=srgb&dl=pexels-beepin-10253213.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
        </div>
        <div class="col">
          <div class="image">
            <img
              src="https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?cs=srgb&dl=pexels-%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BF%D0%B0%D1%85%D0%BE%D0%BC%D0%BE%D0%B2-10050979.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
          <div class="image">
            <img
              src="https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg?cs=srgb&dl=pexels-nur-andi-ravsanjani-gusma-1128660.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
          <div class="image">
            <img
              src="https://images.pexels.com/photos/9699293/pexels-photo-9699293.jpeg?cs=srgb&dl=pexels-lada-rezantseva-9699293.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
        </div>
        <div class="col">
          <div class="image">
            <img
              src="https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg?cs=srgb&dl=pexels-daria-sannikova-6405575.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
          <div class="image">
            <img
              src="https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg?cs=srgb&dl=pexels-svetlana%F0%9F%8E%9E-10162526.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
          <div class="image">
            <img
              src="https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg?cs=srgb&dl=pexels-woodysmedia-4394807.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="static-products-grid"></div>
  </div>
</template>

<script>
import LoginRegister from "@/components/LoginRegister.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    LoginRegister,
  },
  mounted() {
    console.clear();

    gsap.registerPlugin(ScrollTrigger);

    function overlayAnimation() {
      let topOverlay = document.querySelector("#top-overlay");
      let bottomOverlay = document.querySelector("#bottom-overelay");
    }

    const additionalY = { val: 0 };
    let additionalYAnim;
    let offset = 0;
    const cols = gsap.utils.toArray(".col");

    cols.forEach((col, i) => {
      const images = col.childNodes;

      // DUPLICATE IMAGES FOR LOOP
      images.forEach((image) => {
        var clone = image.cloneNode(true);
        col.appendChild(clone);
      });

      // SET ANIMATION
      images.forEach((item) => {
        let columnHeight = item.parentElement.clientHeight;
        let direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

        gsap.to(item, {
          y: direction + Number(columnHeight / 2),
          duration: 20,
          repeat: -1,
          ease: "none",
          modifiers: {
            y: gsap.utils.unitize((y) => {
              if (direction == "+=") {
                offset += additionalY.val;
                y = (parseFloat(y) - offset) % (columnHeight * 0.5);
              } else {
                offset += additionalY.val;
                y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
              }

              return y;
            }),
          },
        });
      });
    });

    ScrollTrigger.create({
      trigger: "section",
      start: "top 50%",
      end: "bottom 50%",
      onUpdate: function (self) {
        const velocity = self.getVelocity();
        if (velocity > 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 2000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
        if (velocity < 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 3000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
      },
    });
  },
};
</script>

<style>
#login-form {
  z-index: 1000;
}
.landing-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.login-overlay {
  width: 100vw;
  height: 100vh;
  z-index: 20;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
}
#top-overlay {
  top: 0;
  width: 100%;
  height: 50%;
  position: absolute;
  background: black;
  opacity: 0.9;
}
#bottom-overlay {
  bottom: 0;
  width: 100%;
  height: 50%;
  position: absolute;
  background: black;
  opacity: 0.9;
}
iframe {
  border: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
section {
  padding: 10vw;
  height: 100%;
  min-height: 500vh;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: visible;
}

* {
  box-sizing: border-box;
}

.gallery {
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  overflow: visible;
  transform: rotate(45deg);
}
@media (max-width: 768px) {
  .gallery {
    width: 160%;
  }
}

.col {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-self: flex-start;
  justify-self: flex-start;
}

.col:nth-child(2) {
  align-self: flex-end;
  justify-self: flex-end;
}

.image {
  width: 100%;
  padding: 1rem;
}

img {
  transition: 0.3s ease-out;
  overflow: hidden;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  width: 100%;
}
.video {
  z-index: 10;
  position: relative;
}
.moving-products-grid {
  z-index: -1;
  position: relative;
}
</style>
