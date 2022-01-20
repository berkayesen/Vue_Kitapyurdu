<template>
  <v-carousel >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      contain
    ></v-carousel-item>
  </v-carousel>
</template>
<script>

import  {mapState} from 'vuex'
  export default {
    // data () {
    //   return {
    //     items: [
    //       {
    //         src: 'https://img.kitapyurdu.com/v1/getImage/fn:11432065/wi:940/wh:5e820ea49',
    //       },
    //       {
    //         src: 'https://img.kitapyurdu.com/v1/getImage/fn:11466329/wi:940/wh:230612613',
    //       },
    //       {
    //         src: 'https://img.kitapyurdu.com/v1/getImage/fn:11450909/wi:940/wh:9842e591b',
    //       },
    //       {
    //         src: 'https://img.kitapyurdu.com/v1/getImage/fn:11466439/wi:940/wh:c427be1fc',
    //       },
    //        {
    //         src: 'https://img.kitapyurdu.com/v1/getImage/fn:11460737/wi:940/wh:da94789c4',
    //       },
    //       {
    //         src: 'https://img.kitapyurdu.com/v1/getImage/fn:11432063/wi:940/wh:385f8d5cb',
    //       },
    //       {
    //         src: 'https://img.kitapyurdu.com/v1/getImage/fn:11467832/wi:940/wh:9a768143c',
    //       },
    //       {
    //         src: 'https://img.kitapyurdu.com/v1/getImage/fn:11467832/wi:940/wh:9a768143c',
    //       },
          
    //     ],
    //    }
    // },
    computed : {
        ...mapState(["items"])
    }
  }
</script>