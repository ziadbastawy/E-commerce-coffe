<template>
  <div class="reviews">
    <h4 class="title">
      Reviews
    </h4>
    <div class="list">
      <div v-for="(review, id) in reviews" :key="id" class="all-reviews">
        <review-card
          :video="review.video"
          :title="review.title"
          :description="review.description"
          :tags="review.tags"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ReviewCard from './ReviewCard.vue'
export default {
  components: { ReviewCard },
  data () {
    return {
      reviews: [
        {
          video: require('@/assets/images/Nature.mp4'),
          title: 'The Olympia Cremina',
          description:
            'We have seen increased interest in our Olympia Cremina model.  Watch this video review and find out what independent expert James Hoffman has to say.',
          tags: ['Olympia Cremina', 'James Hoffman']
        },
        {
          video: require('@/assets/images/Nature.mp4'),
          title: 'Coffee Brewing Essentials w/ Tim Wendelboe',
          description:
            'Tim Wendelboe is a coffee roastery, espresso bar, and a coffee school focusing on importing the very best coffees, building relationships, developing quality with coffee producers around the world,',
          tags: ['Wendelboe']
        },
        {
          video: require('@/assets/images/Nature.mp4'),
          title:
            'The Story of Coffee - FULL EPISODE | Original Fare | PBS Food',
          description:
            'Watch Kelly\'s quest to learn the true story of coffee. She heads to Colombia, the land of Juan Valdez, to learn not only how coffee beans are grown, but to also explore the deeper connection between coffee and the people who grow it.',
          tags: ['PBS Food', 'Coffee']
        },
        {
          video: require('@/assets/images/Nature.mp4'),
          title: 'The Right Roast - Milan Coffee Scene',
          description:
            'This time, our destination was a gorgeous city of Milan, Italy and it was at Christmas time! On this trip we attended Milan Coffee Festival, took a roadtrip with some frIends and visited a few roasteries and cafes. ',
          tags: ['Milan']
        },
        {
          video: require('@/assets/images/Nature.mp4'),
          title:
            'The Caffeine Show Ep6. Coffee Masters and festivals, Brewing with Cat and Chinese Coffee',
          description:
            'The contestants for London\'s Coffee Masters event are revealed with their entry videos. Coffee Mixologist competition at Amsterdam Coffee Festival. Brewing with Cat, Instafamous feed.',
          tags: ['Chinese Coffee', 'The Caffeine Show']
        },
        {
          video: require('@/assets/images/Nature.mp4'),
          title: 'How to: Three Ways to Cold Brew Coffee',
          description:
            'With a tiny bit of prep work, you can have smooth cold brew coffee in your life week after delicious week. We’ll show you how using three different techniques—a coffee press, a Mason jar and the Toddy® Cold Brew System.',
          tags: ['Cold Brew coffee']
        },
        {
          video: require('@/assets/images/Nature.mp4'),
          title: 'How to Pour Latte Art',
          description:
            'Have you ever wondered how the barista gets those lovely delicate layers of designs to show up on top of your favorite drink? The secret is all in the milk! In this video guide, we will cover step by step how to pour latte art, starting with steaming technique.',
          tags: ['Pour Latte', 'Art']
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped></style>
