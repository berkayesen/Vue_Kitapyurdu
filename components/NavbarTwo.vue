<template>
    <div >
    <v-app-bar
      color="white"
      
    >
   

      <v-toolbar-title style="font-weight: bold;" class="green--text">Kitapyurdu.com</v-toolbar-title>

      <v-spacer></v-spacer>
    
      <v-text-field
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
                    v-for="(item, i) in items"
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

       <!-- <v-btn icon style="margin-right: 25px;">  -->
        <!-- <v-icon>mdi-cart</v-icon>
        Sepetim -->
      <!-- </v-btn> -->
    </v-app-bar>
  </div>
</template>

<script>

    import { mapGetters } from "vuex"
    export default{
          data (){
            return {
              helps:[
                {title:"Yardım ve İşlem Rehberi"},
                {title:"Sıkça Sorulan Sorular"},
                {title:"Video Yardım"},
                {title:"Önerim Var"},
                {title:"İletişim"}
              ],
              lists:[
                {title:"Favorilerim"},
                {title:"Alışveriş Listem"},
                {title:"Okuma Listelerim"},
                {title:"Uyarım Listem"},
                {title:"Satın Aldıklarım"}

              ],
              siparisTakibis:[
                {title:"Şiparişlerim"},
                {title:"Müşteri Hizmetler"},
                {title:"Havale/EFT"},
              ],
              languages:[
                {title:"Türkçe"},
                {title:"English"},
                {title:"Deutsch"},
              ],
              moneys:[
                {title:"TL"},
                {title:"EUR"},
                {title:"GBP"},
                {title:"USD"},
              ],
              items: [
              {
                src: 'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true',
                title: 'Momo',
                artist: 'Foster the People',
              },
              {
                src: 'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
              }
          
            ]
          }
        },
        computed : {
            ...mapGetters(["baskets"])
        }
       
      }
</script>


<style>
  .a{
    opacity: 1;
    color: black;
  }
  
</style>
  