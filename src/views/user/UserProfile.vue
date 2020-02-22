<template>
    <!--$route.params.id 中的id 与路径变量对应-->
    <div>
      个人信息 = {{$route.params.id}}
    </div>
</template>

<script>
    export default {
      name: "UserProfile",
      beforeRouteEnter: (to, from, next) =>{
        console.log("准备进入个人信息页面");
        next(vm => {
          vm.getData()
        });
      },
      beforeRouteLeave: (to, from, next) =>{
        console.log("准备离开个人信息页面");
        next();
      },
      methods:{
        getData: function () {
          this.axios({
            method:"get",
            url:"http://localhost:8080/data.json"
          }).then(function (response) {
            console.log(response)
          }).catch(function (err) {
            console.log(err)
          })

        }
      }
    }
</script>

<style scoped>

</style>
