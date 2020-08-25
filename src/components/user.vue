<template>
    <div>
        <h2>这是一名菜鸟</h2>
        <font color="red">{{$route.params.id}}</font>
        <router-view/>
    </div>
</template>
<script>
export default {
  data(){
      return {
         re:"",
         lisNav:[]
      }
  },
  created(){
      this.re=this.$route.params.id
      console.log(this.re)
  }
};
</script>
<style>

</style>