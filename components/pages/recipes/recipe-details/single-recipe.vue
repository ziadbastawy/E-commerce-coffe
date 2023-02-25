<template>
  <div>
    <CbreadCrumb :bread-crumb-array="yourArray" class="mt-4" />

    <b-row class="recipe-details" align-h="center">
      <b-col cols="12" lg="8" class="single-recipe">
        <div class="content">
          <div class="header my-4">
            <h1 class="title">
              French Cafe au Lait
            </h1>
            <p class="description mb-4 text-justify">
              This Mocha au Lait mix makes a great holiday gift, presented in a
              decorative holiday container or mug! Just make sure you remember
              to include the directions on a gift tag!
            </p>
            <div class="recipe-media">
              <div class="main-image mb-2">
                <img
                  src="@/assets/images/recipes/recipe-details/image-details-1.jpg"
                  alt="image-details"
                >
              </div>
              <div class="sub-images d-flex flex-wrap">
                <img
                  src="@/assets/images/recipes/recipe-details/image-details-1.jpg"
                  alt="image-details"
                  class="active"
                >
                <img
                  src="@/assets/images/recipes/recipe-details/image-details-2.jpg"
                  alt="image-details"
                >
                <img
                  src="@/assets/images/recipes/recipe-details/image-details-3.jpg"
                  alt="image-details"
                >
                <img
                  src="@/assets/images/recipes/recipe-details/image-details-4.jpg"
                  alt="image-details"
                >
                <img
                  src="@/assets/images/recipes/recipe-details/image-details-5.jpg"
                  alt="image-details"
                >
              </div>
            </div>
          </div>
          <hr>
          <div class="overview">
            <h5 class="title mb-4">
              Recipe overview
            </h5>
            <b-row class="recipe-info">
              <b-col
                v-for="(content, head, id) in recipeOverview"
                :key="id"
                cols="6"
                lg="3"
                class="mb-3"
              >
                <p class="head mb-1">
                  {{ head }}
                </p>
                <p class="content m-0">
                  {{ content }}
                </p>
              </b-col>
            </b-row>
          </div>
          <hr>
          <div class="ingredients position-relative">
            <h5 class="title mb-3">
              Ingredients
            </h5>
            <ul class="ingredients-list">
              <li
                v-for="(item, id) in ingredients"
                :key="id"
                class="d-flex align-items-center item mb-2"
              >
                <b-icon-check-circle-fill
                  v-if="item.checked"
                  style="fill:#27DC4E"
                  class="icon"
                />
                <b-icon-circle v-else class="icon" />
                <span class="name">
                  {{ item.name }}
                </span>
              </li>
            </ul>
            <c-button>Like Add cart</c-button>
          </div>
          <hr>
          <div class="directions">
            <h5 class="title mb-3">
              Directions
            </h5>
            <div class="steps">
              <div v-for="(step, id) in steps" :key="id" class="step mb-3">
                <p class="head text-uppercase mb-1">
                  step {{ id + 1 }}
                </p>
                <p class="content mb-0">
                  {{ step }}
                </p>
              </div>
            </div>
          </div>
          <hr>
          <SliderProduct title="Products in this recipe" :slides-to-show="3" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { BIconCircle, BIconCheckCircleFill } from 'bootstrap-vue'
export default {
  components: {
    BIconCircle,
    BIconCheckCircleFill
  },
  data () {
    return {
      recipeOverview: {
        Preperation: '10 mins',
        Total: '10 mins',
        Servings: 12,
        Yield: '12 servings'
      },
      ingredients: [
        {
          name: '1 ½ cups dry milk powder',
          checked: true
        },
        {
          name: '½ cup instant coffee granules',
          checked: false
        },
        {
          name: '⅓ cup brown sugar',
          checked: false
        },
        {
          name: '⅔ cup miniature semisweet chocolate chips',
          checked: false
        }
      ],
      steps: [
        'In a medium bowl, combine milk powder, instant coffee, brown sugar and mini chocolate chips. Mix well and store in an airtight container.',
        'Instructions per serving: In a blender, combine 2/3 cup boiling water with 1/4 cup mix. Blend until frothy and serve in a mug.'
      ],
      yourArray: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Recipes',
          to: '/recipes/'
        },
        {
          text: 'Single Recipe',
          active: true
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.recipe-details {
  .single-recipe {
    .content {
      .header {
        .title {
          font-size: 3rem;
        }
        .description {
          color: $gray-dark;
          line-height: 1.8rem;
        }
        .recipe-media {
          .main-image {
            height: 30rem;
            img {
              border-radius: $default-radios * 3;
            }
          }
          .sub-images {
            img {
              width: 5rem;
              height: 5rem;
              border: 1px solid #dcdcdc;
              padding: 0.3rem;
              border-radius: $default-radios * 2;
              margin-inline-end: 1.3rem;
              margin-block-start: 1rem;
              cursor: pointer;
              &.active {
                border-color: $main-color;
                box-shadow: 0 0 7px rgba($color: $main-color, $alpha: 0.4);
              }
            }
          }
        }
      }
      .overview {
        .recipe-info {
          .head {
            color: #8a8a8a;
            font-size: 11pt;
          }
          .content {
            color: $gray-dark;
            font-size: 13pt;
          }
        }
      }
      .ingredients {
        .ingredients-list {
          .item {
            .icon {
              margin-inline-end: 0.4rem;
              font-size: 16pt;
            }
            .name {
              color: $gray-dark;
            }
          }
        }
        button {
          position: absolute;
          right: 0;
          bottom: 0;
          @media (max-width: 767px) {
            position: relative;
            margin-inline-start: auto;
            margin-top: 1rem;
          }
        }
      }
      .directions {
        .steps {
          .step {
            .head {
              color: #8a8a8a;
              font-size: 11pt;
            }
            .content {
              color: $gray-dark;
              font-size: 13pt;
            }
          }
        }
      }
    }
  }
}
</style>
