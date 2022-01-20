<template>
    <v-app>
        <v>
            <nuxt/>
        </v>
    </v-app>
</template>
<script>

export default {
  data() {
    return {
      id:null
    }
  },
  created() {
    this.$store.dispatch("getData");
    this.$store.dispatch("getD",this.id);
  },

}

</script>
