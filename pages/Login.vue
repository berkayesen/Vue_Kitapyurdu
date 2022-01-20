<template>
    <v-container>
                <v-card width="350px">
                    <v-card-title style="background-color:#CFD8DC; font-weight: bold; font-size: x-large;">Hoşgeldiniz</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-form v-model="valid">
                            <v-container>
                            
                                <v-col style="width: 250px;" >
                                    <v-row
                                        cols="12"
                                        md="4"
                                    >   
                                        <p style="margin-right: 5px;margin-top: 25px;">
                                            Email:
                                        </p>
                                        <v-col class=".col-md-12">
                                        <v-text-field
                                            v-model="email"
                                            :rules="emailRules"
                                            label="E-mail"
                                            solo
                                            ></v-text-field>
                                        </v-col>
                                        
                                    </v-row>
                                    <v-row
                                        cols="12"
                                        md="4"
                                    >   
                                        <p style="margin-top: 25px; margin-right: 5px;">
                                            Şifre:
                                        </p>

                                        <v-col>
                                            <v-text-field
                                            v-model="password"
                                            :rules="passwordRules"
                                            :counter="10"
                                            label="Şifre"
                                            solo
                                            ></v-text-field>
                                        </v-col>  
                                        
                                    </v-row>

                                    <v-row>
                                        <v-checkbox
                                        v-model="checkbox"
                                        :label="`Beni Hatırla:`"
                                        ></v-checkbox>
                                        <p style="margin-top: 21px; margin-left: 25px;">
                                            Şifremi Unuttum
                                        </p>
                                    </v-row>
                                    <v-row
                                        cols="12"
                                    >
                                        <v-card-actions>
                                            <v-btn
                                                text
                                                color="white"
                                                style="background-color: orange; margin-left: 54px;"
                                                class="px-13 py-3"
                                                x-large
                                            >
                                                Giriş Yap
                                            </v-btn>
                                        </v-card-actions>
                                    </v-row>
                                    <v-row
                                        cols="12"
                                    >
                                        <v-card-actions>
                                            <v-btn
                                                text
                                                color="black"
                                                style="background-color: white; margin-left: 50px;"
                                                class="px-5 py-2"
                                                x-large
                                            >
                                                Ücretsiz Üye ol
                                            </v-btn>
                                        </v-card-actions>
                                    </v-row>
                            
                            
                                    
                                </v-col>
                            </v-container>
                        </v-form>

                    </v-card-text>


                </v-card>
    </v-container>
   
</template>

<script>
export default({
  data: () => ({
    valid: false,
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 10 || 'Password must be less than 6 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    checkbox: true,
  }),
})


</script>