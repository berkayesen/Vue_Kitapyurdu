<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item
        v-for="(m,index) in getData"
        :key="index"
        :product="m"
      >

        <v-card
          class="ma-4"
          height="250"
          width="100"
          @click="$router.push({ path: `/Details/${m.id}` })"
        >

          <v-img
            height="200"
            width="100"
            :src="m.src"
            style="object-fit: cover;"
          ></v-img>
            <v-card-text>
              <div>{{m.title}}</div>
            </v-card-text>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
              </v-row>
              </v-card>

              </v-slide-item>

              </v-slide-group>

              </v-sheet>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // data: () => ({
  //     model: [
  //         {id:1,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true'},
  //         {id:2,title : 'Şeker Portakalı',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true'},
  //         {id:3,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true'},
  //         {id:4,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true'},
  //         {id:5,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true'},
  //         {id:6,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true'},
  //         {id:7,title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true'},
  //         {title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true'},
  //          {title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true'},
  //         {title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true'},
  //          {title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true'},
  //         {title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true'},
  //          {title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true'},
  //         {title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true'},

  //         {title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true'},
  //         {title : 'Momo',src:'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true'},
  //     ],

  // }),
  data() {
    return {
      //  newId:0
      // dataList:[]
      // selectedTutor : null
    }
  },
  // created(){
  //     this.$store.dispatch( 'getD', {
  //         id: this.$route.params.id
  //     });
  // },
  // created() {
  //     axios
  //       .get('http://localhost:3000/products')
  //       .then((res) => {
  //           this.dataList= res.data;
  //       })
  // },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    // ...mapState (["products"]),
    ...mapGetters(['getData'])
  },
  methods: {
    // ...mapMutations(["ADD_INDEX"]),
    // addIndex(index){
    //   // this.newId = index
    //   this.ADD_INDEX(index);
    //   // this.newId=0;
    // }
    // ...mapActions(["addsIndex"]),
    // addIndex(index){
    //   this.addsIndex(index);
    // }
    getD(id) {
      // this.selectedTutor = id
      this.$store.dispatch('getD', id)
      // this.selectedTutor = null
    }
  }
}
</script>





