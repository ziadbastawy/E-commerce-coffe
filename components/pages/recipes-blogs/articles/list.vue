<template>
  <div class="all-articles">
    <div class="recipes-blog-filter">
      <div v-for="(filter, id) in filters" :key="id" class="filter my-2">
        <input :id="filter" type="checkbox" name="filter" class="d-none">
        <label :for="filter" class="m-0 rounded-pill text-center">
          {{ filter }}
        </label>
      </div>
    </div>

    <div class="articles">
      <b-row class="header" align-h="between" align-v="center">
        <b-col cols="12" md="5" lg="3">
          <h4 class="title">
            Van Cafes Articles
          </h4>
        </b-col>
        <b-col cols="12" md="5" lg="3">
          <b-form class="search-form">
            <b-form-group id="input-group-1">
              <b-form-input id="search" type="text" placeholder="Search …" />
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
      <div class="list">
        <div v-for="(article, id) in articles" :key="id" class="article">
          <article-card
            :date="article.date"
            :title="article.title"
            :image="article.image"
            :description="article.description"
            :big-media="article.bigMedia"
            :link="'/articles/1'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArticleCard from '../components/SingleItem.vue'
export default {
  components: { ArticleCard },
  data () {
    return {
      filters: [
        'Van Cafes',
        'Americano',
        'Espresso',
        'Doppio',
        'Cortado',
        'Red Eye',
        'Galão',
        'Macchiato',
        'Ristretto'
      ],
      articles: [
        {
          date: '23 Jan 2021',
          title: 'The Nostalgia And Beauty Of Vintage Camper Van Cafes',
          image: require('@/assets/images/blog/articles/article-1.jpg'),
          description:
            'Vintage campers—a phrase with a hotly debated definition—aren’t admired solely for their build or design. Instead, they’re tied to a lifestyle that harkens to a mid-century Americana dream of open, dirt roads and obligation-free travels. “From the cars and trailers to the music and culture, they call them the good old days for a reason.',
          bigMedia: true
        },
        {
          date: '25 Mar 2021',
          title:
            'Coffee Snacks Review: The Fiber One 70 Calorie Coffee Cake Soft-Baked Bar',
          image: require('@/assets/images/blog/articles/article-2.jpg'),
          description:
            'I’m a 36-year-old gay man and I enjoy fiber-rich snacks and Metamucil wafers. Fiber is important to everyone’s diet—and nearly all Americans just don’t get enough of it! As a lover of all things coffee and all things fiber, I was immediately drawn to this snack on my last visit to my local Albertson’s.'
        },
        {
          date: '23 Jan 2021',
          title:
            'Officine Fratelli Bambi: A New Bespoke Espresso Machine Studio From La Marzocco',
          image: require('@/assets/images/blog/articles/article-3.jpg'),
          description:
            'In the fall of 2019, the Italian espresso machine manufacturing company La Marzocco launched Accademia del Caffè Espresso, a cultural hub, research facility, interactive archive, and international visitors center housed in the company\'s original mid-century headquarters, high above the city of Flo…'
        },
        {
          date: '25 Mar 2021',
          title:
            'Coffee Sprudgecast Episode 97: The One With Even More Build-Outs',
          image: require('@/assets/images/blog/articles/article-4.jpg'),
          description:
            'The Coffee Sprudgecast Build-Outs of Coffee Spectacular series continues! In the third episode of the series, we\'re talking through some beautiful builds, from Mumbai to San Diego. The 2021 Build-Outs of Coffee feature series is presented by Fellow and sponsored by La Marzocco, Pacific Barista Series, Ma….'
        },
        {
          date: '25 Mar 2021',
          title:
            'Coffee Snacks Review: The Fiber One 70 Calorie Coffee Cake Soft-Baked Bar',
          image: require('@/assets/images/blog/articles/article-5.jpg'),
          description:
            'I’m a 36-year-old gay man and I enjoy fiber-rich snacks and Metamucil wafers. Fiber is important to everyone’s diet—and nearly all Americans just don’t get enough of it! As a lover of all things coffee and all things fiber, I was immediately drawn to this snack on my last visit to my local Albertson’s.'
        },
        {
          date: '23 Jan 2021',
          title:
            'Officine Fratelli Bambi: A New Bespoke Espresso Machine Studio From La Marzocco',
          image: require('@/assets/images/blog/articles/article-6.jpg'),
          description:
            'In the fall of 2019, the Italian espresso machine manufacturing company La Marzocco launched Accademia del Caffè Espresso, a cultural hub, research facility, interactive archive, and international visitors center housed in the company\'s original mid-century headquarters, high above the city of Flo…'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.articles {
  color: #000;
  .header {
    color: #000;
    .title {
      color: #000;
    }
    .search-form {
      color: #000;
      input {
        border: 2px solid #e3e3e3;
        border-radius: $default-radios;
        padding: 1rem;
        padding-top: 1.25rem;
        height: 2.75rem;
        &::placeholder {
          color: #bababa;
        }
        &:focus {
          border-color: $main-color;
          box-shadow: none;
        }
      }
    }
  }
}
</style>
