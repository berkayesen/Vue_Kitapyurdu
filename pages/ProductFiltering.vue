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

        
      <v-toolbar-title style="font-weight: bold;" class="green--text">
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



        <v-container style="margin-top: 150px;">
            <v-card max-width="1200px">
                <v-row md="1">

                    <v-col md="1">
                        <p class="my-5 mx-4" style="font-size: small;">
                            Sırala
                        </p>
                    </v-col>
                    <v-col md="2">
                        <v-select
                            :items="items"
                            placeholder="Varsayılan"
                            outlined
                            class="my-1"
                            x-small
                            :menu-props="{bottom:true,offsetY:true}"

                        ></v-select>
                    </v-col>
                    <v-col md="1">
                        <p class="my-5 mx-4" style="font-size: small;">
                            Göster
                        </p>
                    </v-col>
                    <v-col md="1">
                        <v-select
                            :items="items2"
                            placeholder="20"
                            outlined
                            class="my-1"
                            small
                            :menu-props="{bottom:true,offsetY:true}"
                        ></v-select>
                    </v-col>

                    <v-col md="1" offset-md="4">
                        <v-btn
                            class="mx-2 my-4"
                            style="box-shadow: none;"
                            color="transparent"

                            >
                                <v-icon dark>
                                    mdi-apps
                                </v-icon>
                            </v-btn>
                    </v-col>
                    <v-col md="1">
                        <v-btn
                            class="mx-3 my-4"
                            color="transparent"
                            style="box-shadow: none;"
                            >
                                <v-icon dark>
                                    mdi-view-list
                                </v-icon>
                            </v-btn>
                    </v-col>



                </v-row>
                <v-divider></v-divider>
                <v-row  v-for="(product,index) in filteredData" :key="index" md="5" class="my-2">
                    <v-col md="2">
                        <v-img :src="product.src" class="my-5 mx-4">
                        </v-img>
                    </v-col>
                    <v-col md="4">
                        <p style="font-size: larger; font-weight: bold;">
                            <!-- Şefin Tavisyesi Domates --> {{product.title}}
                        </p>
                        <a href="#" style="font-size: small; text-decoration: none; color: black;">NTV YAYINLARI</a>
                        <div>
                            <p style="font-size: small; display: inline-block;">Yazar</p>
                            <a href="#" style="text-decoration: none; font-size: small;">Murat Arslan</a>
                        </div>
                        <v-rating
                            v-model="rating"
                            background-color="orange lighten-3"
                            color="orange"
                            x-small
                            style="width: 15px;"
                            value="4"
                        ></v-rating>
                        <p style="font-size: small; color: blueviolet;">
                            24 Saatte Kargoda
                        </p>
                    </v-col>
                    <v-col md="2" >
                        <div class="my-8">
                            <p style="font-size: small;" >
                            Sponsorlu
                            </p>
                            <div style="font-size: small;">9786055056612 | TÜRKÇE | 26 | Karton Kapak | Kuşe Kağıt
                            2015-06-09</div>
                            </div>
                    </v-col>
                    <v-col md="3" offset-md="1">
                        <div >
                            <p style="display: inline-block; font-size: small;">
                                Liste Fiyatı:
                            </p>
                            <p style="text-decoration: line-through; font-size: small; display: inline-block;" class="mx-13">
                                <!-- 20.00 --> {{product.price}}
                            </p>
                        </div>
                        <div >
                            <p style="display: inline-block; font-size: small;">
                                Kitapyurdu Fiyatı:
                            </p>
                            <p style="font-size: small; display: inline-block;" class="mx-5">
                                9.00 
                            </p>
                        </div>
                        <div class="d-flex justify-center my-5 " style="margin-right: 115px;" >
                            <v-btn
                                class="mx-2"
                                fab
                                dark
                                x-small
                                color="transparent"
                                style="border: none; box-shadow: none;"
                                @click='addCart(product)'
                                >
                                <v-icon dark style="color: #999;" >
                                    mdi-cart
                                </v-icon>
                            </v-btn>
                            <v-btn
                                class="mx-2"
                                fab
                                dark
                                x-small
                                color="transparent"
                                style="border: none; box-shadow: none;"
                                >
                                <v-icon dark style="color: #999;">
                                    mdi-heart
                                </v-icon>
                            </v-btn>
                            <v-btn
                                class="mx-2"
                                fab
                                dark
                                x-small
                                color="transparent"
                                style="border: none; box-shadow: none;"
                                >
                                    <v-icon dark style="color: #999;">
                                        mdi-tag
                                    </v-icon>
                            </v-btn>
                        </div>

                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <!-- <v-row md="5" class="my-2">
                    <v-col md="2">
                        <v-img src="https://img.kitapyurdu.com/v1/getImage/fn:1032151/wi:100/wh:true"  class="my-5 mx-4">
                        </v-img>
                    </v-col>
                    <v-col md="4">
                        <p style="font-size: larger; font-weight: bold;">
                            Şefin Tavisyesi Domates
                        </p>
                        <a href="#" style="font-size: small; text-decoration: none; color: black;">NTV YAYINLARI</a>
                        <div>
                            <p style="font-size: small; display: inline-block;">Yazar</p>
                            <a href="#" style="text-decoration: none; font-size: small;">Murat Arslan</a>
                        </div>
                        <v-rating
                            v-model="rating"
                            background-color="orange lighten-3"
                            color="orange"
                            x-small
                            style="width: 15px;"
                            value="4"
                        ></v-rating>
                        <p style="font-size: small; color: blueviolet;">
                            24 Saatte Kargoda
                        </p>
                    </v-col>
                    <v-col md="2" >
                        <div class="my-8">
                            <p style="font-size: small;" >
                            Sponsorlu
                            </p>
                            <div style="font-size: small;">9786055056612 | TÜRKÇE | 26 | Karton Kapak | Kuşe Kağıt
                            2015-06-09</div>
                            </div>
                    </v-col>
                    <v-col md="3" offset-md="1">
                        <div >
                            <p style="display: inline-block; font-size: small;">
                                Liste Fiyatı:
                            </p>
                            <p style="text-decoration: line-through; font-size: small; display: inline-block;" class="mx-13">
                                20.00
                            </p>
                        </div>
                        <div >
                            <p style="display: inline-block; font-size: small;">
                                Kitapyurdu Fiyatı:
                            </p>
                            <p style="font-size: small; display: inline-block;" class="mx-5">
                                9.00
                            </p>
                        </div>
                        <div class="d-flex justify-center my-5 " style="margin-right: 115px;" >
                            <v-btn
                                class="mx-2"
                                fab
                                dark
                                x-small
                                color="transparent"
                                style="border: none; box-shadow: none;"
                                >
                                <v-icon dark style="color: #999;">
                                    mdi-cart
                                </v-icon>
                            </v-btn>
                            <v-btn
                                class="mx-2"
                                fab
                                dark
                                x-small
                                color="transparent"
                                style="border: none; box-shadow: none;"
                                >
                                <v-icon dark style="color: #999;">
                                    mdi-heart
                                </v-icon>
                            </v-btn>
                            <v-btn
                                class="mx-2"
                                fab
                                dark
                                x-small
                                color="transparent"
                                style="border: none; box-shadow: none;"
                                >
                                    <v-icon dark style="color: #999;">
                                        mdi-tag
                                    </v-icon>
                            </v-btn>
                        </div>

                    </v-col>
                </v-row> -->
                <v-row md="1" class="my-2">
                    <p class="mx-7 my-5">
                        Gösterilen: 1 ile 1 arası, toplam: 1 (1 Sayfa)
                    </p>
                </v-row>
            </v-card>
        </v-container>

    </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'


  export default {

    data() {
        return {
            items: ["Ucuzdan Pahalıya", "Pahalıdan Ucuza", "Yüksek Oylama", "Düşük Oylama"],
            items2: ["20", "25", "50", "75"],
            rating1: 5,
            page: 1,
            search:'',
            // dataList :[]
        };
    },
    // created() {
    //     axios 
    //       .get('http://localhost:3000/products')
    //       .then((res) => {
    //           this.dataList= res.data;
    //       })
    // },
    // // eslint-disable-next-line vue/order-in-components
    computed : {
        ...mapGetters(["getProducts","discountProduct","getBaskets","getData"]),
        ...mapActions(["addSepet"]),
        
        filteredData(){
            return this.getData.filter(p=>p.title.toLowerCase().includes(this.search.toLowerCase()))
            // return this.getProducts.filter(product=>product.title.toLowerCase().includes(this.search.toLowerCase()))
        },
        // eslint-disable-next-line vue/return-in-computed-property
        addCart(index){
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.addSepet = index;
        }
    }
}
</script>