<template>

    <div>

        <v-app-bar
      color="black"
      dense
    >

      <!-- <v-btn style="margin-right: 25px; background-color:orange;" >
        <v-toolbar-items class="white--text">Üye ol</v-toolbar-items>
      </v-btn>

      <v-btn class="a" style="background-color: orange;">
        <v-toolbar-items class="white--text">Giriş Yap</v-toolbar-items>
      </v-btn>

   -->

      <v-btn style="background-color: orange; box-shadow: none;" to="Login">
        <v-toolbar-items class="white--text">Giriş Yap</v-toolbar-items>
      </v-btn>
      <v-btn style="background-color:transparent;border-color: transparent; box-shadow:none;" class="mr-5" to="Register" >
        <v-toolbar-items class="white--text">
          Üye ol

        </v-toolbar-items>
      </v-btn>


      <v-spacer></v-spacer>

     <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            class="white--text"
            style="margin-right: 75px;"
            v-on="on"
          >
           Listelerim

          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(list,index) in lists"
            :key="index"
            @click="() => {}"
          >
            <v-list-item-title>{{ list.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
      <v-menu
          offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            style="margin-right: 75px;"
            class="white--text"
            v-on="on"
          >
           Sipariş Takibi
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(siparisTakibi,index) in siparisTakibis"
            :key="index"
            @click="() => {}"
          >
            <v-list-item-title>{{ siparisTakibi.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
      <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            style="margin-right: 50px;"
            class="white--text"
            v-on="on"
          >
           Türkçe
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(language,index) in languages"
            :key="index"
            @click="() => {}"
          >
            <v-list-item-title>{{ language.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
      <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            style="margin-right: 50px;"
            class="white--text"
            v-on="on"
          >
           TL
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(money,index) in moneys"
            :key="index"
            @click="() => {}"
          >
            <v-list-item-title>{{ money.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>

      <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            class="white--text"
            style="margin-right: 25px;"
            v-on="on"
          >
           Yardım
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(help,index) in helps"
            :key="index"
            :menu-props="{bottom:true,offsetY:true}"
            @click="() => {}"
          >
            <v-list-item-title>{{ help.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
        </v-app-bar>

        <div >
            <v-app-bar
            color="white"
            >

                
            <v-toolbar-title style="font-weight: bold;" class="green--text"  >
                     <NuxtLink style="font-weight: bold; text-decoration:none" class="green--text" to="/"> Kitapyurdu.com</NuxtLink>
                    
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-text-field
                v-model="search"
                style="margin-top: 25px; "
                placeholder="kitap adı,yazar veya yayın evi"
                dense
                solo
            ></v-text-field>



            <v-btn  style="background-color: orange;" to="ProductFiltering">
                <v-icon>mdi-magnify </v-icon>
            </v-btn>


            <v-spacer></v-spacer>
            <div class="text-center">
                <v-menu offset-y>
                <template #activator="{ on, attrs }">

                    <v-btn
                    dark
                    v-bind="attrs"
                    style="margin-right: 25px; background-color: transparent; box-shadow: none;"
                    v-on="on"
                    >
                    <p style="color: black;" class="my-2 mx-1">
                    Sepetim
                    </p>

                    <v-icon style="color: orange;">
                        mdi-cart
                    </v-icon>
                    </v-btn>
                </template>
                <v-card style="width: 400px;">
                    <div>
                        <v-row
                            v-for="(item, i) in getBaskets"
                            :key="i">
                            <v-col

                            >
                                <v-card>
                                        <div class="d-flex flex-no-wrap justify-space-between">
                                            <v-avatar
                                            class="ma-3"
                                            size="60"
                                            tile
                                            >
                                            <v-img :src="item.src" contain></v-img>
                                            </v-avatar>
                                            <div>
                                                <v-card-title
                                                class="text-h5"
                                                v-text="item.title"
                                                ></v-card-title>

                                                <v-card-subtitle v-text="item.id"></v-card-subtitle>
                                            </div>
                                        </div>
                                        <v-divider class="mx-4"></v-divider>
                                        <v-card-text>
                                            <v-chip-group
                                                v-model="selection"
                                                column
                                            >
                                                <v-chip class ="orange">Sepete git</v-chip>
                                                <v-spacer></v-spacer>
                                                <v-chip class="red">Satın al</v-chip>
                                            </v-chip-group>
                                        </v-card-text>
                                </v-card>

                            </v-col>
                        </v-row>
                    </div>
                </v-card>
                </v-menu>
            </div>

            <!-- <v-btn icon style="margin-right: 25px;">
                <v-icon>mdi-cart</v-icon>
                Sepetim
            </v-btn> -->
            </v-app-bar>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        
        <div class="container">
             <v-card>
                
                <v-row md="12">
                    <v-col md="4">
                    
                        <v-img
                            :src="getD.src"
                            class="my-4 mx-2"
                            
                        >
                        </v-img>
                        <v-divider></v-divider>
                        <v-btn
                            class="mx-4 my-4"
                            fab
                            dark
                            color="#EF6C00"
                            >
                            <v-icon dark>
                                mdi-plus
                            </v-icon>
                        </v-btn>
                        <v-divider></v-divider>
                        <div style="display: block;" class="my-3 mx-4">
                            <v-icon left >
                                    mdi-pencil
                            </v-icon>
                            Yorumlar
                        </div>

                        <div style="display: block;" class="my-3 mx-4">
                            <v-icon left >
                                    mdi-pencil
                            </v-icon>
                            Yorumlar
                        </div>
                        
                    
                    </v-col>
                    <v-col md="8" >
                        <v-card>
                            <v-row md="12">
                                <v-col md="8" >
                                    <v-card >
                                        <h1 style="font-weight: normal;" class="mx-5">
                                            {{getD.title}} --{{getD.id}}
                                        </h1>
                                        <div class="my-7 mx-5">
                                            <a href="#" class="mx-3">Mert Arık</a> | 
                                            <a href="#" class="mx-3 ">TİMAŞ ÇOCUK YAYINLARI</a>
                                        </div>
                                        <v-btn  class="mx-5 my-2" style="background-color: white;">
                                            <v-rating
                                                v-model="rating"
                                                background-color="orange lighten-3"
                                                color="orange"
                                                large
                                            
                                            ></v-rating>
                                        </v-btn>
                                        <h4 class="mx-5 my-5" >
                                            Herkes zürafa resmi çizebilir. Siz de çizebilirsiniz!
                                            Moni, resim derslerini çok severdi. İlginç şekiller çizmeye ve renklerle oynamaya bayılırdı. Fakat bir gün tuhaf bir şey oldu. Moni resim çizemedi.
                                            Hem de zürafa resmini… Öğretmeni, Moni’yi hayal ettiği her zürafayı çizebileceği konusunda cesaretlendirmeye çalışsa da o ikna olmuyordu.
                                            Ancak öğretmeninin pes etmeye niyeti yoktu. Tabii Moni’nin de… Peki Moni, zürafa resmi çizebildi mi?
                                        </h4>
                                        <v-expansion-panels>
                                            <v-expansion-panel
                                                v-for="(item,i) in 1"
                                                :key="i"
                                            >
                                            <v-expansion-panel-header style="width: 185px;">
                                                <v-btn small >
                                                    devamını oku...
                                                </v-btn>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                            <h4>
                                                Hayal etmenin, kendine inanmanın, azim ve cesaretin önemini vurgulayan “Benim Zürafam Uçabilir”, kendini keşfetmek ve özgürce hayal etmek isteyen herkesi büyüleyici dünyasına ortak olmaya davet ediyor.
                                            </h4>
                                            </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panels>

                                    

                                        <v-row>
                                            <v-col md="3" class="mx-5 my-3">
                                            <p>Çizer:</p>
                                            <p>Yayın Tarihi:</p>
                                            <p>ISBN:</p>
                                            <p>Dil:</p>
                                            <p>Sayfa Sayısı:</p>
                                            <p>Cilt Tipi:</p>
                                            <p>Kağıt Cinsi:</p>
                                            <p>Boyut:</p>

                                            </v-col>
                                            <v-col md="5" align-center class="my-3">
                                            <p>adwadwadawdawd</p>
                                            <p>adwadwadawdawd</p>
                                            <p>adwadwadawdawd</p>
                                            <p>adwadwadawdawd</p>
                                            <p>adwadwadawdawd</p>
                                            <p>adwadwadawdawd</p>
                                            <p>adwadwadawdawd</p>
                                            <p>adwadwadawdawd</p>
                                            </v-col>
                                        </v-row>

                                        <v-divider></v-divider>
                                        <p class="mx-5 my-3">Bu üründen 11.219 adet satın alınmıştır.</p>
                                        <v-divider></v-divider>
                                        
                                        <p class="mx-5 my-3" >İlgili Kategoriler:</p>
                                        <p class="mx-5 my-3">İlgili Kategoriler:</p>
                                
                                    </v-card>
                                </v-col>
                                <v-col md="4">
                                        <v-card style="margin-top: 75px; margin-right:15px">
                                            <v-card-title>
                                                <div>
                                                    <div>
                                                    <p class="mx-1 justify-start" style="margin-top: 10px; display:inline-block ; font-size: small;" >Kitapyurdu Fiyatı :</p>
                                                    <div style="background-color:red; display:inline-block;" class="justify-end mr-auto">%30</div>
                                                    </div>
                                                
                                                    <div style="background-color:orange; display:inline-block;">{{getD.price}} TL</div>
                                                </div>
                                                
                                            </v-card-title>
                                            <v-card-text>
                                                <v-row>
                                                    <v-col md="3" class="my-auto">
                                                        <v-btn
                                                            class=""
                                                            fab
                                                            dark
                                                            color="#EF6C00"
                                                            x-small
                                                            style="display: block;"
                                                            >
                                                            <v-icon dark>
                                                                mdi-plus
                                                            </v-icon>
                                                        </v-btn>
                                                    </v-col>
                                                    <v-col md="9">
                                                        <div style="display: inline-block; ">24 Saatte Kargoda</div>
                                                        <div style="display: inline-block;">Stok Miktarı +10</div>
                                                    </v-col>
                                                </v-row>
                                                
                                            </v-card-text>    
                                        
                                            <v-card-actions style="background-color: orange;" class="mx-3 my-4">
                                                <v-btn icon style="margin-left: 85px;"    @click="addBasket(getIndex.id)" >
                                                    Sepete Ekle 
                                                    <v-icon >mdi-cart</v-icon>
                                                </v-btn>   
                                            </v-card-actions>   

                                            <div class="mx-3 my-2">
                                                <p class="my-1" style="font-size: small;">Kazancınız:  5,25</p>
                                                <p class="my-1" style="font-size: small;">Kazanacağınız Puan: 22</p>   
                                            </div>

                                            <v-divider></v-divider>

                                            <div style="display: block;" class="my-4 mx-2">
                                                <v-icon left >
                                                        mdi-pencil
                                                </v-icon>
                                            Favorilerime Ekle
                                            </div>

                                            <div style="display: block;" class="my-4 mx-2">
                                                <v-icon left >
                                                        mdi-pencil
                                                </v-icon>
                                            Alışveriş Listesine Ekle
                                            </div>

                                                                
                                        </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                        
                        
                    </v-col>
                </v-row>   
        </v-card>
        </div>
       
    </div>
    


  

</template>



<script>
 import { mapActions ,mapGetters} from "vuex"


 export default {
    // eslint-disable-next-line vue/require-prop-types
    props : ["product"],
    data: () => ({
      rating: 4,
   
    }),
    // created(){
    //     this.$store.dispatch( 'getD', {
    //         id: this.$route.params.id
    //     });
    // },
    // eslint-disable-next-line vue/order-in-components
    computed : {
       ...mapGetters(["getIndex"]),
       ...mapGetters(["getBaskets"]),
       ...mapGetters(["getD"])

    },
    methods: {
        ...mapActions(["addsBaskets"]),
        addBasket(index){
            this.addsBaskets(index);
        },
        
    },
    // eslint-disable-next-line vue/order-in-components

  }
</script>