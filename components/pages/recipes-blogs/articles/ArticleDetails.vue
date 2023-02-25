<template>
  <div class="article my-4">
    <CbreadCrumb :bread-crumb-array="yourArray" />
    <b-row align-h="center">
      <b-col cols="12" lg="8">
        <p class="date">
          23 Jan 2021
        </p>
        <h1 class="title">
          The Nostalgia And Beauty Of Vintage Camper Van Cafes
        </h1>
        <img
          src="@/assets/images/blog/articles/article-1.jpg"
          alt="article image"
        >
        <p class="description">
          lose your eyes and picture the gentle metallic curves of an Airstream
          trailer or the classic rectangular outline of a VW bus. Now turn it
          into a cafe. If only vintage camper build-outs were that simple.
          Vintage campers—a phrase with a hotly debated definition—aren’t
          admired solely for their build or design. Instead, they’re tied to a
          lifestyle that harkens to a mid-century Americana dream of open, dirt
          roads and obligation-free travels. “From the cars and trailers to the
          music and culture, they call them the good old days for a reason,”
          writes the Vintage Camper Trailers Magazine event page. “The thing
          about the vintage campers—the nostalgia involved in them and the
          appearance, the look, brings back a lot of memories for people, then
          it draws them to what you're doing,” says Terry Ziniewicz, founder of
          Caffewerks, a company that designs parts for and consults with mobile
          coffee setups. “It inspires people to become customers of that stand
          because it's got this unique look.”
        </p>
        <img
          src="@/assets/images/blog/articles/article-8.jpg"
          alt="article image"
        >
        <h5 class="sub-head">
          Extension Note
        </h5>
        <p class="description">
          Nostalgia is a powerful marketing tool. Sounds, smells, and visuals
          from childhood elicit immediate emotions and memories. At one of my
          first cupping sessions, I was told not to talk about memory-induced
          flavors. Yes, that coffee might taste like your grandmother’s bone
          broth but no one else will know what you’re talking about. Psychology
          research divides nostalgia into two kinds: personal and historical.
          Personal nostalgia is the kind where you remember how you were and
          historical is the type that references a time before you were born.
          While the vintage camper community was kept alive by personal
          nostalgia, the branching of the campers into retail fronts is
          maintained by historical nostalgia. As someone who did not grow up
          hearing about their grandparents’ hippie travels or have any restored
          furniture inside the home, I am either the best or worst person to
          write this piece. Recognizing my limitations, I am not going to
          attempt to describe the historical intricacies of various models or
          fake an understanding of van life. I see a vintage camper and
          immediately tie it to the free-spirited hippie scenes from movies and
          shows. Living in San Francisco, there are remnants of this era
          preserved all over the city. For instance, San Francisco-based Sunset
          Roasters is in the middle of a vintage camper cafe build-out. “We
          wanted something that when you looked at it, it immediately would have
          some story to tell,” says co-founder Sara Roliz. “Something that would
          come with a history and then we could continue its story was very
          appealing for us.”
        </p>
        <p class="description">
          NW Mobile Kitchens owner Rich Zeidman, who works on mobile kitchen
          build-outs from start to finish, says one of the biggest mistakes he
          sees is business owners not doing enough research on health codes and
          business planning. He says, “This thing is going to go flying down the
          road at 60 miles an hour and things have gotta be considered from a
          safety point of view.” Ziniewicz agrees and adds that under-budgeting
          is another issue, especially when it’s a DIY project. To help ease the
          process, Caffewerks designed an all-in-one system, complete with a
          water pump and electrical panel, that people can install on their own
          mobile unit. For new ideas and inventions like the system, Caffewerks
          likes to test them on existing units like in the case of Bend,
          Oregon-based Autobahn Coffee.
        </p>
      </b-col>
      <b-col cols="12" lg="8" class="mt-4">
        <b-row class="other-articles" align-h="between">
          <b-col cols="12" md="6" lg="5" class="prev-article">
            <div class="d-flex align-items-center">
              <b-icon-chevron-left class="icon mr-2" />
              <div>
                <span>Previous</span>
                <a href="#">
                  Officine Fratelli Bambi: A New Bespoke Espresso Machine Studio
                  From La Marzocco
                </a>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="6" lg="5" class="next-article">
            <div
              class="d-flex align-items-center flex-row-reverse"
              style="text-align:end"
            >
              <b-icon-chevron-right class="icon ml-2" />
              <div>
                <span>Next</span>
                <a href="#">
                  Coffee Snacks Review: The Fiber One 70 Calorie Coffee Cake
                  Soft-Baked Bar
                </a>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { BIconChevronLeft, BIconChevronRight } from 'bootstrap-vue'
export default {
  components: {
    BIconChevronLeft,
    BIconChevronRight
  },
  data () {
    return {
      yourArray: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Articles',
          to: '/blog/articles/'
        },
        {
          text: 'Single Article',
          active: true
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.article {
  .date {
    color: #8a8a8a;
  }
  .title {
    color: #181818;
    font-weight: bold;
    margin: 0;
  }
  img {
    height: auto;
    border-radius: 1rem;
    margin: 2rem 0;
  }
  .description {
    color: $gray-dark;
    line-height: 1.5rem;
    text-align: justify;
  }
  .sub-head {
    color: $gray-dark;
  }
  .other-articles {
    .icon {
      color: #1e57a3;
    }
    .span {
      color: #181818;
    }
    .a {
      color: $main-color;
    }
  }
}
</style>
