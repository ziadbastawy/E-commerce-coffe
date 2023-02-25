<template>
  <div class="review my-4">
    <CbreadCrumb :bread-crumb-array="yourArray" />

    <b-row align-h="center">
      <b-col cols="12" lg="8">
        <div class="media mb-5">
          <video src="@/assets/images/Nature.mp4" controls class="w-100" />
        </div>
        <div class="content">
          <h2 class="title font-weight-bold">
            The Olympia Cremina
          </h2>
          <p class="description">
            We have seen increased interest in our Olympia Cremina model. Watch
            this video review and find out what independent expert James Hoffman
            has to say.
          </p>
          <p class="description">
            Founded in 2018 as a roaster selling only online, the pandemic
            tripled business practically overnight and in mid-2020, they were
            offered a spot in the newly formed Outer Sunset Farmers Market. It
            quickly became clear between multiple daily load-ins and outs that a
            mobile unit was needed.
          </p>
        </div>
        <div class="tags">
          <span class="tag">Olympia Cremina</span>
          <span class="tag">James Hoffman</span>
        </div>
        <hr>
        <SliderProduct title="Products in this video" :slides-to-show="3" />
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      yourArray: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Reviews',
          to: '/blog/reviews/'
        },
        {
          text: 'Single Review',
          active: true
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.review {
  .media {
    video {
      border-radius: $default-radios * 2;
    }
  }
  .content {
    .title {
      color: #181818;
    }
    .description {
      color: $gray-dark;
    }
  }
}
</style>
